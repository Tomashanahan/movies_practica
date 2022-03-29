import React, { useEffect, useRef } from 'react';
import './App.css'

import Search_bar from './components/Search_bar/Search_bar';

import Movie from './components/movie';

function App() {
  const [input,setInput] = React.useState('')
  return (
    <div>
      <Search_bar setInput={setInput}/>
      <div>
        <Movie input={input}/>
      </div>
    </div>
  );
}

export default App;
