import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function About() {
  return (
    <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>This is About us page</h1>
    </main>
  </div>
  );
}
