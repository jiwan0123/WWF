import './App.css';
import Block from './components/Block';
import Header from './components/header';
import Nav from './components/nav';
import Workbench from './components/workbench';
import { useState } from 'react';


/**
 *  22-10-10 PTK
 * 주석 규칙 !
 * 1. state 변수를 만들고 어디에 활용한는 변수인지 달아둘것 (datatype) ex) object, Llit, String, float
 * 2. 함수 이름위에 뭐하는 함수 인지 적을것 return 타입도 return 없음, object, string
 * 3. 컴포넌트 주석 달아주기
 *  
 */

// App 메인컴포넌트임
function App() {

  const [blockState , setBlockState] = useState();
  let [currentTab, setCurrentTab] = useState(1); // 현재 활성화된 탭 int

  return (
    <div className='content'>
      <Header blockState = {blockState} currentTab={currentTab}/>
      <main>
        <Nav/>
        <Workbench setBlockState = {setBlockState} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      </main>
    </div>
  );
}

export default App;