import React, { useState } from 'react';
import Input from '../../global/Input';
import Error from '../../global/Error';
import useGlobal from '../../../db/store';

import { transformLink } from '../../../services/youtube/parser'

const errorStyles = {
  position: "absolute",
}

const EmbedInput = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [_, globalActions] = useGlobal();

  const handleYoutubeInputChange = (e) => {
    const link = e.target.value;
    if (!link) {
      setErrorMessage(null);
      return;
    }

    const { error, data } = transformLink(link);
    if (error) setErrorMessage(error);

    if (data) {
      globalActions.setEmbededSrc(data);
      setErrorMessage(null);
    }
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="paste link"
        onChange={handleYoutubeInputChange}
      />

      {errorMessage && <div style={errorStyles}>
        <Error msg={errorMessage} />
      </div>
      }
    </div>
  )
};

export default EmbedInput;
