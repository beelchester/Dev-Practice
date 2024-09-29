package main

import (
	"log/slog"
	"time"
)

func main() {
	var data []int
	for i := 0; i < 1000000; i++ {
		data = append(data, i)
	}

	// synchronously finding 923748
	start := time.Now()
	for _, v := range data {
		if v == 923748 {
			slog.Info("found sync")
		}
	}
	slog.Info("sync time: ", time.Since(start))

	// async
	start = time.Now()      // reset timer
	found := make(chan int) // channel
	for i := 0; i < 4; i++ {
		// 4 separate go routines that will search 4 divisions of the data concurrently
		go func(i int) {
			for _, v := range data[i*250000 : (i+1)*250000] {
				if v == 934842 {
					found <- v
				}
			}
		}(i)
	}

	select {
	// select is similar to a switch statement, but it only works with channels
	// it blocks until one of the cases is ready
	// if multiple cases are ready, one is chosen at random

	case <-found:
		slog.Info("found 934842 async")
		slog.Info("asynchronous search took ", time.Since(start))

	}

	/*
		2024/04/21 18:04:49 INFO found sync
		2024/04/21 18:04:49 INFO sync time:  !BADKEY=639.292µs
		2024/04/21 18:04:49 INFO found 934842 async
		2024/04/21 18:04:49 INFO asynchronous search took  !BADKEY=245.167µs
	*/

}
