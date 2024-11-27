import { useQueryState } from "nuqs";
import { useEffect, useRef, useState } from "react";
import { ListedPost } from "../lib/types";

const usePageQuery = (category: string, initialPosts: ListedPost[]) => {
  const [page] = useQueryState("page");
  const [posts, setPosts] = useState(initialPosts);

  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const getPosts = async (page: string) => {
      const response = await fetch(`/api/${category}/${page}`);
      const newPosts = (await response.json()) as ListedPost[];

      if (mountedRef.current) {
        setPosts(newPosts);
      }
    };

    if (page) {
      if (page === "1") {
        setPosts(initialPosts);
      } else {
        getPosts(page.toString());
      }
    }
  }, [category, initialPosts, page]);

  return posts;
};

export default usePageQuery;
