import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getPosts } from "./api/post";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Page(props: any) {
  console.log(props);
  return (
    <main>
      <Header></Header>
      <section className="m-auto w-3/5">
        <h2 className="text-pink-500 text-3xl font-medium">
          {props.data?.title}
        </h2>
        <code>{JSON.stringify(props.data)}</code>
        <ul className="tag-list"></ul>
        <MDXRemote {...props.source}></MDXRemote>
      </section>
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { params = {} } = props;
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === params.slug)!;

  return {
    props: {
      // title: post.data.title ?? null,
      source: post.source,
      data: post.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
};
