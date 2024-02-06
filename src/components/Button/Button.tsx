import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({
  transparent,
  text,
}: {
  transparent: boolean;
  text: string;
}) => {
  return (
    <Link to='/reserve'>
      <button className={transparent === true ? styles.transparent : ''}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
