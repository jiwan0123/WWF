import './App.css';
import Block from './components/Block';

function App() {
  return (
    <div className='content'>
      <header>
        <span>초특급 로고</span>
        <span>아무개</span>
      </header>
      <main>
        <nav>
          <div>네비게이션</div>        
        </nav>
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

