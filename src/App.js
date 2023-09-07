import './App.scss';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import NavShelf from './Components/NavShelf/NavShelf';
import PlayContainer from './Components/PlayContainer/PlayContainer';
import { playData } from './playData';

function App() {
console.log(playData)

const [openDrawer, setOpenDrawer] = useState(true)

  if(playData) {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar setOpenDrawer={setOpenDrawer} />
        </header>
        <body>
        <PlayContainer play={playData} />
        <NavShelf play={playData} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </body>      
      </div>
    );
  } 
}

export default App;
