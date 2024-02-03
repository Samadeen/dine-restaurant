import styles from './Highlight.module.scss';
import design from '../../assets/design.svg';

const Highlight = () => {
  return (
    <section className={styles.highlight_container}>
      <div className={styles.wrapper}>
        <div className={styles.highlight_details}>
          <img src={design} alt='design' />
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className={styles.images_tab}>
          <div className={styles.tab_details}>
            <div className={styles.tab_det}>
              <div className={styles.salmon}></div>
              <div className={styles.tab_detail}>
                <h3>Seared Salmon Fillet</h3>
                <p>
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.tab_details}>
            <div className={styles.tab_det}>
              <div className={styles.filet}></div>
              <div className={styles.tab_detail}>
                <h3>Rosemary Filet Mignont</h3>
                <p>
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.tab_details}>
            <div className={styles.tab_det}>
              <div className={styles.mousse}></div>
              <div className={styles.tab_detail}>
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p>
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
