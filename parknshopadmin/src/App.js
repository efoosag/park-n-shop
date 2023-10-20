import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Narbar";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
