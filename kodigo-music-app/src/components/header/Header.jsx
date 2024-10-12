import { Link } from "react-router-dom";
import { Music } from "lucide-react";
import "./header.css";

const Header = () => {
   return (
      <header className="header">
         <div className="header-content">
            <Link to="/" className="logo">
               <Music className="logo-icon" />
               <span className="logo-text">Kodigo Music</span>
            </Link>
            <nav className="nav-links">
               <Link to="/" className="nav-link ">
                  Inicio
               </Link>
               <Link to="/playlist" className="nav-link">
                  Playlist
               </Link>
            </nav>
            <div className="auth-links">
               <Link to="/login" className="auth-link">
                  Iniciar Sesión
               </Link>
               <Link to="/register" className="auth-link sign-up">
                  Registrar
               </Link>
            </div>
         </div>
      </header>
   );
};
export default Header;
