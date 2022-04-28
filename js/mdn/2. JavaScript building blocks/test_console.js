let myValue = 2;
function myBigFunction() {

  subFunction1();
  subFunction2();
  subFunction3();
}
function subFunction1() {
  console.log(myValue);
}
function subFunction2() {
  console.log(myValue+1);
}
function subFunction3() {
  console.log(myValue+2);
}
myBigFunction();