import "./Header.css";

function Header() {

  return (
    <header className="header">

      <div className="logos">
      <img src="src\assets\simple-icons_instagram.png" alt="logo" />
      <img src="src\assets\logos_instagram.png" alt="logo" />
      </div>

      <input
        type="text"
        placeholder="Search ..."
        className="search"
      />

      <div className="header-icons">

        <img src="src/assets/icon-settings.png" alt="settings" className="icon-btn"/>
        <img src="src/assets/icon-camera.png" alt="camera" className="icon-btn"/>
        <img src="src/assets/icon-share.png" alt="share" className="icon-btn"/>


        <img src="src/assets/new-post.png" alt="new post" className="new-post"/>

      </div>

    </header>
  );
}

export default Header;
