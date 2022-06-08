// * component that'll render expenseitems
// ? we create functions to create componenets
// * Function name convention.. use same name as file name

import './ExpenseItems.css';
// function ExpenseItems() {
function ExpenseItems(props) {
  // const expenseDate = new Date(2022, 5,21); //default js constructor 
  // const expenseTitle = "Car Insurance"; 
  // const expenseAmount = 30000; 
  return (
    // <div className='expense-item'>
    //   <div>May 24th 2022</div>
    //   <div className='expense-item__description '>
    //     <h2>Laptop</h2>
    //   </div>
    //   <div className='expense-item__price'>Rs. 1,00,000</div>
    // </div>
    // ! read till here first
    // ? problem with this code is that it is a hard code and we want it to be dynamic so
    // * we create constans and then add it using {} 
    // * code inside {} is normal js code

      // <div className='expense-item'>
      //   <div>{expenseDate.toISOString()}</div> 
      //   {/* Date gives the output as object so for string we did that */}
      //   <div className='expense-item__description '>
      //     <h2>{expenseTitle}</h2>
      //   </div>
      //   <div className='expense-item__price'>{expenseAmount}</div>
      // </div>
      // ? now again the problem with this code is that it is still hard code we just give values to variables 
      // ? we cant duplicate the component  
      // * so for that we will creat an object array inside the App.js (here only because by convention and convinience)
      // * then we will make use of props/ parameters here
      // * Go to App.js

      //* we have to use a parameter to get those title amount date indivually so we use props parameter name
      // * props stands for properties
      // * now we will call the parameter and its properties
      // * and we dont need those constants that we created first in this fucntion
      <div className='expense-item'>
        {/* <div>{props.date.toISOString()}</div>  */}
        {/* Date gives the output as object so for string we did that */}
        <div className='expense-item__description '>
          <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
  );
}
// 36
export default ExpenseItems;
//? now we'll import it in App.js
// * then we can use this function as a HTML tag in our root component
// * HTML tag for component will start with capital letter separating with other tags.. thats why component name should always start with capital
//  *so that react will detect that it is a custom componenent

// ! Rule of react ... we can only have one root component (div) inbside one jsx snippet
// * so for multiple div we can combine all of them inside an outer single div

// ? for styling create a css file of same name... there's nothing extra react related for css

// * we have to tell react which css are you using so..
// * import css

// ! in JSX we use className = "" instead of class like in html
// * Now commenting the function return code and see furthur notes there

// ! Now we will split the date part into another file also we will make it more readable and add styling
// * created ExpenseDate.js go there for furthur notes