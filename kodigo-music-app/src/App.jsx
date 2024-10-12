import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Session/components/Login";
import Register from "./pages/Session/components/Register";
import PlayList from "./pages/PlayList/PlayList";
import Footer from "./components/footer/Footer";

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Header />
            <main className="main-content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/playlist" element={<PlayList />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
