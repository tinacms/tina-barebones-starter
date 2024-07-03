import Home from ".";
import client from "../../tina/__generated__/client";


export const getHomeProps: any = async () => {
    const { data, query, variables } = await client.queries.page({
        relativePath: "home.mdx",
      });
    
      return {
        props: {
          data,
          query,
          variables,
        },
      };
  }

export default async function Page() {
    const { props } = await getHomeProps()
    return <Home {...props} />
}