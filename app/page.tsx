import Image from 'next/image';
import Link from 'next/link';
import heroSectionImage from '../public/images/heroSectionImage.png';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.pageContent}>
        <Image
          src={heroSectionImage}
          alt="view of roasted coffee beans"
          width={1500}
        />
      </div>
      <Link className={styles.shopLink} href="/products">
        Visit shop
      </Link>
    </section>
  );
}
