import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskList } from "./pages/tasks/components/TaskList";
import { NewTaskForm } from "./pages/tasks/components/NewTaskForm";
import TaskDashboard from "./pages/tasks/TaskDashboard";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<TaskDashboard />} />
               <Route path="/taskList" element={<TaskList />} />
               <Route path="/newTaskForm" element={<NewTaskForm />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
