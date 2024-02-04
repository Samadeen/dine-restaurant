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
    <button className={transparent === true ? styles.transparent : ''}>
      <Link to='/reserve'>{text}</Link>
    </button>
  );
};

export default Button;
