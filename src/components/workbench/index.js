import { useEffect, useState } from "react";
import useWorkbench from "../../hook/useWorkbench";

function Workbench(props) {
    
    const [workbench, setWorkbench] = useWorkbench();        
    //{ workbench.tabs[0].blocks[0] }

    useEffect(()=>{
      let temp = Object.assign(workbench);
      props.setBlockState(temp);
    })

    let [currentTab, setCurrentTab] = useState(1);

    return (
        <div className='workbench'>
          
          <div className='tabs'> 
            <span className='tab-item' isselected="true" onClick={(e)=>{
              let x = document.getElementsByClassName('tab-item');
              for(let i=0; i < x.length; i++){
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
            
          </div>
          <div className="workbench-body">
            { !workbench.tabs[currentTab-1]?.blocks[0]?"contents not exist":workbench.tabs[currentTab-1].blocks[0] /*TAB은 1부터 시작이라 인덱스에 -1 했습니다*/}
          </div>
        </div>
    );
}

export default Workbench;