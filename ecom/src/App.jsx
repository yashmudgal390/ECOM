import {Route,Routes} from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Cart } from './pages/cart';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
    </>
  )
}

export default App
