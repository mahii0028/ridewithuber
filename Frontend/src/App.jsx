import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserWrapper from "./pages/UserWrapper";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
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
    </Routes>
  );
};

export default App;
