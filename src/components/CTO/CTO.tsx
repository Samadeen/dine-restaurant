import Button from '../Button/Button';
import styles from './CTO.module.scss';

const CTO = () => {
  return (
    <section className={styles.cto_container}>
      <div className={styles.wrapper}>
        <h2>Ready to make a reservation?</h2>
        <Button text='Book a table' transparent={true} />
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTO;
