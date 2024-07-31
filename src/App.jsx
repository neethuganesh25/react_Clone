
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import SecondPage from './Components/SecondPage'

function App() {
 

  return (
    <>
    <Header/>
    <Home/>
    <SecondPage/>
      <Routes>
        <Route path='/' element=''>

        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
