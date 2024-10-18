import "./App.css";
import { MyProvider } from "./context/UserDataContext";
import { Products } from "./pages/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Session } from "./pages/session/Session";

function App() {
   return (
      <>
         <MyProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/session" element={<Session />} />
               </Routes>
            </BrowserRouter>
         </MyProvider>
      </>
   );
}

export default App;
