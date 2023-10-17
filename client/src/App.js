import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return (
    // <div>
    //   {/* <Homepage/> */}
    //   {/* <ProductList /> */}
    //   {/* <Product /> */}
    //   {/* <Signup /> */}
    //   {/* <Login /> */}
    //   {/* <Cart /> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
