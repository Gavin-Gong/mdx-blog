export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export async function getStaticProps() {
  return {
    title: "Post",
    description: "Post",
    path: "/post",
    props: {
      post: {
        type: "string",
        required: true,
        description: "Post",
      },
    },
  };
}

export async function getStaticPaths() {
  return [
    {
      path: "../../_posts",
      description: "Post",
    },
  ];
}
