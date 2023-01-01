import { useRouter } from "next/router";

const Category = ({ articles, category }) => {
  const router = useRouter();
  return (
    <>
      <h1>showing results of {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          <p>{article.category}</p>
        </div>
      ))}
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  console.log(`pre-rendering the ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
