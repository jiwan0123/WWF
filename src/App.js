import './App.css';
import Block from './components/Block';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';

function App() {
  return (
    <div className='content'>
      <Header/>
      <main>
        <Nav/>
        <Workbench/>
      </main>
    </div>
  );
}

export default App;

