import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserWrapper from "./pages/UserWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/riding" element={<Riding />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route
        path="/home"
        element={
          <UserWrapper>
            <Home />
          </UserWrapper>
        }
      />
      <Route
        path="/user/logout"
        element={
          <UserWrapper>
            <UserLogout />
          </UserWrapper>
        }
      />
      <Route path="/captain-home" element={<CaptainHome />} />
    </Routes>
  );
};

export default App;
