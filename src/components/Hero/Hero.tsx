import styles from './Hero.module.scss';
import dine from '../../assets/dine.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
      <div className={styles.hero_container}>
        <div className={styles.hero_text}>
          <Link to='/'>
            <img src={dine} alt='dine logo' />
          </Link>
          <h1>
            Exquisite dining <br /> since 1989
          </h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Button text='Book a table' transparent={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
