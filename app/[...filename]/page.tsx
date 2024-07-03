import Home from ".";
import client from "../../tina/__generated__/client";


export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params.slug}.mdx`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

export default async function Page(context) {
    const { props } = await getServerSideProps(context)
    return <Home {...props} />
}