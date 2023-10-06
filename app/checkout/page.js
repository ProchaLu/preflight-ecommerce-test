import CheckOutForm from './CheckOutForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Check out',
  description: 'Almost finished with your order',
};

export default function Checkout() {
  return (
    <div className={styles.formWrapper}>
      <CheckOutForm />
    </div>
  );
}
