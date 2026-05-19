import Post from "./Post";
import "./Feed.css"

function Feed({posts}){
    return(
        <div className="feed">  
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}
export default Feed