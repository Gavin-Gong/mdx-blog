import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getPosts } from "./api/post";
import Button from "../components/Button";

const components: Record<string, React.ReactNode> = {
  code: function Text(props: any) {
    return <p style={{ color: "red" }} {...props}></p>;
  },
  img: undefined,
  h1: undefined,
  h2: undefined,
  p: undefined,
  inlineCode: undefined,
  Button,
};

// TODO: use require.context to auto import all components
// becase of next-mdx-remote dont support import component in .mdx file
export default function Page(props: any) {
  return (
    <div>
      <h1 className="text-pink-500 text-xl">{props.title}</h1>
      <MDXRemote {...props.source} components={components}></MDXRemote>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { params = {} } = props;
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === params.slug)!;
  return {
    props: {
      title: "??",
      // data: post.data,
      source: post.source,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((item) => {
      console.log(item);
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
};
