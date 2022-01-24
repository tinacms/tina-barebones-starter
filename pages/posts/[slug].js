import { gql, staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
export default function Home(props) {
  return (
    <Layout>
      <code>
        <pre
          style={{
            backgroundColor: "lightgray",
          }}
        >
          {JSON.stringify(props.data.getPostDocument.data, null, 2)}
        </pre>
      </code>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const query = gql`
    {
      getPostList {
        edges {
          node {
            sys {
              filename
            }
          }
        }
      }
    }
  `;

  const data = await staticRequest({
    query,
    variables: {},
  });
  const paths = data.getPostList.edges.map((x) => {
    return { params: { slug: x.node.sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (ctx) => {
  const query = `query getPost($relativePath: String!) {
    getPostDocument(relativePath: $relativePath) {
      data {
        title
        body
      }
    }
  }
  `;
  const variables = {
    relativePath: ctx.params.slug + ".md",
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
