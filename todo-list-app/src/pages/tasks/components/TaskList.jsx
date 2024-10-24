import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import "../stylesheets/taskList.css";

// Compnonente para mostrar todas las tareas
export const TaskList = () => {
   const [tasks, setTasks] = useState([]);

   // Funcion obtener tareas
   const getTasks = async () => {
      const tasksCollection = await getDocs(collection(db, "tasks"));
      const taskDocs = tasksCollection.docs.map((taskDoc) => ({
         ...taskDoc.data(),
         id: taskDoc.id,
      }));
      setTasks(taskDocs);
   };

   const completeTask = async (taskId) => {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, { completed: true });
      getTasks();
   };

   useEffect(() => {
      getTasks();
   }, []);

   return (
      <div className="task-list">
         <div className="task-grid">
            {tasks.map((task) => (
               <div
                  key={task.id}
                  className={`task-card priority-${task.priority}`}
               >
                  <div className="task-checkbox">
                     {!task.completed ? (
                        <button
                           onClick={() => completeTask(task.id)}
                           className="complete-btn"
                           aria-label="Marcar como completada"
                        >
                           <span className="checkbox"></span>
                        </button>
                     ) : (
                        <span className="checkbox checked"></span>
                     )}
                  </div>
                  <div className="task-content">
                     <h3>{task.title}</h3>
                     <p>{task.description}</p>
                     <div className="task-footer">
                        <span className="priority">
                           Prioridad: {task.priority}
                        </span>
                        {task.completed && (
                           <span className="completed-tag">Completada</span>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
