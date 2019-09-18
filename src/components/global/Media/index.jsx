import React from 'react';
import PropTypes from 'prop-types';

const Media = ({ src, width, height }) => (
  <div>
    <iframe
      width={width}
      height={height}
      title="media"
      src={src}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </div>
);

Media.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Media.defaultProps = {
  width: "640",
  height: "360"
}

export default Media