import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faAdd, faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOrder } from "../../context/OrderContext";
import { Link } from "react-router-dom";

export default function Post({ post, markAsRead, deletePost, updateProduct }) {

  const { addPost } = useOrder();

  return (
    <div
      className={`post-container ${post.alreadyRead ? "leido" : ""}`}
      key={post.id}
    >
      <div className="post-header">
        <h2>

          <Link to={`/post/${post.id}`}>
            {post.title}
          </Link>

          {post.alreadyRead && <span className="read">✅</span>}
        </h2>
        <div className="post-info">
          <div className="post-date">Creado: 20-06-25</div>
          <div className="post-user">{post.email}</div>
        </div>
      </div>
      <div className="post-body">
        <p>{post.description}</p>
      </div>

      <div className="post-footer">
        <div className="buttons-container">
          <button
            className="button button-xs button-info"
            title="Añadir al carrito"
            onClick={() => addPost(post)}
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>

          <button
            className="button button-xs button-info"
            title="Editar"
            onClick={() => updateProduct(post)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>

          <button
            className="button button-xs"
            title="Marcar como leído"
            onClick={() => markAsRead(post.id)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>

          <button className="button button-xs button-secondary">
            <FontAwesomeIcon icon={faBan} />
          </button>

          <button
            className="button button-xs button-danger"
            onClick={() => deletePost(post.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}
