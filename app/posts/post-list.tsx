import React from "react";
import { Box } from "../../styled-system/jsx";
import Link from "../components/Link";

export default function PostList({ sidebarMode = false, ...props }) {
	return (
		<Box as={sidebarMode ? "aside" : React.Fragment}>
			<Box as={sidebarMode ? "div" : "h1"} fontWeight={sidebarMode && "bold"}>
				Posts
			</Box>
			<Box>
				{props.data.postConnection.edges.map((post) => (
					<Box key={post.node.id}>
						<Link href={`/posts/${post.node._sys.filename}`}>
							{post.node.title}
						</Link>
					</Box>
				))}
			</Box>
		</Box>
	);
}
