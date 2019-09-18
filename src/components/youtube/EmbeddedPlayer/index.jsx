import React from 'react';
import Media from '../../global/Media';
import useGlobal from '../../../db/store';

const WIDTH = "640";
const HEIGTH = "360";

const placeHolderStyle = {
  width: WIDTH + 'px',
  height: HEIGTH + 'px',
  border: '3px dotted black'
}

const Placeholder = () => (
  <div style={placeHolderStyle}></div>
)

const EmbeddedPlayer = () => {
  const [globalState, _] = useGlobal();

  return (
    <div>
      {!globalState.embededSrc && <Placeholder />}
      {globalState.embededSrc &&
        <Media
          src={globalState.embededSrc}
          width={WIDTH}
          height={HEIGTH}
        />}
    </div>
  )
};

export default EmbeddedPlayer;
