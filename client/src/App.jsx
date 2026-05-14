import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/payment" element={<Payment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;