"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Box } from "../../styled-system/jsx";
import Link from "../components/Link";

export default function PostList({ sidebarMode = false, ...props }) {
	const pathname = usePathname().replace(/\/$/, "");
	return (
		<Box as={sidebarMode ? "aside" : React.Fragment}>
			<Box
				as={sidebarMode ? "div" : "h1"}
				fontWeight={sidebarMode && "bold"}
				marginBottom={2}
			>
				Posts
			</Box>

			<Box>
				{props.data.postConnection.edges.map((post) => (
					<Box
						key={post.node.id}
						fontSize={sidebarMode && "sm"}
						paddingLeft={sidebarMode && 2}
						className={
							pathname === `/posts/${post.node._sys.filename}` && "active"
						}
						css={{
							"&.active": {
								borderLeft: "2px solid token(colors.cyan.100)",
								_osDark: {
									borderLeft: "2px solid token(colors.cyan.900)",
								},
							},
							"&.active > a": {
								color: "token(colors.cyan.900)",
								_osDark: {
									color: "token(colors.cyan.100)",
								},
								// transition: "color 0.2s ease-in-out",
							},
						}}
					>
						<Link
							href={`/posts/${post.node._sys.filename}`}
							css={{
								"&:hover": {
									textDecoration: "underline",
									color: "token(colors.blue.500)",
									_osDark: {
										color: "token(colors.blue.400)",
									},
								},
							}}
						>
							{post.node.title}
						</Link>
					</Box>
				))}
			</Box>
		</Box>
	);
}
