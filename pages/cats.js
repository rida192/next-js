import Image from "next/Image";
import Head from "next/Head";

const CatsPage = () => {
  const images = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "1",
    "2",
    "3",
    "4",
    "5",
  ];
  return (
    <>
      <Head>
        <title>Cats page</title>
        <meta name="description" content="cats photos" />
      </Head>
      {images.map((path, i) => (
        <div key={i}>
          <Image
            src={`/${path}.jpg`}
            placeholder="blur"
            blurDataURL={`/${path}.jpg`}
            width="280"
            height="420"
            alt="cats"
          />
        </div>
      ))}
    </>
  );
};

export default CatsPage;
