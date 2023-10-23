import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Narbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
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
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Detail>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/user/:userId" element={<User />} />
            </Routes>
          </BrowserRouter>
        </Detail>      
        
      </Wrapper>
    </>    
  );
}

export default App;
