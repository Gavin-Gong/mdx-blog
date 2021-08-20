import Head from "next/head";
import { GetStaticProps } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArticleCard } from "../components/ArticleCard";
import { getPosts } from "./api/post";
export default function Home(props: any) {
  const { list = [] } = props;
  return (
    <div>
      <Head>
        <title>Moonland</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-6">
        {list.map((v: any) => (
          <ArticleCard {...v} key={v.slug} />
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
