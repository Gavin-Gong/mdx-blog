import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { getPosts } from "./api/post";
import { Layout } from "../components/Layout";

export default function Page(props: any) {
  const { title, date, tag = [] } = props.data ?? {};
  return (
    <Layout>
      <section className="m-auto w-3/5 mt-6">
        <h2 className="text-pink-500 text-2xl font-medium">{title}</h2>
        <section className="flex mt-2 mb-4">
          <div className="mr-4">{date}</div>
          <ul className="tag-list">
            {tag.map((tag: string) => (
              <li
                key={tag}
                className="inline-block mr-3 bg-green-200 rounded-md px-2"
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>
        <MDXRemote {...props.source}></MDXRemote>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const { params = {} } = props;
  const posts = await getPosts();
  const post: any = posts.find(
    (item: any) => item.slug.join("/") === (params.slug as string[]).join("/")
  );

  return {
    props: {
      source: post!.source,
      data: post!.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((item: any) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
};
