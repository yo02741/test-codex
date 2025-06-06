import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

