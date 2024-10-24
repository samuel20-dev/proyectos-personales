import "../stylesheets/newTaskForm.css";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/config.js";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

// componente para crear nuevas tareas
export const NewTaskForm = ({ setVistaProp }) => {
   const { register, handleSubmit, reset } = useForm();
   const [priority, setPriority] = useState("Baja");

   // Funcion agregar tareas
   const addTask = async (data) => {
      await addDoc(collection(db, "tasks"), {
         title: data.title,
         description: data.description,
         priority: priority,
         completed: false,
      });
      setVistaProp("taskList");
      reset();
   };

   // Formulario para crear nueva trea
   return (
      <div className="new-task-container">
         <header className="task-header">
            <h1>Agregar tarea</h1>
         </header>
         <form onSubmit={handleSubmit(addTask)} className="task-form">
            <div className="form-group">
               <label htmlFor="title">Título</label>
               <input
                  type="text"
                  id="title"
                  required
                  {...register("title")}
                  placeholder="Ingresa el título de la tarea"
               />
            </div>
            <div className="form-group">
               <label htmlFor="description">Descripción</label>
               <textarea
                  id="description"
                  required
                  {...register("description")}
                  placeholder="Ingresa la descripción de la tarea"
               ></textarea>
            </div>

            <div className="form-group">
               <label>Priority</label>
               <div className="priority-buttons">
                  {["Baja", "Media", "Alta"].map((level) => (
                     <button
                        key={level}
                        type="button"
                        required
                        className={`priority-button ${
                           priority === level ? "active" : ""
                        }`}
                        onClick={() => setPriority(level)}
                     >
                        {level}
                     </button>
                  ))}
               </div>
            </div>
            <div className="form-group">
               <button type="submit" className="add-button">
                  Guardar
               </button>
            </div>
         </form>
      </div>
   );
};
