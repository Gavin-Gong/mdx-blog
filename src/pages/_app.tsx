/* eslint-disable react/display-name */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";

import { Code } from "../components/md/Code";
import { InlineCode } from "../components/md/InlineCode";
import { Link } from "../components/md/Link";
import { Heading } from "../components/md/Heading";
import { OL, LI, UL } from "../components/md/List";
import { Pagraph } from "../components/md/Pragraph";
import { BlockQuote } from "../components/md/Quote";
import { Image } from "../components/md/Image";
import { Table, THead, TBody, TR, TH, TD } from "../components/md/Table";

const components: MDXProviderComponents = {
  a: Link,
  inlineCode: InlineCode,
  code: Code,
  h1: (props) => <Heading {...props} level="h1" />,
  h2: (props) => <Heading {...props} level="h2" />,
  h3: (props) => <Heading {...props} level="h3" />,
  h4: (props) => <Heading {...props} level="h4" />,
  h5: (props) => <Heading {...props} level="h5" />,
  h6: (props) => <Heading {...props} level="h6" />,
  ol: OL,
  ul: UL,
  li: LI,
  p: Pagraph,
  blockquote: BlockQuote,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  td: TD,
  th: TH,
  img: Image,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
export default MyApp;
