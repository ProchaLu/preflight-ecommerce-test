import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to Covfefe</h1>
        <div>HEROSECTION</div>
        <Link href="/products">Shop our products</Link>
      </div>
    </main>
  );
}
