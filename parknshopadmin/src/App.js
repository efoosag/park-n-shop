import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Narbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`
const Detail = styled.div`
  flex: 4;
`
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Wrapper>
          <Sidebar />
          <Detail>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/user/:userId" element={<User />} />
              <Route exact path="/new_user" element={<NewUser />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/new_product" element={<NewProduct />} />
            </Routes>            
          </Detail> 
        </Wrapper>
      </BrowserRouter>
    </>    
  );
}

export default App;
