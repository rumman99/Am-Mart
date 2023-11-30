import './App.css'
import Header from './components/Header/Header'
import Inventory from './components/Inventory/Inventory';
import Productinfo from './components/Productinfo/Productinfo';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Shop></Shop>}/>
      <Route path='/review' element={<Review></Review>}/>
      <Route path='/inventory' element={<Inventory></Inventory>}/>
      <Route path='/product/:productkey' element={<Productinfo></Productinfo>}/>
      <Route path='*' element={<h1>ERROR 404</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
