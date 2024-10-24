import { useState } from "react";
import "./stylesheets/taskDashboard.css";
import {
   Search,
   Clock,
   Settings,
   Home,
   FileText,
   Car,
   Pencil,
} from "lucide-react";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";

// Componente de menu lateral (sidebar)
const Sidebar = ({ setVistaProp }) => {
   return (
      <div className="sidebar">
         <div className="company-info">
            <div>
               <h2>Todo List.</h2>
            </div>
         </div>
         <div className="sidebar-items">
            <div className="sidebar-item">
               <Search size={18} /> Busqueda rápida
            </div>
            <div className="sidebar-item">
               <Clock size={18} /> Todas las actualizaciones
            </div>
            <div className="sidebar-item">
               <Settings size={18} /> Configuraciones
            </div>
         </div>
         <div className="workspace">
            <h3>ESPACIO DE TRABAJO</h3>
            <div
               className="sidebar-item active"
               onClick={() => setVistaProp("taskList")}
            >
               <Home size={18} /> Inicio
            </div>
            <div className="sidebar-item">
               <FileText size={18} /> Lista de tareas
            </div>
            <div className="sidebar-item">
               <Car size={18} /> Roadmap
            </div>
            <div
               className="sidebar-item"
               onClick={() => setVistaProp("newTask")}
            >
               <Pencil size={18} /> Agregar Tarea
            </div>
         </div>
      </div>
   );
};

export default function TaskDashboard() {
   // Estado para renderizar vista (componente)
   const [vista, setVista] = useState(null);

   return (
      <div className="task-dashboard">
         <Sidebar setVistaProp={setVista} />

         <main className="main-content">
            {vista === "newTask" ? (
               <NewTaskForm setVistaProp={setVista} />
            ) : (
               <TaskList />
            )}
         </main>
      </div>
   );
}
