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
        <header>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/posts">Posts</Link>
        </header>
        <main>{children}</main>
      </Box>
    </html>
  );
}
