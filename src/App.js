import React from 'react';
import Player from './components/youtube/EmbeddedPlayer';
import EmbedInput from './components/youtube/EmbedInput';
import Search from './components/youtube/Search';

const appStyles = {
  padding: "2rem",
  display: "grid",
  justifyContent: "center",
}

const controlStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "1rem",
  marginBottom: "2rem",
}

function App() {
  return (
    <div style={appStyles}>
      <div style={controlStyles}>
        <Search />
        <EmbedInput />
      </div>
      <Player />
    </div>
  );
}

export default App;
