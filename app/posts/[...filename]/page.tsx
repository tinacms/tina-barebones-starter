"use client";

import PostList from ".";
import client from "../../../tina/__generated__/client";

export const getPostProps = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};

export default async function Page() {
    const { props } = await getPostProps()
    return <PostList {...props} />
}