import Link from "next/link";
const Posts = ({ posts }) => {
  return (
    <>
      <div>List of Posts</div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>
              {post.id}. {post.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
