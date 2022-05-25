import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Category/> */}
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
