import "./PostDetail.css";

function PostDetail({ selectedPost, closeModal }) {

  return (

    <div
      className={
        selectedPost
          ? "modal-overlay active"
          : "modal-overlay"
      }
    >

        {
        selectedPost && (

          <div className="modal-content">

            <button onClick={closeModal} className="close-btn">
              ✕
            </button>

            <img
              src={selectedPost.image}
              alt="cat"
            />
            <div className="modal-info">
            <h2>@{selectedPost.username}</h2>

            <p>{selectedPost.caption}</p>

           
            </div>

          </div>

        )
      }
    </div>

  );
}
export default PostDetail;