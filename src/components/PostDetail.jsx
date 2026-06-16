import "./PostDetail.css";

function PostDetail({ selectedPost, closeModal, comments}) {

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
              className="post_img"
            />
            <div className="modal-info">
            <h2>@{selectedPost.username}</h2>

            <p>{selectedPost.caption}</p>
            

           <div className="post_detail_actions">
            <img src="src/assets/icon-like.png" alt="like" className="post_detail_action"/>
            <img src="src/assets/icon-comment.png" alt="comment" className="post_detail_action"/>
            <img src="src/assets/icon-share.png" alt="share" className="post_detail_action"/>
            </div>
            </div>

          </div>

        )
      }
    </div>

  );
}
export default PostDetail;