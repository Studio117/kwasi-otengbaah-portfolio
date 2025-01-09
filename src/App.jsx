import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ThankYouPage from './pages/ThankYouPage/ThankYouPage'
import 

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path='/' element={<HomePage />}></Route>

          <Route path='/thankYouPage' element={<ThankYouPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
