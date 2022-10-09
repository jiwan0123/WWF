import { useEffect, useState } from "react";
import useWorkbench from "../../hook/useWorkbench";

function Workbench(props) {
    
    const [workbench, setWorkbench] = useWorkbench(addBlock);        
    //{ workbench.tabs[0].blocks[0] }

    useEffect(()=>{
      let temp = Object.assign(workbench); //workbench의 내용이 바뀔 때마다 workbench의 내용을 blockstate에 저장합니다.
      props.setBlockState(temp);
    })

    let [currentTab, setCurrentTab] = useState(1);    

    function addBlock(object) {
      let temp = Object.assign({}, workbench);      
      temp.tabs[currentTab-1].blocks[0] = [...workbench.tabs[currentTab-1].blocks[0], object];      
      setWorkbench(temp);
    }

    function addTabs() {      
      let temp = Object.assign({}, workbench);
      let temp_taps = [...temp.tabs, temp.tabs[0]];
      temp.tabs = temp_taps;
      setWorkbench(temp);      
    }
    return (
        <div className='workbench'>
          <div className='tabs'> 
          { workbench.tabs.map((obj, index) => {
            return(
              <span className='tab-item' isselected="true" onClick={(e)=>{
                let x = document.getElementsByClassName('tab-item'); //className 'tab-item' 모두를 받아 isselected 를 'false'로 한 후, 선택한 탭을 'true'로 해줍니다. 
                for(let i=0; i < x.length; i++){                     //isselected 속성에 따라 layout.css 에서 처리합니다. 'isselected'는 선택된 탭을 의미합니다
                  x[i].setAttribute('isselected', 'false');
                }
                e.currentTarget.setAttribute('isselected', "true");
                props.setCurrentTab(index+1);
              }}>TAB {index+1}</span>
            )
          })}

          <button onClick={()=>{addTabs()}}>추가하기</button>
          </div>
          <div className="workbench-body">            
            <Border border={workbench.tabs[props.currentTab-1]}/>
          </div>
        </div>
    );
}

function Border(props) {
  const { border } = props;

  function Print() {
    const stack = new Array();
    for(let obj of border.blocks) {
      for(let block of obj) {
        stack.push(block);
      }
      stack.push(<hr/>);
    }
    return stack;
  }

  return(
    <>
      <Print/>
    </>
  );
}

export default Workbench;