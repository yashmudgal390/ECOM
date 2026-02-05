import {Route,Routes} from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Cart } from './pages/cart';
import { Favorite } from './pages/Favorite';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/favorite' element={<Favorite/>}></Route>
     </Routes>
    </>
  )
}

export default App
