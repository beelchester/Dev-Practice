// * component that'll render expenseitems
// ? we create functions to create componenets
// * Function name convention.. use same name as file name

import './ExpenseItems.css';

function ExpenseItems() {
  return (
    <div className='expense-item'>
      <div>May 24th 2022</div>
      <div className='expense-item__description '>
        <h2>Laptop</h2>
      </div>
      <div className='expense-item__price'>Rs. 1,00,000</div>
    </div>
  );
}

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