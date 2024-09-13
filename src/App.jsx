
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Room from './components/Room'


function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/room/:id' element={<Room/>}></Route>

   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
