import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>This is Blog Page</h1>
      </main>
    </div>
  );
}
