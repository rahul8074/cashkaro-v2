import './App.css'
import { CalCards } from './components/CalCards'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import CreditCard from "./components/CreditCard"
import LoungeFinder from './components/LoungeFinder'
import Footer from './components/Footer'
import CompareCards from './components/CompareCards'
import ImpacketCard from "./components/ImpactCard"

function App() {

  return (
    <>
    <Navbar />
    <Trending />
    <CalCards />
    <CreditCard />
    <CompareCards />
    <LoungeFinder />
    <ImpacketCard />
    <Footer />
    </>
  )
}

export default App
