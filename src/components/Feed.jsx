import Post from "./Post";
import "./Feed.css"

function Feed({ posts, onSelectPost }){
    return(
        <>
        <img src="src/assets/TRENDING.png" alt="trending" className="TRENDING"/>
        <div className="feed">  
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onSelectPost={onSelectPost}
                />
            ))}
        </div>
        </>
    );
}
export default Feed