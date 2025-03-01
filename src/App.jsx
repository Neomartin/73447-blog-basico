import { useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import Title from "./components/Title/Title";
import { useForm } from "react-hook-form";

// const POSTS = [
//   {
//     id: 1,
//     title: "Primer post de nuestro blog",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias recusandae voluptatibus",
//     user: "admin@gmail.com"
//   },
//   {
//     id: 2,
//     title: "Otro post creado",
//     description: "Un texto que escribió alguien en su post para compartir con el resto",
//     user: "pepito@gmail.com"
//   },
//   {
//     id: 3,
//     title: "Un post más",
//     description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias recusandae voluptatibus",
//     user: "john@doe.com",
//   }
// ]

function App() {
  const [ posts, setPosts ] = useState( [] )

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  // Función para agregar posts
  function addPost(data) {
    console.log(data)

    // #Creamos el nuevo post en base a la data del form
    const post = {
      title: data.title,
      email: data.email,
      description: data.description,
      id: posts.length + 1
    }

    // #Hacemos una copia del array de posts
    const postCopy = [ ...posts ];

    // #Agregamos a la copia el nuevo post
    postCopy.push(post);

    // #Actualizamos el estado de posts
    setPosts(postCopy)

  }


  return (
    <>
      <Title titulo="Blog App" />
      <Title titulo="Crea tu primer post" />

      <form className="post-form" onSubmit={ handleSubmit(addPost)  }>
        <div className="input-group">
            <label htmlFor="title">Titulo del post</label>
            <input
              type="text"
              { ...register("title", {
                required: "El titulo es requerido",
                minLength: { value: 6, message: "El titulo debe tener al menos 6 caracteres" },
                maxLength: { value: 30, message: "El titulo debe tener menos de 30 caracteres" }
              }) }
              id="title"
              placeholder="Escribe el titulo del post"
            />

              {/* #Mostramos el mensaje de error si existe */}
            { errors.title && <span className="error">{ errors.title.message }</span> }

        </div>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            { ...register("email", {
              required: "El correo es requerido",
              minLength: { value: 6, message: "El correo debe tener al menos 6 caracteres" },
              maxLength: { value: 30, message: "El correo debe tener menos de 30 caracteres" }
            }) }
            id="email"
            placeholder="user@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Post</label>
          <textarea
            { ...register("description") }
            id="description"
            required
            rows={8}
          ></textarea>
        </div>

        <button className="button" type="submit" disabled={ !isValid  }  >
          Crear
        </button>
      </form>

      <Title titulo="Post creados" />
      
      <PostsList posteos={posts} />
    </>
  );
}

export default App;
