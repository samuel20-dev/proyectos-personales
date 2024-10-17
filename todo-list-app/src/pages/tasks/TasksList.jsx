export const TasksList = () => {
   return (
      <div>
         <h2>Mis Tareas</h2>

         <div>
            <input type="text" placeholder="¿Qué hay que hacer?" />
            <button>Agregar</button>
         </div>

         <div>
            <table>
               <tr>
                  <td>accion</td>
                  <td>titulo</td>
                  <td>editar</td>
                  <td>eliminar</td>
               </tr>
               <tr></tr>
            </table>
         </div>
      </div>
   );
};
