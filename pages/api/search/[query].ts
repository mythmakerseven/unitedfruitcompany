import { NextApiRequest, NextApiResponse } from "next";
import { searchAll } from "../../../lib/server";

const searchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query is a required attribute." });
  }

  const posts = await searchAll(query.toString());
  return res.status(200).json(posts);
};

export default searchPosts;
