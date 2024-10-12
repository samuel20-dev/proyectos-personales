import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../Session.css";

const Login = () => {
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   const onSubmitForm = (data) => {
      if (data.email && data.password) {
         alert("Bienvenido");
         navigate("/");
      }
   };

   return (
      <div className="session-container">
         <h2>Iniciar sesión en Kodigo Music</h2>

         <form onSubmit={handleSubmit(onSubmitForm)} className="session-form">
            <div className="form-group">
               <label>Correo electrónico</label>
               <input type="email" id="email" required {...register("email")} />
            </div>
            <div className="form-group">
               <label>Contraseña</label>
               <input
                  type="password"
                  id="password"
                  required
                  minLength={6}
                  {...register("password")}
               />
            </div>
            <button type="submit" className="submit-btn">
               Iniciar sesión
            </button>
         </form>
         <p>
            ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
         </p>
      </div>
   );
};

export default Login;
