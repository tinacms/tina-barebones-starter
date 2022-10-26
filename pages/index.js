import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../.tina/__generated__/client";
import Confetti from "react-confetti";
import React from "react";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const [isLaunched, setIsLaunched] = React.useState(false);

  return (
    <>
      {isLaunched && (
        <Confetti
          width={2000}
          height={1000}
          numberOfPieces={data.page?.confettiVolume || 100}
        />
      )}
      <div
        style={{
          margin: "120px auto",
          width: 400,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          style={{
            padding: "12px 24px",
            borderRadius: "5px",
            color: "#fff",
            background: "#dc4419",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "24px",
            border: "none",
          }}
          onClick={() => setIsLaunched((launched) => !launched)}
        >
          {data.page?.text || "Enter a value"}
        </button>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
