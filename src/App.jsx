import { useEffect, useState } from "react";
import { getCats } from "./api";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
     const fetchCats = async () => {
       const data = await getCats();

       const formattedPosts = data.map((cat, index) => ({
        id: cat.id,
        image: cat.url,
        username: `cat_user_${index}`,
        likes: Math.floor(Math.random() * 1000),
        caption: "Cute cat"
        }));

       setPosts(formattedPosts);
    }
    
    fetchCats();
  }, []);

  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <Feed
          posts={posts}
          onSelectPost={setSelectedPost}
        />
      </div>
    </>
  );
}

export default App
