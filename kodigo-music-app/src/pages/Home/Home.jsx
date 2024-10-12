import { Link } from "react-router-dom";
import { PlayCircle, Radio, User } from "lucide-react";
import "./home.css";
import PopularAlbums from "./components/PopularAlbums";
import { ListasPopulares } from "./components/ListasPopulares";

const Home = () => {
   return (
      <div className="home">
         <section className="hero">
            <h1>Música para todos</h1>
            <p>Millones de canciones. No se necesita tarjeta de crédito.</p>
            <Link to="/register" className="cta-button">
               OBTEN KODIGO MUSIC GRATIS
            </Link>
         </section>

         <PopularAlbums />

         <section className="features">
            <div className="feature">
               <PlayCircle className="feature-icon" />
               <h3>Escucha tus favoritos</h3>
               <p>
                  Escucha las canciones que te gustan y descubre nueva música y
                  podcasts.
               </p>
            </div>
            <div className="feature">
               <Radio className="feature-icon" />
               <h3>Listas de reproducción simplificadas</h3>
               <p>
                  Te ayudaremos a crear listas de reproducción o a disfrutar de
                  listas de reproducción creadas por expertos.
               </p>
            </div>
            <div className="feature">
               <User className="feature-icon" />
               <h3>Hazlo tuyo</h3>
               <p>Cuéntanos qué te gusta y te recomendaremos música.</p>
            </div>
         </section>
         <section className="cta cta-login">
            <h2>Listo? Comieza a escuchar.</h2>
            <Link to="/login" className="cta-button">
               INICIA KODIGO MUSIC
            </Link>
         </section>

         <ListasPopulares />
      </div>
   );
};

export default Home;
