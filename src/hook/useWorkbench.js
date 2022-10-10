import { useState } from "react";
import {Start} from "../components/Block";


/**
 * 워크밴치 state를 리턴하는 custom Hook 이다
 * 초기값으로 0번째 탭에 Start block 을 추가해두었다.
 * 
 */ 
function useWorkbench(addBlock) {
    const [workbench, setWorkbench] = useState({
        tabs : [
            {
                blocks : [
                    [<Start addBlock={addBlock}/>],
                ]
            }
        ]
    });

    return [workbench, setWorkbench];
}
export default useWorkbench;