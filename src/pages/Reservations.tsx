import styles from './Reservations.module.scss';
import dine from '../assets/dine.svg';
import regray from '../assets/re-gray.png';
import arrow from '../assets/arrow-down.svg';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hour: '',
    min: '',
    month: '',
    day: '',
    year: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    hour: '',
    min: '',
    month: '',
    day: '',
    year: '',
  });
  const [num, setNum] = useState(1);

  const handleDecrement = () => {
    // Ensure num does not go below 1
    setNum((prevState) => Math.max(1, prevState - 1));
  };

  const handleIncrement = () => {
    // Increment as usual
    setNum((prevState) => prevState + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Reservation made');
      setFormData({
        name: '',
        email: '',
        hour: '',
        min: '',
        month: '',
        day: '',
        year: '',
      });
    } else {
      alert('Form has errors. Please fix them.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      hour: '',
      min: '',
      month: '',
      day: '',
      year: '',
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'This field is required';
      valid = false;
    }

    // Validate hour
    if (
      !formData.hour.trim() ||
      isNaN(+formData.hour) ||
      +formData.hour < 1 ||
      +formData.hour > 24
    ) {
      newErrors.hour = 'This field is incomplete';
      valid = false;
    }

    // Validate minute
    if (
      !formData.min.trim() ||
      isNaN(+formData.min) ||
      +formData.min < 1 ||
      +formData.min > 59
    ) {
      newErrors.min = 'This field is incomplete';
      valid = false;
    }

    // Validate month
    if (
      !formData.month.trim() ||
      isNaN(+formData.month) ||
      +formData.month < 1 ||
      +formData.month > 12
    ) {
      newErrors.month = 'This field is incomplete';
      valid = false;
    }

    // Validate day
    if (
      !formData.day.trim() ||
      isNaN(+formData.day) ||
      +formData.day < 1 ||
      +formData.day > 31
    ) {
      newErrors.day = 'This field is incomplete';
      valid = false;
    }

    // Validate year
    if (
      !formData.year.trim() ||
      isNaN(+formData.year) ||
      +formData.year < 2024 ||
      +formData.year > 2050
    ) {
      newErrors.year = 'This field is incomplete';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  return (
    <section className={styles.reserve_container}>
      <>
        <div className={styles.wrapper}>
          <img src={dine} alt='dine logo' className={styles.logo} />
          <div className={styles.reserve}>
            <div className={styles.reserve_details}>
              <h1>Reservations</h1>
              <p>
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </p>
            </div>
            <form action='' onSubmit={handleSubmit}>
              <label htmlFor='name' className={styles.label}>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  className={
                    errors.name.length > 1 ? styles.errorPlaceholder : ''
                  }
                  style={
                    errors.name.length > 1
                      ? {
                          borderBottom: '0.0625rem solid #B54949',
                        }
                      : undefined
                  }
                />
                <small>{errors.name}</small>
              </label>
              <label htmlFor='email' className={styles.label}>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  style={
                    errors.email.length > 1
                      ? { borderBottom: '0.0625rem solid #B54949' }
                      : undefined
                  }
                  className={
                    errors.name.length > 1 ? styles.errorPlaceholder : ''
                  }
                />
                <small>{errors.email}</small>
              </label>
              <div className={styles.date}>
                <div>
                  <h6
                    style={
                      errors.month.length > 1 ||
                      errors.day.length > 1 ||
                      errors.year.length > 1
                        ? { color: '#b54949' }
                        : undefined
                    }
                  >
                    Pick a date
                  </h6>
                  {errors.month.length > 1 ||
                  errors.day.length > 1 ||
                  errors.year.length > 1 ? (
                    <small>This Field is incomplete</small>
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.fields}>
                  <label htmlFor='month'>
                    <input
                      type='number'
                      name='month'
                      id='month'
                      placeholder='MM'
                      min='1'
                      max='12'
                      pattern='[0-9]*'
                      inputMode='numeric'
                      autoComplete='off'
                      value={formData.month}
                      onChange={handleChange}
                      className={
                        errors.name.length > 1 ? styles.errorPlaceholder : ''
                      }
                    />
                  </label>
                  <label htmlFor='day'>
                    <input
                      type='number'
                      name='day'
                      id='day'
                      placeholder='DD'
                      min='1'
                      max='31'
                      pattern='[0-9]*'
                      inputMode='numeric'
                      autoComplete='off'
                      value={formData.day}
                      onChange={handleChange}
                      className={
                        errors.name.length > 1 ? styles.errorPlaceholder : ''
                      }
                    />
                  </label>
                  <label htmlFor='year'>
                    <input
                      type='number'
                      name='year'
                      id='year'
                      placeholder='YYYY'
                      min='2024'
                      max='2050'
                      pattern='[0-9]*'
                      inputMode='numeric'
                      autoComplete='off'
                      value={formData.year}
                      onChange={handleChange}
                      className={
                        errors.name.length > 1 ? styles.errorPlaceholder : ''
                      }
                    />
                  </label>
                </div>
              </div>
              <div className={styles.time}>
                <div>
                  <h6
                    style={
                      errors.month.length > 1 ||
                      errors.day.length > 1 ||
                      errors.year.length > 1
                        ? { color: '#b54949' }
                        : undefined
                    }
                  >
                    Pick a time
                  </h6>
                  {errors.hour.length > 1 || errors.min.length > 1 ? (
                    <small>This Field is incomplete</small>
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.fields}>
                  <label htmlFor='hour'>
                    <input
                      type='number'
                      name='hour'
                      id='hour'
                      placeholder='09'
                      min='1'
                      max='24'
                      pattern='[0-9]*'
                      inputMode='numeric'
                      autoComplete='off'
                      value={formData.hour}
                      onChange={handleChange}
                      className={
                        errors.name.length > 1 ? styles.errorPlaceholder : ''
                      }
                    />
                  </label>
                  <label htmlFor='min'>
                    <input
                      type='number'
                      name='min'
                      id='min'
                      placeholder='00'
                      min='1'
                      max='59'
                      pattern='[0-9]*'
                      inputMode='numeric'
                      autoComplete='off'
                      value={formData.min}
                      onChange={handleChange}
                      className={
                        errors.name.length > 1 ? styles.errorPlaceholder : ''
                      }
                    />
                  </label>
                  <div className={styles.am}>
                    <h5>AM</h5>
                    <img src={arrow} alt='arrow' />
                    <div className={styles.pm}>
                      <div className={styles.chi}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M0 5.89681L2.76748 8.66429L10.4318 1'
                            stroke='#9E7F66'
                            stroke-width='2'
                          />
                        </svg>
                        <h5>AM</h5>
                      </div>
                      <div className={styles.chi}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M0 5.89681L2.76748 8.66429L10.4318 1'
                            stroke='#9E7F66'
                            stroke-width='2'
                          />
                        </svg>
                        <h5>PM</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.people}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='7'
                  height='3'
                  viewBox='0 0 7 3'
                  fill='none'
                  onClick={handleDecrement}
                >
                  <path
                    d='M6.42491 2.97695V0.600952H0.628906V2.97695H6.42491Z'
                    fill='#9E7F66'
                  />
                </svg>
                <h4>
                  {num} {num > 1 ? 'People' : 'Person'}
                </h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='11'
                  viewBox='0 0 10 11'
                  fill='none'
                  onClick={handleIncrement}
                >
                  <path
                    d='M6.22709 10.156V6.72696H9.65609V4.34196H6.22709V0.912964H3.84209V4.34196H0.413086V6.72696H3.84209V10.156H6.22709Z'
                    fill='#9E7F66'
                  />
                </svg>
              </div>
              <button>Make Reservation</button>
            </form>
          </div>
        </div>
        <div className={styles.gray}>
          <img src={regray} alt='design' />
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
      </>
      <Footer />
    </section>
  );
};

export default Reservations;
