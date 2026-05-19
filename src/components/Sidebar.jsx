import "./Sidebar.css"
function Sidebar(){
    const user = {
            username: "catlover",
            followers: 1200,
            following: 300,
            bio: "I love cats 🐱"
        };

        return (
            <aside className="sidebar">

            <img
                className="profile-picture"
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
            />

            <h2 className="username">
                {user.username}
            </h2>

            <p className="bio">
                {user.bio}
            </p>

            <div className="stats">

                <span>
                <strong>{user.followers}</strong> followers
                </span>

                <span>
                <strong>{user.following}</strong> following
                </span>

            </div>

            <button className="edit-profile">
                Edit Profile
            </button>

            </aside>
        );
}
export default Sidebar