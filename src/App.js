import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Imprint from "./pages/Imprint";
import DataProtection from "./pages/DataProtection";
import Bitcoin from "./pages/Bitcoin";
import MyAccount from "./pages/MyAccount";
import KryptoAbo from "./pages/KryptoAbo";
import Subscription from "./pages/Subscription";
import BitconBlog from "./pages/BitconBlog";
import QuickView from "./pages/QuickView";
import Contact from "./pages/Contact";
import Krypto from "./pages/Krypto";
import Area1 from "./pages/Area1";
import Area2 from "./pages/Area2";
import Area3 from "./pages/Area3";
import ApiDataContextProvider from "./services/context/ApiData";
import UserDataContextProvider from "./services/context/userDataContext";

export default function App() {
  return (
    <UserDataContextProvider>
      <ApiDataContextProvider>
        <div className="App">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/dataProtection" element={<DataProtection />} />
              <Route path="/bitcoin" element={<Bitcoin />} />
              <Route path="/bitcoin/blog" element={<BitconBlog />} />
              <Route path="/krypto" element={<Krypto />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/krypto-abo-box" element={<KryptoAbo />} />
              <Route path="/area1" element={<Area1 />} />
              <Route path="/area2" element={<Area2 />} />
              <Route path="/area3" element={<Area3 />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/quickview" element={<QuickView />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ApiDataContextProvider>
    </UserDataContextProvider>
  );
}
