import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>This is About Us Page</h1>
      </main>
    </div>
  );
}
