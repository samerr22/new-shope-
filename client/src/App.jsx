import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import New from "./pages/NewSup";
import View from "./pages/ViewSup";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/supAdd" element={<New />} />

        <Route element={<PrivateRoute />}>
         
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
          
        
          <Route path="/View" element={<View />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
