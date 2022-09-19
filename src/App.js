import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {actions,originals} from './urls.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' urls={originals} />
       <RowPost title='Action Movies' urls={actions} isSmall />
    </div>
  );
}

export default App;
