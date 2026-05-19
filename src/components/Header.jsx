import "./Header.css";

function Header() {

  return (
    <header className="header">

      <h1 className="logo">
        Instagram
      </h1>

      <input
        type="text"
        placeholder="Search ..."
        className="search"
      />

      <div className="header-icons">

        <button>⚙</button>

        <button>📷</button>

        <button>✈</button>

        <button className="new-post">
          + New Post
        </button>

      </div>

    </header>
  );
}

export default Header;
