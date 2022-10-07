import { useState } from "react";
import useWorkbench from "../../hook/useWorkbench";

function Workbench() {
    
    const [workbench, setWorkbench] = useWorkbench();        
    //{ workbench.tabs[0].blocks[0] }

    return (    
        <div className='workbench'>
            
        </div>
    );
}

export default Workbench;