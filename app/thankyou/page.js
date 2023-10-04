import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Thank you for shopping with Covfefe',
};

export default function ThankYou() {
  return <h1 className={styles.header}>Thank you for shopping with us!</h1>;
}
