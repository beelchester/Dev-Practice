package pointerserrors

import (
	"errors"
	"fmt"
)

// type Wallet struct {
//     balance int
// }
//
// // methods
//
// func (w *Wallet) Deposit(amount int) {
//     w.balance += amount
// }
//
// // func ( w Wallet) Balance () int {
//     // return w.balance // this will always return 0 as it is a copy of the wallet, not the actual Wallet
//     // It will always have initial values of Wallet. Other functions affecting the Wallet will not affect this copy
//     // To fix this we need to use pointers
//
// func ( w *Wallet) Balance () int {
// println("address",&w.balance)
//     return w.balance
//     // above is equivalent to (*w).balance, which is dereferencing the pointer. But go allows us to use w.balance
//     // These are called automatic dereferencing
//     // We didnt actually needed pointer in Balance() only in Deposit() was required but for the sake of consistency we used it
// }

type Bitcoin int  // just making int more descriptive, it is type declaration not struct

type Wallet struct {
    balance Bitcoin
}

func (w *Wallet) Deposit(amount Bitcoin) {
    w.balance += amount 
}

func ( w *Wallet) Balance () Bitcoin {
    return w.balance
}


type Stringer interface {
    String() string
}

func (b Bitcoin) String() string { // Stringer interface, converts Bitcoin to string, will be implemented automatically // if we use %s to print this, else if %d is used only integer value
    //This interface is defined in the fmt package and lets you define how your type is printed when used with the %s format string in prints
    return fmt.Sprintf("%d BTC", b) 

}

var ErrInsufficientFunds = errors.New("cannot withdraw, insufficient funds")

func (w *Wallet) Withdraw(amount Bitcoin) error{

    if amount > w.balance {
        return ErrInsufficientFunds
    }

    w.balance -= amount
    return nil
}


/*
Pointers can be nil
When a function returns a pointer to something, you need to make sure you check if it's nil or you might raise a runtime exception - the compiler won't help you here.
Useful for when you want to describe a value that could be missing
*/
