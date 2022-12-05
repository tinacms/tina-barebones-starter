import { client } from "../.tina/__generated__/client";

export const getPosts = async ({ preview }) => {
  // by default get non-draft posts
  let filter = { draft: { eq: false } };

  // if preview-mode is enabled, get all posts
  if (preview) {
    filter = {};
  }
  return client.queries.postConnection({
    filter,
  });
};
