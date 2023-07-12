import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://myblog-mern-blog-website.onrender.com/post").then(
      (response) => {
        response.json().then((posts) => {
          setPosts(posts);
        });
      }
    );
  }, []);
  return <>{posts.length > 0 && posts.map((post)=> <Post {...post} />)}</>;
}
