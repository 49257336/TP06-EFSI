import { useEffect, useState } from "react";
import { getCats } from "./api";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Stories from "./components/Stories";
import PostDetail from "./components/PostDetail";

import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
     const fetchCats = async () => {
       const data = await getCats();

      const captions = [
      "Cute cat 😺",
      "Sleepy vibes",
      "Tiny paws 🐾",
      "Professional napper",
      "Meowdel material ✨",
      "Too cute to handle",
      "Orange cat behavior",
      "Just chilling",
      "Mood for today",
      "Main character energy",
      "Certified loaf",
      "Tiny chaos machine",
      "Weekend mood",
      "Living rent free",
      "Low battery",
      "Chaos but cute",
      "Another successful nap",
      "Do not disturb",
      "Aesthetic cat moment",
      "Average orange cat"
      ];
      const usernames = [
        "whiskers",
        "catlover",
        "sleepykitty",
        "meowzone",
        "tiny_paws",
        "orangeboi",
        "luna.cat",
        "fluffybeans",
        "mistermeow",
        "catdaily",

        "napqueen",
        "purrfect",
        "midnightcat",
        "kittycloud",
        "cozycatt",
        "meowster",
        "cat.jpeg",
        "pawprint",
        "catzilla",
        "toebeans",
        "sir_meowsalot",
        "mood.cat",
        "pixelkitty",
        "furrball",
        "snowypaws",
        "cinnamoncat",
        "voidkitty",
        "lazywhiskers",
        "meowmood"
      ];
       const formattedPosts = data.map((cat, index) => ({
        id: cat.id,
        image: cat.url,
        username: usernames[
          Math.floor(Math.random() * usernames.length)
        ],
        likes: Math.floor(Math.random() * 1000),
        caption:
        captions[
          Math.floor(Math.random() * captions.length)
        ]
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
        <section className="content">
        <Stories />
        <Feed
          posts={posts}
          onSelectPost={setSelectedPost}
        />
        <PostDetail
          selectedPost={selectedPost}
          closeModal={() => setSelectedPost(null)}
        />
        </section>
      </div>
    </>
  );
}

export default App
