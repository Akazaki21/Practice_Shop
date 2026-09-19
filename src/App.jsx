import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import './App.css'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'

function App() {


  return (
   <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
   </div>
  )
}

export default App
