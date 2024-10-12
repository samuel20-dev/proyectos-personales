import { Link } from "react-router-dom";
import "./popularAlbums.css";

// Array con todos los albunes
const albums = [
   {
      id: 1,
      title: "Un Verano Sin Ti",
      artist: "Bad Bunny",
      cover: "/images/imgCancion1.jpg",
   },
   {
      id: 2,
      title: "nadie sabe lo que va a pasar mañana",
      artist: "Bad Bunny",
      cover: "/images/imgCancion2.jpg",
   },
   {
      id: 3,
      title: "FERXXOCALIPSIS",
      artist: "Feid",
      cover: "/images/imgCancion3.png",
   },
   {
      id: 4,
      title: "Fórmula, Vol. 2 (Deluxe Edition)",
      artist: "Romeo Santos",
      cover: "/images/imgCancion4.png",
   },
   {
      id: 5,
      title: "MAÑANA SERÁ BONITO",
      artist: "KAROL G",
      cover: "/images/imgCancion5.png",
   },
   {
      id: 6,
      title: "Vise Versa",
      artist: "Rauw Alejandro",
      cover: "/images/imgCancion6.jpg",
   },
];

const PopularAlbums = () => {
   return (
      <section className="popular-albums">
         <div className="popular-albums-header">
            <h2>Álbumes populares</h2>
            <Link to="/playlist" className="show-all">
               Mostrar todos
            </Link>
         </div>
         <div className="album-grid">
            {/* Mostramos todas los albunes  */}
            {albums.map((album) => (
               <div key={album.id} className="album-item">
                  <Link to="playlist">
                     <img
                        src={album.cover}
                        alt={`${album.title} cover`}
                        className="album-cover"
                     />
                  </Link>

                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-artist">{album.artist}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default PopularAlbums;
