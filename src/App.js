import './App.css';
import Block from './components/Block';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';
import { useState } from 'react';

function App() {

  const [blockState , setBlockState] = useState();

  return (
    <div className='content'>
      <Header blockState = {blockState}/>
      
      <main>
        <Nav/>
        <Workbench setBlockState = {setBlockState}/>
      </main>
    </div>
  );
}

export default App;