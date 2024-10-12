import { Link } from "react-router-dom";
import { Music } from "lucide-react";
import "./footer.css";

const Footer = () => {
   return (
      <footer className="footer">
         <section className="footer-content">
            <div className="footer-logo">
               <Music className="logo-icon" />
               <span className="logo-text">Kodigo Music</span>
            </div>
            <section className="footer-links">
               <div className="footer-column">
                  <h4>Compañía</h4>
                  <ul>
                     <li>
                        <Link>Acerca de</Link>
                     </li>
                     <li>
                        <Link>Empleos</Link>
                     </li>
                     <li>
                        <Link>Record</Link>
                     </li>
                  </ul>
               </div>
               <div className="footer-column">
                  <h4>Comunidades</h4>
                  <ul>
                     <li>
                        <Link>Para artistas</Link>
                     </li>
                     <li>
                        <Link>Desarrolladores</Link>
                     </li>
                     <li>
                        <Link>Publicidad</Link>
                     </li>
                  </ul>
               </div>
               <div className="footer-column">
                  <h4>Enlaces útiles</h4>
                  <ul>
                     <li>
                        <Link>Apoyo</Link>
                     </li>
                     <li>
                        <Link>Reproductor web</Link>
                     </li>
                     <li>
                        <Link>Aplicación móvil gratuita</Link>
                     </li>
                  </ul>
               </div>
            </section>
         </section>
         <div className="copyright">
            <p>&copy; Carlos Fernández. Todos los derechos reservados.</p>
         </div>
      </footer>
   );
};

export default Footer;
