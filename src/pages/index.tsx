import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getPosts } from "./api/post";
export default function Home(props) {
  const { list = [] } = props;
  return (
    <div>
      <Head>
        <title>Moonland</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {list.map((v: any) => (
          <div key={v.slug}>
            <Link href={`/${v.slug.join("/")}`}>{v.data.title}</Link>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const posts = await getPosts();

  return {
    props: {
      list: posts,
    },
  };
};
