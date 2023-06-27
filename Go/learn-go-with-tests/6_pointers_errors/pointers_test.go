package pointerserrors

import "testing"

func TestWallet(t *testing.T){

    t.Run("deposit", func(t *testing.T){
        wallet := Wallet{}
        // wallet.Deposit(10)
        wallet.Deposit(Bitcoin(10))

        // got := wallet.Balance()
        want := Bitcoin(10)

        // if got != want {
        //     t.Errorf("got %s want %s", got, want) // got 10 BTC want 20 BTC
        // }
        assertBalance(t, wallet, want)
    })

    t.Run("withdraw", func(t *testing.T){
        wallet := Wallet{balance: Bitcoin(20)} // initializing balance to 20
        err := wallet.Withdraw(Bitcoin(10))

        // got := wallet.Balance()
        want := Bitcoin(10)

        // if got != want {
        //     t.Errorf("got %s want %s", got, want) 
        // }
        assertNoError(t, err) // checking if error is nil
        assertBalance(t, wallet, want)
    })

    t.Run("withdraw insufficient funds", func(t *testing.T){
        startingBalance := Bitcoin(20)
        wallet := Wallet{startingBalance}
        err := wallet.Withdraw(Bitcoin(100))

        assertError(t,err,ErrInsufficientFunds)
        assertBalance(t, wallet, startingBalance) // checking if balance is same as before
    })
}

// using errcheck . 
// go install github.com/kisielk/errcheck@latest
// provides a way to check for unchecked errors (scenarios) in go programs
// pointers_test.go:41:24: wallet.Withdraw(Bitcoin(10)) // this is the error we got
// it means we have not checked the error returned by Withdraw() function

func assertBalance(t testing.TB, wallet Wallet, want Bitcoin) {
	t.Helper()
	got := wallet.Balance()

	if got != want {
		t.Errorf("got %s want %s", got, want)
	}
}

func assertNoError(t testing.TB, got error) {
	t.Helper()
	if got != nil {
		t.Fatal("got an error but didn't want one")
	}
}

func assertError(t testing.TB, got error, want error) {
	t.Helper()
	if got == nil {
		t.Fatal("didn't get an error but wanted one")
	}

	if got != want {
		t.Errorf("got %s, want %s", got, want)
	}
}
