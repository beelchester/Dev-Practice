use std::sync::{Arc, Mutex};
#[tokio::main]
async fn main() {
    // this will be never executed unless awaited
    let task = tokio::spawn(async {
        println!("Hello from a task!");
    });

    task.await.unwrap();

    let mut num = 1;
    let moved_task = tokio::spawn(async move {
        num += 1;
        println!("Number is: {}", num);
    });
    println!("Num in main is: {}", num);
    moved_task.await.unwrap();
    println!("Num again in main is: {}", num);
    // still 1 because it was moved to the task and not shared

    let arc_num = Arc::new(10);

    let arc_task = tokio::spawn(async move {
        println!("Number is: {}", arc_num);
        let _n = arc_num.clone();
        // n += 1; // cant do this because Arc is not mutable
    });
    arc_task.await.unwrap();

    let mutex_num = Arc::new(Mutex::new(10)); // Mutex is a smart pointer that allows multiple threads to access the same data

    let mutex_task = tokio::spawn(async move {
        let mut num = mutex_num.lock().unwrap();
        *num += 1;
        println!("Number is: {}", *num);
    });

    mutex_task.await.unwrap();
    // println!("Num again in main is: {}", mutex_num.lock().await);
    // error because shared state having mutex is not allowed to be accessed by multiple tasks
    // as mutex is exclusive access and we are creating two references to the same data
    // so we need to use clone to create a new reference to the data and use that same reference in both tasks

    let new_mutex_num = Arc::new(Mutex::new(100));
    // let mutex_num_clone = Arc::clone(&new_mutex_num);
    // or we can use clone method
    let mutex_num_clone = new_mutex_num.clone();
    // now lets move the clone to the task
    let mutex_task_clone = tokio::spawn(async move {
        let mut num = mutex_num_clone.lock().unwrap();
        *num += 1;
        println!("Number is: {}", *num);
    });

    mutex_task_clone.await.unwrap();
    // accessing same clone referenced data in main
    println!("mutex num in main is: {}", new_mutex_num.lock().unwrap());

    let mut_plus_one = new_mutex_num.lock().unwrap();
    println!("mutex num +1 in main is: {}", *mut_plus_one + 1);
}
