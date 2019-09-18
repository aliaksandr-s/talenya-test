import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: "1.3rem",
  border: "2px solid black",
  outline: "none",
  padding: "0.3rem",
  boxSizing: "border-box",
  width: "100%",
}

const Input = ({ placeholder, onChange, onFocus, onBlur, onMouseDown }) => (
  <input
    style={styles}
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onMouseDown={onMouseDown}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onFocus: undefined,
  onBlur: undefined,
  onMouseDown: undefined,
};

export default Input;
