import React from 'react';
import Card from './card/card'; // Assuming card.jsx is in the same directory as App.jsx
import song1 from './audio/song.mp3';
import song2 from './audio/song1.mp3';
import song3 from './audio/song2.mp3';
import song4 from './audio/song3.mp3';
import song5 from './audio/song4.mp3';
import song6 from './audio/song5.mp3';
import backgroundImage from './img/kk.jpg'; // Import your background


function App() {
  return (
<div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
<h1 className='head'>MUSIC AUDIO</h1>  

         <div className="song-row1">
      <Card song={song1} title="song1" />
      <Card song={song2}  title="song2"/>
      <Card song={song3} title="song3"/>
      </div>
      <div className="song-row2">
      <Card song={song4} title="song4"/>
      <Card song={song5} title="song5"/>
      <Card song={song6} title="song6"/>
      </div>
    </div>

  );
}

export default App;
