import React from 'react';
import PropTypes from 'prop-types';

const wrapperStyles = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}

const titleStyles = {
  marginLeft: "1rem"
}

const thumbStyles = {
  height: "2rem"
}


const PreviewElement = ({ thumbnailSrc, title, onClick }) => (
  <div style={wrapperStyles} onMouseDown={onClick}>
    <img style={thumbStyles} src={thumbnailSrc} alt="thumbnail" />
    <div style={titleStyles}>{title}</div>
  </div>
);

PreviewElement.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PreviewElement;