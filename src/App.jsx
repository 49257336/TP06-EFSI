import { useEffect, useState } from "react";
import { getCats } from "./api";

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
        caption: "Cute cat 😺"
        }));

       setPosts(formattedPosts);
    }
    
    fetchCats();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Feed posts={posts} />
    </>
  );
}

export default App
