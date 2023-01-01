import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>
          {product.id} - {product.title}
        </h1>
        <h2>{product.descreption}</h2>
      </div>
    </>
  );
};

export default Product;

export async function getStaticProps(constext) {
  const { params } = constext;
  const response = await fetch(
    `http:localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
