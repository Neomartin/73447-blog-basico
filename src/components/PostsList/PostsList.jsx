import "./PostsList.css";
import Post from "../Post/Post";

export default function PostsList({ posteos, markAsRead, deletePost }) {
  return (
    <div className="post-list">
      
      {posteos.map((post) => (
        // Devuelve un componente con la información de cada post
        
        <Post key={post.id} 
              post={post} 
              markAsRead={markAsRead} 
              deletePost={deletePost} />

        
      ))}
    </div>
  );
}
