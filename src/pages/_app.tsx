/* eslint-disable react/display-name */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";


import { InlineCode } from "../components/md/InlineCode";
import { Link } from "../components/md/Link"
import { Heading } from "../components/md/Heading"
import { OL, LI, UL } from "../components/md/List"
import { Pagraph } from "../components/md/Pragraph"
import { BlockQuote } from "../components/md/Quote"
import { Image } from "../components/md/Image"

const components: MDXProviderComponents = {
  a: Link,
  inlineCode: InlineCode,
  code: InlineCode,
  h1: (props) => <Heading {...props} level="h1"/>,
  h2: (props) => <Heading {...props} level="h2"/>,
  h3: (props) => <Heading {...props} level="h3"/>,
  h4: (props) => <Heading {...props} level="h4"/>,
  h5: (props) => <Heading {...props} level="h5"/>,
  h6: (props) => <Heading {...props} level="h6"/>,
  ol: OL,
  ul: UL,
  li: LI,
  p: Pagraph,
  blockquote: BlockQuote,
  // table: () => <table />,
  // thead: () => <thead />,
  // tbody: () => <tbody />,
  // tr: () => <tr />,
  // td: () => <td />,
  // th: () => <th />,
  img: Image
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
export default MyApp;
