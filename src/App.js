import './App.scss';
import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import NavShelf from './Components/NavShelf/NavShelf';
import PlayContainer from './Components/PlayContainer/PlayContainer';
import { playData } from './playData';
import SettingsPage from './Components/SettingsPage/SettingsPage';

function App() {

const [settingsOpen, setSettingsOpen] = useState(false)
const [openDrawer, setOpenDrawer] = useState(false)
const [viewMode, setViewMode] = useState('Basic')
const [cutDisplay, setCutDisplay] = useState(
  {
    sceneDeleted: 'lines',
    redundancy: 'lines',
    purple: 'lines',
    cutForLength: 'lines',
    shorteningFemales: 'lines',
    moved: 'lines',
  }
  )
const [altOption, setAltOption] = useState(false)

 
    return (
      <div className="App">
        <header className="App-header">
          <NavBar setOpenDrawer={setOpenDrawer} viewMode={viewMode} setSettingsOpen={setSettingsOpen} setViewMode={setViewMode} setCutDisplay={setCutDisplay} altOption={altOption} setAltOption={setAltOption} />
        </header>
        { settingsOpen ? <body>
        <SettingsPage cutDisplay={cutDisplay} setCutDisplay={setCutDisplay} setSettingsOpen={setSettingsOpen} />
        <NavShelf play={playData} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </body>
        : <body>
        <PlayContainer play={playData} viewMode={viewMode} cutDisplay={cutDisplay} altOption={altOption} />
        <NavShelf play={playData} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </body>
        }
      </div>
    );
  }

export default App;
