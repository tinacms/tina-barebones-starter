import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import Layout from "../../layout";

export default function PostList(props) {
    // data passes though in production mode and data is updated to the sidebar data in edit-mode
    const { data } = useTina({
      query: props.query,
      variables: props.variables,
      data: props.data,
    });
    const postsList = data.postConnection.edges;
    return (
      <Layout>
        <h1>Posts</h1>
        <div>
          {postsList.map((post) => (
            <div key={post.node.id}>
              <Link href={`/posts/${post.node._sys.filename}`}>
                {post.node._sys.filename}
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    );
  }