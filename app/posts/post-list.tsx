import { Box } from "../../styled-system/jsx";
import Link from "../components/Link";

export default function PostList(props) {
	return (
		<>
			<h1>Posts</h1>
			<Box>
				{props.data.postConnection.edges.map((post) => (
					<Box key={post.node.id}>
						<Link href={`/posts/${post.node._sys.filename}`}>
							{post.node._sys.filename}
						</Link>
					</Box>
				))}
			</Box>
		</>
	);
}
