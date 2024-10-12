import { Link } from "react-router-dom";
import "./listasPopulares.css";

export const ListasPopulares = () => {
   // Array con todos los listas populares
   const listas = [
      {
         name_list: "Populares Pop",
         descripcion: "Los éxitos del pop latino con Shakira",
         cover: "../../../../public/images/imagenListaPop.jpg",
      },
      {
         name_list: "Populares Rock",
         descripcion: "Los éxitos del rock",
         cover: "/images/imagenListaRock.jpg",
      },
      {
         name_list: "Populares Salsa",
         descripcion: "Los éxitos de salsa",
         cover: "/images/imagenListaSalsa.jpg",
      },
      {
         name_list: "Populares Instrumental",
         descripcion: "Los éxitos instrumentales",
         cover: "/images/imagenListaInstrum.jpg",
      },
      {
         name_list: "Populares Electrónica",
         descripcion: "Los éxitos de música electronica",
         cover: "/images/imagenListaElect.jpg",
      },
      {
         name_list: "Populares Jazz",
         descripcion: "Los éxitos de música jazz",
         cover: "/images/imagenListaJaz.jpg",
      },
   ];

   return (
      <section className="popular-listas">
         <div className="popular-listas-header">
            <h2>Listas populares</h2>
            <Link to="/playlist" className="show-all">
               Mostrar todos
            </Link>
         </div>
         <div className="lista-grid">
            {/* Mostramos todas las listas  */}
            {listas.map((lista, index) => (
               <div key={index} className="lista-item">
                  <Link to="playlist">
                     <img
                        src={lista.cover}
                        alt={`${lista.descripcion} cover`}
                        className="lista-cover"
                     />
                  </Link>
                  <h3 className="lista-title">{lista.name_list}</h3>
                  <p className="lista-descripcion">{lista.descripcion}</p>
               </div>
            ))}
         </div>
      </section>
   );
};
