import usuarioicon from "../assets/persona-icon.png";
import "./Sidebar.css"

function Sidebar(){
    const user = {
            profile_name: "Uğur Mercan",
            followers: 1200,
            following: 300,
            username: "@ugur_mercan0"
        };

        return (
            <aside className="sidebar">

            <div className="profile-border">
            <img
                className="profile-picture"
                src="src/assets/profile.png"
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
                <div className="action-btn"><img src="src/assets/HOME.png" alt="home" className="action_icon"/></div>
                <div className="action-btn"><img src="src/assets/Explore.png" alt="explore" className="action_icon"/></div>
                <div className="action-btn"><img src="src/assets/Reels.png" alt="reels" className="action_icon"/></div>
                <div className="action-btn"><img src="src/assets/IGTV.png" alt="igtv" className="action_icon"/></div>
                <div className="action-btn"><img src="src/assets/Notification.png" alt="notifications" className="action_icon"/></div>
      
            </section>

            </aside>
        );
}
export default Sidebar