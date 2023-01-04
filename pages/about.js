import styles from "../styles/About.module.css";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="free tutorials on web development" />
      </Head>
      <div className={styles.text}>About</div>
    </>
  );
};

export default About;
