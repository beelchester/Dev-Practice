import axios from "axios";

export default axios.create({
  baseURL:"https://travel-advisor.p.rapidapi.com/restaurants/list",
  headers:{
    'X-RapidAPI-Key': '89abeae40cmsh81d8d7e23a6ceb7p1d0025jsn998012190fa7',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  },
  params:{
    location_id: '304554',
    // restaurant_tagcategory: 'Dessert',
    restaurant_tagcategory_standalone: '10591',
    currency: 'INR',
    lunit: 'km',
    limit: '30',
    open_now: 'false',
    lang: 'en_US'
  }
})