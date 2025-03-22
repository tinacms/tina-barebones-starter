import NextLink from "next/link";
import React from "react";
import { Box } from "../../../styled-system/jsx";

export const Link = ({ children, ...props }) => {
	return React.createElement(Box, { as: NextLink, ...props }, children);
};

export default Link;
