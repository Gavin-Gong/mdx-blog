import { GetStaticPaths, GetStaticProps } from "next";
import { MDXProvider } from "@mdx-js/react";
import { getPosts } from "./api/post";

const components: any = {
  code: function Text(props: any) {
    return <p style={{ color: "red" }} {...props}></p>;
  },
};
export default function Page(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{JSON.stringify(props)}</div>
      <MDXProvider components={components}>{props.content}</MDXProvider>
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
      content: post.content,
      data: post.data,
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
