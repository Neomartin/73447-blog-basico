import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { env } from "../../config/env.config"
import Swal from "sweetalert2"
import loading from "../../assets/images/loading.gif"

export default function PostDetail() {
    const [ post, setPost ] = useState(null)

    const { id } = useParams() 
    

    useEffect(() => {
        getPostDetail()
    }, [])

    const getPostDetail = async() => {

        try {
            const response =  await axios.get(`${env.URL}/posts/${id}`);

            console.log(response.data)

            setTimeout(() => {

                setPost(response.data)
            }, 1000)

            
        } catch (error) {
            console.log(error)
            Swal.fire("Error", "Error al obtener el post", "error")
        }


    }

    if(!post) {
        return (
          <>
            <h3> Cargando...</h3>
            <img
              src={loading}
              alt="loading"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </>
        );
    }

    return (
        <div>
            <h1> {  post?.title  } </h1>
            <h2> ID: {  post?.id  } </h2>
        </div>
    )
}
