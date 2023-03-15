import React from 'react';
import SongList from '../SongList/SongList.jsx';
import Song from '../Song/Song.jsx';

export default function Main() {
  return (
    <div>
      <Song/>
      <SongList />
    </div>
  );
}
