import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";

const App = () => {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Offers" element={<Offers />} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/Signin" element={<Signin/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/ForgotPassword" element={<ForgotPassword/>} />
  </Routes>
</Router>
</>
);
}

export default App;
