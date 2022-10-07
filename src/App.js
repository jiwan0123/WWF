import './App.css';
import Block from './components/Block';
import ClipBoardButton from './FileSystem/FileSystem';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';
import { useState } from 'react';
import useWorkbench from './hook/useWorkbench';

function App() {
  
  let [nowTab, setNowTab] = useState(1);
  //let [state, setState] = useState();
  
  return (
    <div className='content'>
      <Header/>
      <ClipBoardButton state/>
      <main>
        <Nav/>
        <Workbench/>
      </main>
    </div>
  );
}

export default App;

