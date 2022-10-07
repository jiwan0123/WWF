import './App.css';
import Block from './components/Block';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  return (
    <div className='content'>
      <Header/>
      <main>
        <Nav/>
        <div className='workbench'>
          <div className='tabs'>
            <span className='tab-item'>TAB 1</span>
            <span className='tab-item'>TAB 2</span>
            <span className='tab-item'>TAB 3</span>
            <span className='tab-item'>TAB 4</span>
          </div>
          <div>workbench</div>
        </div>
      </main>
    </div>
  );
}

export default App;

