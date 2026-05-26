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

        <button className="icon-btn">⚙</button>
        <button className="icon-btn">📷</button>
        <button className="icon-btn">✈</button>


        <button className="new-post">
          + New Post
        </button>

      </div>

    </header>
  );
}

export default Header;
