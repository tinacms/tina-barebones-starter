import { gql, staticRequest } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
export default function Home(props) {
  const content = props.data.getPageDocument.data.body;
  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  let data = {};
  const query = gql`
    {
      getPageDocument(relativePath: "home.mdx") {
        data {
          body
        }
      }
    }
  `;
  const variables = {};
  try {
    data = await staticRequest({ query, variables });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      query,
      variables,
      data,
    },
  };
};
