// ! contains what we want to add to whole application
//? This is how we add bootstrap
//  npm i bootstrap
import'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
