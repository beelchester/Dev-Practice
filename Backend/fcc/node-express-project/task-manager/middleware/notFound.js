const notFound = (req, res ) =>{
   res.status(404).send('Route not found');
   // next is not passed here because this is the last middleware
}
module.exports = notFound;