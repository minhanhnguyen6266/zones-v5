import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>This is Blog Page</h1>
      </main>
    </div>
  );
}
