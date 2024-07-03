"use client"
import Layout from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";

export default function Home(props) {
    // data passes though in production mode and data is updated to the sidebar data in edit-mode
    const { data } = useTina({
      query: props.query,
      variables: props.variables,
      data: props.data,
    });
  
    const content = data.page.body;
    return (
      <Layout>
        <div data-tina-field={tinaField(data.page, "body")}>
          <TinaMarkdown content={content} />
        </div>
      </Layout>
    );
  }