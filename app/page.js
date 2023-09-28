import Image from 'next/image';
import Link from 'next/link';
import heroSectionImage from '../public/images/heroSectionImage.jpg';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Covfefe</h1>
      <Image
        src={heroSectionImage}
        alt="view of roasted coffee beans"
        width={1500}
      />
      <Link href="/products">Shop our products</Link>
    </div>
  );
}
