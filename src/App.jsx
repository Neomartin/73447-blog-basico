import { useEffect, useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import Title from "./components/Title/Title";
import { useForm } from "react-hook-form";
import axios from "axios";

const URL = "https://66cd012e8ca9aa6c8cc93b12.mockapi.io/api/v1"

function App() {
  const [posts, setPosts] = useState([]);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();


  // El hook useEffect se ejecuta cuando el componente se monta, y me permite ejecutar el código que defino dentro de el de manera controlada y en el momento que yo quiera en base a las dependencias que le paso como segundo argumento.
  useEffect(() => {

    getPosts()

  }, []);

  console.log("Creando componente App");
  async function getPosts() {

    try {
      const response = await axios.get(`${URL}/posts`)
      // Vamos a colocar en el bloque try el código que queremos que se ejecute
    	console.log(response.data)

      setPosts(response.data)

    } catch (error) {
      console.log(error);
      // Manejar el error
      // Informar al usuario que hubo un error y no se pudieron cargar los posts
    }

    

  }


  //! getPosts()
  function markAsRead(id) {
    // Buscariamos en posts el post con el id que nos pasan
    const post = posts.find((post) => {
      if (post.id === id) {
        return true;
      }
    });

    post.alreadyRead = true;
    // Cambiaríamos el valor de alreadyRead a true
    // Actualizaríamos el estado de posts
    // const copiaPosts = [...posts];

    setPosts( [...posts] );


  }


  // Función para agregar posts
  async function addPost(data) {


    try {
      console.log(data);

      // #Creamos el nuevo post en base a la data del form


      const newPost = {
        title: data.title,
        email: data.email,
        description: data.description,
        alreadyRead: false,
        active: true,
        createdAt: new Date().toISOString(),
      };

      const response = await axios.post(`${URL}/posts`, newPost)

      console.log(response)

      // getPosts()
      setPosts([  ...posts, response.data ]  )



    } catch (error) {
      console.log(error);
      alert("No se pudo crear el post")
    }




    



    // // #Hacemos una copia del array de posts
    // const postCopy = [...posts];

    // // #Agregamos a la copia el nuevo post
    // postCopy.push(post);

    // // #Actualizamos el estado de posts
    // setPosts(postCopy);
  }

  async function deletePost(id) {

    console.log("Borrar post con id", id);

    try {

      const confirmDelete = confirm("¿Estás seguro de borrar este post?")

      if(confirmDelete) {

        await axios.delete(`${URL}/posts/${id}`)
        getPosts()
      }

      
    } catch (error) {
      console.log(error);
      alert("No se pudo borrar el post")
    }

    // // Buscamos la posicion de este elemento en el array post
    
    // const indice = posts.findIndex(post => post.id === id)
    
    // // Generar una copia del array de posts (estado)
    // const postCopy = [...posts];
    
    // postCopy.splice(indice, 1) // Eliminamos el elemento en la posición indice

    // setPosts(postCopy) // Actualizamos el estado de posts

  }

  return (
    <>
      <Title
        titulo="Blog App"
        subtitle="Un blog para estar comunicados todos"
      />
      <Title titulo="Crea tu primer post" />

      <form className="post-form" onSubmit={handleSubmit(addPost)}>
        <div className="input-group">
          <label htmlFor="title">Titulo del post</label>

          {/* #Agregamos el control de errores con el mensaje de error personalizado */}
          <input
            type="text"
            {...register("title", {
              required: "El titulo es requerido",
              minLength: {
                value: 6,
                message: "El titulo debe tener al menos 6 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El titulo debe tener menos de 30 caracteres",
              },
            })}
            id="title"
            placeholder="Escribe el titulo del post"
          />

          {/* #Mostramos el mensaje de error si existe */}
          {errors.title && (
            <span className="error">{errors.title.message}</span>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es requerido",
              minLength: {
                value: 6,
                message: "El correo debe tener al menos 6 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El correo debe tener menos de 30 caracteres",
              },
            })}
            id="email"
            placeholder="user@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Post</label>
          <textarea
            {...register("description")}
            id="description"
            required
            rows={8}
          ></textarea>
        </div>

        <button className="button" type="submit" disabled={!isValid}>
          Crear
        </button>
      </form>

      <Title titulo="Post creados" />

      <PostsList posteos={posts} markAsRead={markAsRead} deletePost={deletePost} />
    </>
  );
}

export default App;
