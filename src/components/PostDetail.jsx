function PostDetail({ selectedPost, closeModal }) {
  return (
    <div className="modal">
      <img src={selectedPost.image} />
      <h2>{selectedPost.username}</h2>
      <p>{selectedPost.caption}</p>
      <p>{selectedPost.likes} likes</p>
    </div>
  );
}