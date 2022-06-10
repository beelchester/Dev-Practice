// ? usually we use Card.js name itself to determine the bg like this one
// * we can use props.children to pass data inside wrapper custom components instead as attributes
// * here code duplication is getting avoided
// * every code inside this wrapper component will be added here in props.children
import './Card.css'
function Card(props){
  const classes = 'card ' + props.className //brings the className provided where it is called
return <div className= {classes}>{props.children}</div>
}
export default Card
// creating wrapper custom component in expenseitems and expensedata by import Card