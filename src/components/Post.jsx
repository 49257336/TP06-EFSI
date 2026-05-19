function Post({ post, onSelectPost }) {
  return (
    <div onClick={() => onSelectPost(post)}>
      <img src={post.image} />
      <p>{post.caption}</p>
    </div>
  );
}