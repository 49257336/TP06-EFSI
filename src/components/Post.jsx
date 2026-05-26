import "./Post.css"
function Post({ post, onSelectPost }) {
  return (
    <div onClick={() => onSelectPost(post)} className="post">
      <img src={post.image} className="post-image"/>
      <div className="post-info">
      <img className="post-profile-picture"
        src={post.profilePicture}
        alt={post.username} />
      <p className="post-user">@{post.username} </p>
      <section className="interactions">
        <img src="src/assets/icon-like.png" alt="like" className="interaction"/>
        <img src="src/assets/icon-comment.png" alt="comment" className="interaction"/>
        <img src="src/assets/icon-share.png" alt="share" className="interaction"/>

        </section>
      
      </div>
    </div>
  );
}
export default Post

 


