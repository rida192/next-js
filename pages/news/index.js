const NewsArticleList = ({ articles }) => {
  return (
    <>
      <div>NewsArticleList</div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div>
              {article.title} . {article.description} | {article.category}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
