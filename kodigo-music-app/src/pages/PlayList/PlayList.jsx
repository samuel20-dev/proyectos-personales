import { Play, Clock, Plus } from "lucide-react";
import "./playList.css";

const PlayList = () => {
   const canciones = [
      {
         id: 1,
         titulo: "Cancion 1",
         artista: "Bad Bunny",
         album: "Un Verano Sin Ti",
         duracion: "3:20",
         fechaAgregado: "hace 17 horas",
      },
      {
         id: 2,
         titulo: "Cancion 2",
         artista: "Bad Bunny",
         album: "Un Verano Sin Ti",
         duracion: "3:20",
         fechaAgregado: "hace 17 horas",
      },
      {
         id: 3,
         titulo: "Cancion 3",
         artista: "Bad Bunny",
         album: "Un Verano Sin Ti",
         duracion: "3:20",
         fechaAgregado: "hace 17 horas",
      },
      {
         id: 4,
         titulo: "Cancion 4",
         artista: "Bad Bunny",
         album: "Un Verano Sin Ti",
         duracion: "3:20",
         fechaAgregado: "hace 17 horas",
      },
   ];

   return (
      <div className="playlist">
         <header className="playlist-header">
            <img
               src="/src/assets/images/imgCancion1.jpg"
               alt="La Lista Pop"
               className="playlist-cover"
            />
            <div className="playlist-info">
               <h4>Lista</h4>
               <h1>La Lista Pop</h1>
               <p>Los éxitos del pop latino.</p>
               <div className="playlist-stats">
                  <span>Kodigo Music • 2022 • 23 canciones , 1 h 21 min</span>
               </div>
            </div>
         </header>

         <section className="playlist-controls">
            <button className="play-button">
               <Play size={24} fill="#000000" />
            </button>
            <button className="add-button">
               <Plus size={32} />
            </button>
         </section>

         <section className="song-list">
            <div className="song-list-header">
               <div className="song-number">#</div>
               <div className="song-title">Título</div>
               <div className="song-album">Álbum</div>
               <div className="song-date-added">Fecha en la que se añadió</div>
               <div className="song-duration">
                  <Clock size={16} />
               </div>
            </div>
            {canciones.map((cancion) => (
               <div key={cancion.id} className="song-item">
                  <div className="song-number">{cancion.id}</div>
                  <div className="song-title">
                     <div className="song-info">
                        <h3>{cancion.titulo}</h3>
                        <p>{cancion.artista}</p>
                     </div>
                  </div>
                  <div className="song-album">{cancion.album}</div>
                  <div className="song-date-added">{cancion.fechaAgregado}</div>
                  <div className="song-duration">{cancion.duracion}</div>
               </div>
            ))}
         </section>
      </div>
   );
};

export default PlayList;
