import Main from "./main";
import { useState, useEffect, useCallback, useRef } from "react";
import { fetchPosts } from "../api/posts";

import PostGrid from "../components/PostGrid/PostGrid";

// export async function getStaticProps(context) {
//   const { data } = await fetchPosts(0);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default function Lastest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(async () => {
    async function fetchData() {
      const { data } = await fetchPosts(page);
      setPosts((posts) => {
        return [...new Set([...posts, ...data])];
      });
      setLoading(false);
    }
    fetchData();
  }, [page]);
  return (
    <div>
      <Main>
        <PostGrid
          posts={posts}
          setPage={setPage}
          loading={loading}
          setLoading={setLoading}
        />
      </Main>
    </div>
  );
}
