import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Police from "./pages/Police";
import User from "./pages/User";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/police" element={<Police />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
