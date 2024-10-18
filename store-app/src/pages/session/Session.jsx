import { useState } from "react";
import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";
import { Link } from "react-router-dom";
import "./session.css";

export const Session = () => {
   const [typeForm, setTypeForm] = useState("login");

   return (
      <div className="session-container">
         <Link to="/" className="back-link">
            &larr; Regresar
         </Link>
         <div className="session-card">
            <h2 className="session-title">Manejo de sesión</h2>
            <div className="session-toggle">
               <button
                  className={`toggle-btn ${
                     typeForm === "login" ? "active" : ""
                  }`}
                  onClick={() => setTypeForm("login")}
               >
                  Iniciar sesión
               </button>
               <button
                  className={`toggle-btn ${
                     typeForm === "register" ? "active" : ""
                  }`}
                  onClick={() => setTypeForm("register")}
               >
                  Registrarse
               </button>
            </div>
            {typeForm === "login" ? (
               <LoginFormComponent />
            ) : (
               <RegisterFormComponent />
            )}
         </div>
      </div>
   );
};
