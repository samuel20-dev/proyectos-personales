import { useForm } from "react-hook-form";
import { auth } from "../../../firebase/config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./loginForm.css";
import { UserContext } from "../../../context/UserDataContext";

export const LoginFormComponent = () => {
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   // Haciendo uso del contexto
   const { setUser } = useContext(UserContext);

   const onLoginForm = (data) => {
      console.log(data);

      signInWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user); //le pasamos el usuario al contexto
            alert("Bienvenido " + data.email);
            navigate("/");
         })
         .catch((error) => {
            console.error(error);
            alert(
               "Error al iniciar sesión. Por favor, verifica tus credenciales."
            );
         });
   };

   return (
      <form onSubmit={handleSubmit(onLoginForm)} className="login-form">
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
         <button type="submit" className="submit-btn">
            Iniciar Sesión
         </button>
      </form>
   );
};
