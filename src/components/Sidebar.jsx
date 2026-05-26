import usuarioicon from "../assets/persona-icon.png";
import "./Sidebar.css"

function Sidebar(){
    const user = {
            profile_name: "CatLover",
            followers: 1200,
            following: 300,
            username: "@cat_lover"
        };

        return (
            <aside className="sidebar">

            <div className="profile-border">
            <img
                className="profile-picture"
                src="https://i.pravatar.cc/170?img=32"
                alt="profile"
            />
            </div>

            <section className="name">
            <h2 className="username">
                {user.profile_name}
            </h2>

            <p className="bio">
                {user.username}
            </p>
            </section>

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

            <section className="actions">
                <div className="action-btn"><p>Home</p></div>
                <div className="action-btn"><p>Explore</p></div>
                <div className="action-btn"><p>Reels</p></div>
                <div className="action-btn"><p>¡GTV</p></div>
                <div className="action-btn"><p>Notifications</p></div>              
            </section>

            </aside>
        );
}
export default Sidebar