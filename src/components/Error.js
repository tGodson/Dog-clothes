import React from 'react';
import PropTypes from 'prop-types';

import styles from './css/Error.module.css';

const Error = ({ msg }) => (
  <div className={styles.container}>
    <h3>Unfortunately we encountered an error, details below:</h3>
    <h2 className={styles.error}>{msg}</h2>
    <p>
      If the problem persists please report at
      <a href="mailto:tendongzegodson@gmail.com" className={styles.error}>
        {' '}
        tendongzegodson@gmail.com
      </a>
    </p>
  </div>
);

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
