import phoneBook from '../../img/phone-book.jpeg';

import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <section>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Welcome to Phone book</h1>
        <img src={phoneBook} alt="Phone book" width={200}></img>
      </div>
    </section>
  );
};

export default HomePage;
