import Navbar from '../Components/Navbar/Navbar'
import '../styles/globals.css'
import '../Components/Navbar/Navbar.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
