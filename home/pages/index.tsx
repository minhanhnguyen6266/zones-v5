import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>This is our homepage</h1>
      </main>
    </div>
  );
}
