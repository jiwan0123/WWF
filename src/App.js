import './App.css';
import Block from './components/Block';
import ClipBoardButton from './FileSystem/FileSystem';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';

function App() {
  return (
    <div className='content'>
      <header>
        <span>초특급 로고</span>
        <span>아무개</span>
        <ClipBoardButton index={1} name="item" amount={20} />
      </header>
        <nav>
          <div>네비게이션</div>
        </nav>
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
          <Workbench/>
        </div>
      </main>
    </div>
  );
}

export default App;

