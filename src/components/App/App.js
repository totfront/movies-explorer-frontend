import './App.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import About from '../AboutMe/About'

function App() {
  return (
    <div className='page'>
      <Header />
      <Promo>
        <NavTab />
      </Promo>
      <About />
      <Footer />
    </div>
  )
}

export default App
