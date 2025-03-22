"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Box } from "../../../styled-system/jsx";
import type { PostQuery } from "../../../tina/__generated__/types";

interface ClientPageProps {
	query: string;
	variables: {
		relativePath: string;
	};
	data: PostQuery;
}

export default function Post(props: ClientPageProps) {
	// data passes though in production mode and data is updated to the sidebar data in edit-mode
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	const content = data.post.body;
	return (
		<>
			<h1 data-tina-field={tinaField(data.post, "title")}>{data.post.title}</h1>
			<Box data-tina-field={tinaField(data.post, "body")}>
				<TinaMarkdown content={content} />
			</Box>
		</>
	);
}
