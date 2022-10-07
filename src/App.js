import './App.css';
import Block from './components/Block';
import ClipBoardButton from './FileSystem/FileSystem';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';
import { useState } from 'react';

function App() {

  let [nowTab, setNowTab] = useState(1);

  return (
    <div className='content'>
      <Header/>
      <ClipBoardButton state={Workbench.Workbench.tabs}/>
      <main>
        <Nav/>
        <div className='workbench'>
          <div className='tabs'>
            <span className='tab-item' onClick={()=>{setNowTab(1);}}>TAB 1</span>
            <span className='tab-item' onClick={()=>{setNowTab(2);}}>TAB 2</span>
            <span className='tab-item' onClick={()=>{setNowTab(3);}}>TAB 3</span>
            <span className='tab-item' onClick={()=>{setNowTab(4);}}>TAB 4</span>
          </div>
          <Workbench/>
        </div>
      </main>
    </div>
  );
}

export default App;

