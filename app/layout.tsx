import Link from "next/link";
import React from "react";
import './styles/globals.css';
import { Box } from "../styled-system/jsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Box as="body" margin="3rem">
        <Box
          as="header"
          css={{
            "& > a": {
              fontSize: "lg",
              textDecoration: "none",
              marginX: 4,

              "&:first-of-type": {
                marginLeft: 0,
              },

              "&:last-of-type": {
                marginRight: 0,
              },
            },
          }}
        >
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/posts">Posts</Link>
        </Box>
        <main>{children}</main>
      </Box>
    </html>
  );
}
