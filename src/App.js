import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';
import ProductDetailsPage from './Components/ProductDetails/ProductDetailsPage'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Category/> */}
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
