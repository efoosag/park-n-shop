import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";


function App() {
  const user = true;
  return (   
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Homepage />} />        
        <Route path="/products/:catetory" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={user ? <Navigate  to="/" /> :<Signup />} />
        <Route path="/login" element={user ? <Navigate  to="/" /> :<Login />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
