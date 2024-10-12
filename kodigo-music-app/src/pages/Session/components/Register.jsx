import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Session.css";

const Register = () => {
   const { register, handleSubmit } = useForm();

   const navigate = useNavigate();

   const onSubmitRegistrar = (data) => {
      if (data.email && data.password === data.confirmPassword) {
         alert("Registro con exito!!");
         navigate("/login");
      } else {
         alert("Las contraseñas deben coincidir!");
      }
   };

   return (
      <div className="session-container">
         <h2>Regístrate en Kodigo Music</h2>
         <form
            onSubmit={handleSubmit(onSubmitRegistrar)}
            className="session-form"
         >
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
            <div className="form-group">
               <label>Confirmar contraseña</label>
               <input
                  type="password"
                  id="confirmPassword"
                  required
                  minLength={6}
                  {...register("confirmPassword")}
               />
            </div>
            <button type="submit" className="submit-btn">
               Registrarse
            </button>
         </form>
         <p>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
         </p>
      </div>
   );
};

export default Register;
