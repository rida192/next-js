import Link from "next/link";

const ProductsList = ({ products }) => {
  return (
    <>
      <div>ProductsList</div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.id} - {product.title} - {product.price}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ProductsList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 5,
  };
}
