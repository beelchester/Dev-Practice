package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/stripe/stripe-go/v72"
	"github.com/stripe/stripe-go/v72/paymentintent"
)

func main () {
    
    stripe.Key = "sk_test_51NLPCrSBQSnJRGerXh5UbHU8eltYsBEcsKHMgRAVt9zsKRKS8CEJSTVhRfPli7vUSMje0DgoQ2NLLSsivBjAoZq800L1pqVo9y"



    http.HandleFunc("/create-payment-intent", handleCreatePaymentIntent) // no () after handleCreatePaymentIntent because we are passing the function itself as an argument, not the result of the function, HandleFunc will call it for us

    // HandleFunc registers the handler function for the given pattern, i.e what happens when the user goes to the /create-payment-intent endpoint

    http.HandleFunc("/health", handleHealth)


    log.Println("Server listening on port 4242") // log prints time and date, and the message
   var err error = http.ListenAndServe("localhost:4242", nil) // listen for requests on port 4242. nil here is handler, which we don't need to specify in our case for now
// if error then err will be non-nil, it will catch the error,else the ListenAndServe function will work as it is
// ListenAndServe returns error type or nil

if err != nil {
    log.Fatal(err)
}
}

func handleCreatePaymentIntent(w http.ResponseWriter, r *http.Request) { 
    // w is response writer meaning what we send back to the user, r is the request meaning what the user sends to us
    // fmt.Println("hello world")
    if (r.Method != "POST") {
        http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed) // http.StatusMethodNotAllowed is 405
        //Error uses response writer to send back the error message to the user
        return
    }

    var req struct { // how the request should look like
        ProductID string `json:"product_id"` // json:"product_id" is a tag, it is used to map the json key to the struct field
        FirstName string `json:"first_name"`
        LastName  string `json:"last_name"`
		Address1  string `json:"address_1"`
		Address2  string `json:"address_2"`
		City      string `json:"city"`
		State     string `json:"state"`
		Zip       string `json:"zip"`
		Country   string `json:"country"`
    }

    err := json.NewDecoder(r.Body).Decode(&req) 
    // r.Body is a reader, it is a stream of bytes, it is the body of the requests
    // &req is a pointer to the struct, we are passing the address of the struct
    // Decode will take the body of the request and decode it into the struct, meaning it will take the json and put it into the struct
    // Decode will return an error if it fails to decode the json into the struct, suppose the json is not in the correct format

    if err != nil {
        http.Error(w,err.Error(),http.StatusInternalServerError) // http.StatusInternalServerError is 500
        return
    }

    // res:= []byte(fmt.Sprintf("Hello %s %s, you want to buy %s", req.FirstName, req.LastName, req.ProductID))
    //Sprintf returns a string

    // w.Write(res) // we are sending the response back to the user

    // sample request body :
    // {
    //     "product_id": "prod_123",
    //     "first_name": "John",
    //     "last_name": "Doe",
    //     "address_1": "123 Main Street",
    //     "address_2": "Suite 456",
    //     "city": "San Francisco",
    //     "state": "CA",
    //     "zip": "94111",
    //     "country": "US"
    // }

    params := &stripe.PaymentIntentParams{
        Amount: stripe.Int64(calculatedOrderAmount(req.ProductID)), 
        Currency: stripe.String(string(stripe.CurrencyINR)),
        AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{
            Enabled: stripe.Bool(true),
        },
        Description: stripe.String("Software development services"),
    }

    paymentIntent, err := paymentintent.New(params)
    if err != nil {
        http.Error(w,err.Error(),http.StatusInternalServerError) // http.StatusInternalServerError is 500
        return
    }

    res := struct {
        ClientSecret string `json:"clientSecret"` // not used snake case because frontend is setup to use this in camel case
    }{
        ClientSecret: paymentIntent.ClientSecret,
    } // equivalent of res.clientSecret = paymentIntent.ClientSecret

    var buf bytes.Buffer // we are creating a buffer to store the response
    err = json.NewEncoder(&buf).Encode(&res) // we are encoding the response into json and sending it back to the user

    if err != nil {
        http.Error(w,err.Error(),http.StatusInternalServerError) // http.StatusInternalServerError is 500
        return
    }

    w.Header().Set("Content-Type", "application/json") // we are setting the content type of the response to json 

    _,err = io.Copy(w,&buf) // we are copying the response from the buffer to the response writer, i.e sending the response back to the user

    if err != nil {
        fmt.Println(err)
    }

    // err = json.NewEncoder(w).Encode(&res) // we are encoding the response into json and sending it back to the user
    //
    // if err != nil {
    //     http.Error(w,err.Error(),http.StatusInternalServerError) // http.StatusInternalServerError is 500
    //     return
    // }
    // we could have directly encoded to w instead of buffer like above commented code, but using buffer provides more flexibilit like:
    // The use of the buffer in the original code provides an extra layer of error handling. By encoding the response into a buffer first, the code can check for any errors during the encoding process before writing the response to the HTTP response writer (w)

    // for events such as payment success or failure we should use webhooks instead like we did in frontend
    // we should not use the client secret in frontend, we should use it in backend only
    // also webhooks has its own advantages like it is more secure, it is more reliable, it is more scalable
    // also here we are skipping database
}

func calculatedOrderAmount(productID string) int64 {
    switch productID {
        case "Forever Pants":
            return 26000 // cents
        case "Forever Shorts":
            return 30000
        case "Forever Shirt":
            return 15500
        }
        return 0
}

func handleHealth(w http.ResponseWriter, r *http.Request) { 
    
    var response []byte = []byte("ok") // this is a slice of bytes, we are converting the string "ok" to a slice of bytes
    fmt.Println(response) // prints [111 107] because 111 is the ascii code for o and 107 is the ascii code for k

    // int,err  :=  w.Write(response) // it returns int and error .... here we are doing type inference
    // Write takes a slice of bytes and writes it to the response writer
    // fmt.Println(int,err) // prints 2 <nil> because we are sending 2 bytes and there is no error
    _,err  :=  w.Write(response) // ignoring int
    if err != nil {
        log.Fatal(err)
    }
}
