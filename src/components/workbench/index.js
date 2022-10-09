import { useEffect, useState } from "react";
import useWorkbench from "../../hook/useWorkbench";

function Workbench(props) {
    
    const [workbench, setWorkbench] = useWorkbench();        
    //{ workbench.tabs[0].blocks[0] }

    useEffect(()=>{
      let temp = Object.assign(workbench); //workbench의 내용이 바뀔 때마다 workbench의 내용을 blockstate에 저장합니다.
      props.setBlockState(temp);
    })

    let [currentTab, setCurrentTab] = useState(1);

    return (
        <div className='workbench'>
          
          <div className='tabs'> 
            <span className='tab-item' isselected="true" onClick={(e)=>{
              let x = document.getElementsByClassName('tab-item'); //className 'tab-item' 모두를 받아 isselected 를 'false'로 한 후, 선택한 탭을 'true'로 해줍니다. 
              for(let i=0; i < x.length; i++){                     //isselected 속성에 따라 layout.css 에서 처리합니다. 'isselected'는 선택된 탭을 의미합니다
                x[i].setAttribute('isselected', 'false');
              }
              e.currentTarget.setAttribute('isselected', "true");
              setCurrentTab(1);
          }}>TAB 1</span>
            <span className='tab-item' isselected="false" onClick={(e)=>{
              let x = document.getElementsByClassName('tab-item');
              for(let i=0; i < x.length; i++){
                x[i].setAttribute('isselected', 'false');
              }
              e.currentTarget.setAttribute('isselected', "true");
              setCurrentTab(2);
          }}>TAB 2</span>
            <span className='tab-item' isselected="false" onClick={(e)=>{
              let x = document.getElementsByClassName('tab-item');
              for(let i=0; i < x.length; i++){
                x[i].setAttribute('isselected', 'false');
              }
              e.currentTarget.setAttribute('isselected', "true");
              setCurrentTab(3);
          }}>TAB 3</span>
            <span className='tab-item' isselected="false" onClick={(e)=>{
              let x = document.getElementsByClassName('tab-item');
              for(let i=0; i < x.length; i++){
                x[i].setAttribute('isselected', 'false');
              }
              e.currentTarget.setAttribute('isselected', "true");
              setCurrentTab(4);
          }}>TAB 4</span>
            <span className="addTab" onClick={()=>{}}>+</span> { /*이 버튼 누르면 tab이 추가되게 합니다.*/ }
          </div>
          <div className="workbench-body">  {/*TAB은 1부터 시작이라 인덱스에 -1 했습니다 tabs요소가 있다면 출력, 없다면 'contents not exist 를 출력합니다.*/}
            { !workbench.tabs[currentTab-1]?.blocks[0]?"contents not exist":workbench.tabs[currentTab-1].blocks[0]}
          </div>
        </div>
    );
}

export default Workbench;