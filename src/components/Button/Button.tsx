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
      {text}
    </button>
  );
};

export default Button;
