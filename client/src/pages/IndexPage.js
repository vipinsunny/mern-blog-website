import Post from "../Post";
import { useEffect, useState } from "react";
import baseURL from "../apiConfig"
export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`{${baseURL}/post`).then(
      (response) => {
        response.json().then((posts) => {
          setPosts(posts);
        });
      }
    );
  }, []);
  return <>{posts.length > 0 && posts.map((post)=> <Post {...post} />)}</>;
}
