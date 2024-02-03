import styles from './Footer.module.scss';
import logo from '../../assets/dine.svg';

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <img src={logo} alt='footer_logo' />
        <div className={styles.list}>
          <ul>
            <li>Marthwaite, Sedbergh </li>
            <li>Cumbria</li>
            <li>+00 44 123 4567</li>
          </ul>
          <ul>
            <li>OPEN TIMES</li>
            <li>MON - FRI: 09:00 AM - 10:00 PM</li>
            <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
