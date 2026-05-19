import usuarioicon from "../assets/persona-icon.png";
import "./Sidebar.css"

function Sidebar(){
    const user = {
            username: "catlover",
            followers: 1200,
            following: 300,
            bio: "I love cats"
        };

        return (
            <aside className="sidebar">

            <div className="profile-border">
            <img
                className="profile-picture"
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
            />
            </div>

            <h2 className="username">
                {user.username}
            </h2>

            <p className="bio">
                {user.bio}
            </p>

            <div className="stats">

                <button className="stat_btn">
                <img src={usuarioicon} alt="followers" className="person-icon"/>
                <strong>{user.followers}</strong> 
                </button>

                <button className="stat_btn">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/relationship-love/heart-white-icon.png" alt="following" className="heart-icon"/>
                <strong>{user.following}</strong> 
                </button>

            </div>

            <button className="edit-profile">
                Edit Profile
            </button>

            </aside>
        );
}
export default Sidebar