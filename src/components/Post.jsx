import "./Post.css"
function Post({ post, onSelectPost }) {
  return (
    <div onClick={() => onSelectPost(post)} className="post">
      <img src={post.image} className="post-image"/>
      <p className="post-caption">{post.caption} </p>
    </div>
  );
}
export default Post

 


