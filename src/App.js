import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

function App() {
  return (
    <BrowserRouter>
      {customToast()}
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoutes() {
  const name = localStorage.getItem("listed-name");
  const email = localStorage.getItem("listed-email");

  const checkAuthentication = () => {
    if (name && email) {
      return true;
    }
    return false;
  };

  return checkAuthentication() ? (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
}

const customToast = () => {
  return createPortal(<Toaster />, document.getElementById("alert-modal"));
};

export default App;
