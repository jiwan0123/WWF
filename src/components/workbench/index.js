import { useEffect, useState } from "react";
import useWorkbench from "../../hook/useWorkbench";

function Workbench(props) {
    
    const [workbench, setWorkbench] = useWorkbench();        
    //{ workbench.tabs[0].blocks[0] }

    useEffect(()=>{
      let temp = Object.assign(workbench);
      props.setBlockState(temp);
    })

    return (
        <div className='workbench'>
          
          <div className='tabs'>
            <span className='tab-item'>TAB 1</span>
            <span className='tab-item'>TAB 2</span>
            <span className='tab-item'>TAB 3</span>
            <span className='tab-item'>TAB 4</span>
          </div>
          <div>
            { workbench.tabs[0].blocks[0] }
          </div>
        </div>
    );
}

export default Workbench;