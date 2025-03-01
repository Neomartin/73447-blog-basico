import './PostsList.css';

export default function PostsList({ posteos }) {
  return (
    <div className="post-list">

        {
            posteos.map(post => 

                // #Devuelve un componente con la información de cada post

                <div className="post-container" key={post.id}>
                    <div className="post-header">
                        <h2>{post.title}</h2>
                        <div className="post-info">
                            <div className="post-date">Creado: 20-06-25</div>
                            <div className="post-user">{post.email}</div>
                        </div>
                    </div>
                    <div className="post-body">
                        <p>{post.description}</p>
                    </div>
                    {/* <div className="post-footer">
                        Algo
                    </div> */}
                </div>
            )
        }

       
    </div>
  )
}
