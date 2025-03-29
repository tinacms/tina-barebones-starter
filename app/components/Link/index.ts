import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React, { createElement as h } from "react";

const Link = React.forwardRef<
	HTMLLinkElement,
	React.LinkHTMLAttributes<HTMLLinkElement> & {
		children?: React.ReactNode;
	}
>(({ ...props }, ref) => {
	return h(NextLink, { ref, ...props }, props.children);
});
Link.displayName = "Link";

export type LinkProps = NextLinkProps;
export default Link;
