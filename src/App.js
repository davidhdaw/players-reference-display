import './App.scss';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import NavShelf from './Components/NavShelf/NavShelf';
import PlayContainer from './Components/PlayContainer/PlayContainer';
import { playData } from './playData';

function App() {
console.log(playData)

const [openDrawer, setOpenDrawer] = useState(false)
const [viewMode, setViewMode] = useState('Basic')
const [cutDisplay, setCutDisplay] = useState('lines')
const [altOption, setAltOption] = useState(false)

  if(playData) {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar setOpenDrawer={setOpenDrawer} viewMode={viewMode} setViewMode={setViewMode} setCutDisplay={setCutDisplay} altOption={altOption} setAltOption={setAltOption} />
        </header>
        <body>
        <PlayContainer play={playData} viewMode={viewMode} cutDisplay={cutDisplay} altOption={altOption} />
        <NavShelf play={playData} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </body>      
      </div>
    );
  } 
}

export default App;
