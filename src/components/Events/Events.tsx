/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Events.module.scss';
import gray from '../../assets/gray-small.svg';
import family from '../../assets/family.png';
import special from '../../assets/special.png';
import social from '../../assets/social.png';
import { AnimatePresence, motion as m } from 'framer-motion';
import { useState } from 'react';
import Button from '../Button/Button';

const Events = () => {
  const [event, setEvent] = useState<'family' | 'special' | 'social'>('family');

  const eventData = {
    family: {
      src: family,
      alt: 'Family Gathering',
      title: 'Family Gathering',
      description:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    },
    special: {
      src: special,
      alt: 'Special Events',
      title: 'Special Events',
      description:
        'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    },
    social: {
      src: social,
      alt: 'Social Events',
      title: 'Social Events',
      description:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    },
  };

  const AnimatedContent = ({
    src,
    alt,
    title,
    description,
  }: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }) => (
    <m.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 1, type: 'spring' }}
      className={styles.wrapper}
    >
      <div className={styles.image_holder}>
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
        <m.img src={src} alt={alt} />
      </div>
      <div className={styles.event_tab}>
        <div className={styles.event_details}>
          <m.h2>{title}</m.h2>
          <p>{description}</p>
          <Button text='Book a table' transparent={false} />
        </div>
        <div className={styles.buts}>
          <small
            className={event === 'family' ? styles.active : ''}
            onClick={() => setEvent('family')}
          >
            Family Gathering
          </small>
          <small
            className={event === 'special' ? styles.active : ''}
            onClick={() => setEvent('special')}
          >
            Special Events
          </small>
          <small
            className={event === 'social' ? styles.active : ''}
            onClick={() => setEvent('social')}
          >
            Social Events
          </small>
        </div>
      </div>
    </m.div>
  );

  return (
    <section className={styles.event_container}>
      <img src={gray} alt='gray' className={styles.gray} />
      <AnimatePresence mode='wait' initial={false} custom={event as any}>
        <AnimatedContent {...eventData[event]} />
      </AnimatePresence>
    </section>
  );
};

export default Events;
