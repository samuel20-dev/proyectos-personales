import { useForm } from "react-hook-form";
import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserDataContext";
import { useNavigate, Link } from "react-router-dom";
// importamos estilos
import "./stylesheets/products.css";
import { signOut } from "firebase/auth";

export const Products = () => {
   const { register, handleSubmit, reset, setValue } = useForm();
   const [products, setProducts] = useState([]);
   const [editId, setEditId] = useState(null);
   const navigate = useNavigate();

   // haciendo uso del contexto
   const { user, setUser } = useContext(UserContext);

   // obtener los productos (documentos) de la coleccion
   const getProducts = async () => {
      const productsCollection = await getDocs(collection(db, "products"));
      const data = productsCollection.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
      }));
      console.log(data);
      // guardamos los datos en nuestro estado
      setProducts(data);
   };

   // guardar producto
   const addProduct = async (data) => {
      if (user) {
         const respuesta = await addDoc(collection(db, "products"), {
            name: data.name,
            price: parseFloat(data.price),
            stock: parseInt(data.stock),
         });
         console.log(respuesta);
         reset();
         getProducts(); //actualizamos los productos cuando agregamos uno
      } else {
         navigate("/session");
      }
   };

   // editar producto (muestra los datos en los inputs del form)
   const editProduct = (product) => {
      console.log("editando un producto");
      console.log(product);

      // mandamos los datos al formulario para editarlo
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("stock", product.stock);

      // seteamos el id en el estado para actualizarlo
      setEditId(product.id);
   };

   // Actualizar un producto (documento) en la coleccion
   const updateProduct = async (data) => {
      const docRef = doc(db, "products", editId);

      await updateDoc(docRef, {
         name: data.name,
         price: parseFloat(data.price),
         stock: parseInt(data.stock),
      });
      setEditId(null);
      reset();
      getProducts();
   };

   // Eliminar un producto
   const deleteProduct = async (id) => {
      const docRef = doc(db, "products", id);
      await deleteDoc(docRef);
      getProducts();
   };

   // Cerrar Sesion
   const logOut = () => {
      signOut(auth)
         .then(() => {
            alert("Sign-out successful!");
            setUser(null);
            navigate("/");
         })
         .catch((error) => {
            alert("Hubo un problema " + error);
         });
   };

   // mostramos los productos al momento de cargar la app
   useEffect(() => {
      // Ejecutamos funciones al momento de montar un componente
      getProducts();
   }, []);

   return (
      <div className="products-container">
         {user && (
            <div className="container-logout">
               <button onClick={logOut} className="btn-logout">
                  &larr; Log out
               </button>
            </div>
         )}

         <h2>Administrar Productos</h2>

         <form
            onSubmit={
               editId ? handleSubmit(updateProduct) : handleSubmit(addProduct)
            }
         >
            <div className="form-group">
               <label htmlFor="name">Nombre</label>
               <input
                  id="name"
                  type="text"
                  required
                  placeholder="Nombre del producto"
                  {...register("name")}
               />
            </div>
            <div className="form-group">
               <label htmlFor="price">Precio</label>
               <input
                  id="price"
                  type="number"
                  required
                  placeholder="Precio del producto"
                  {...register("price")}
               />
            </div>
            <div className="form-group">
               <label htmlFor="stock">Cantidad</label>
               <input
                  id="stock"
                  type="number"
                  required
                  placeholder="Cantidad en stock"
                  {...register("stock")}
               />
            </div>
            <div>
               <button type="submit">{editId ? "Editar" : "Agregar"}</button>
            </div>
         </form>

         <main>
            <table>
               <thead>
                  <tr>
                     <th>Nombre</th>
                     <th>Precio</th>
                     <th>Stock</th>
                     <th>Acciones</th>
                  </tr>
               </thead>
               <tbody>
                  {products.map((product) => (
                     <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.stock}</td>
                        <td>
                           <div className="action-buttons">
                              <button
                                 className="edit-btn"
                                 onClick={() =>
                                    user === null
                                       ? navigate("/session")
                                       : editProduct(product)
                                 }
                              >
                                 Editar
                              </button>
                              <button
                                 className="delete-btn"
                                 onClick={() =>
                                    user === null
                                       ? navigate("/session")
                                       : deleteProduct(product.id)
                                 }
                              >
                                 Eliminar
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </main>
      </div>
   );
};
