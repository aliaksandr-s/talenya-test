import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  color: 'red',
  fontSize: '1.1rem',
}

const Error = ({ msg }) => (
  <div style={styles}>{msg}</div>
);

Error.propTypes = {
  msg: PropTypes.string.isRequired,
}

export default Error;