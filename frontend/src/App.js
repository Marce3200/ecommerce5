
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import SignUp from './components/Signup/SignUp';
import Product from './components/Product/Product';
import CheckOut from './components/CheckOut/CheckOut';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/*' element={<Error />} />
      </Route>

    </Routes>
  );
}

export default App;
