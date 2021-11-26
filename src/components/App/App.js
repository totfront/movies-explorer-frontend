import './App.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'

function App() {
  return (
    <div className='page'>
      <Header />
      <Promo>
        <NavTab />
      </Promo>
      <Footer />
    </div>
  )
}

export default App
