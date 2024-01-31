import styles from './Showcase.module.scss';
import gray from '../../assets/gray.svg';
import grayL from '../../assets/gray-left.svg';
import design from '../../assets/design.svg';

const Showcase = () => {
  return (
    <section className={styles.showcase_container}>
      <div className={styles.wrapper}>
        <div className={styles.top_showcase}>
          <div className={styles.images}>
            <img src={gray} alt='Gray' className={styles.gray} />
            <div className={styles.place}></div>
          </div>
          <div className={styles.showcase_text}>
            <img src={design} alt='design' />
            <h2>
              Enjoyable place <br /> for all the family
            </h2>
            <p>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className={styles.bottom_showcase}>
          <div className={styles.images}>
            <img src={grayL} alt='Gray' className={styles.grey} />
            <div className={styles.food}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='160'
                height='76'
                viewBox='0 0 160 76'
                fill='none'
              >
                <rect y='70' width='160' height='6' fill='#9E7F66' />
                <rect y='56' width='160' height='6' fill='#9E7F66' />
                <rect y='42' width='160' height='6' fill='#9E7F66' />
                <rect y='28' width='160' height='6' fill='#9E7F66' />
                <rect y='14' width='160' height='6' fill='#9E7F66' />
                <rect width='160' height='6' fill='#9E7F66' />
              </svg>
            </div>
          </div>
          <div className={styles.showcase_text}>
            <img src={design} alt='design' />
            <h2>The most locally sourced food</h2>
            <p>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
