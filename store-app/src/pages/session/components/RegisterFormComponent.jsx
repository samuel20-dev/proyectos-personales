import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config.js";
import { useNavigate } from "react-router-dom";
import "./registerForm.css";

export const RegisterFormComponent = () => {
   const { register, handleSubmit, reset } = useForm();
   const navigate = useNavigate();

   const onSubmitForm = (data) => {
      if (data.password !== data.confirmPassword) {
         alert("Las contraseñas no coinciden!");
         return;
      }

      createUserWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            alert("Registro exitoso. Por favor, inicia sesión.");
            navigate("/session");
            reset();
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <form onSubmit={handleSubmit(onSubmitForm)} className="register-form">
         <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
               type="email"
               id="email"
               {...register("email", { required: true })}
            />
         </div>
         <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
               type="password"
               id="password"
               {...register("password", { required: true })}
            />
         </div>
         <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
               type="password"
               id="confirmPassword"
               {...register("confirmPassword", { required: true })}
            />
         </div>
         <button type="submit" className="submit-btn">
            Registrarse
         </button>
      </form>
   );
};
