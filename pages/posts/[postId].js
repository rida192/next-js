const Post = ({ post }) => {
  console.log(`generte path /posts/${post.id}`);

  return (
    <>
      <div>
        <p>{post.id}</p>
        <p>{post.title}</p>
      </div>
    </>
  );
};

export default Post;

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: "blocking", // can also be true or 'blocking'
  };
}
