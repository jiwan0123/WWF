import { useState } from "react";
import {Assignment, Start} from "../components/Block";


function getblock(element) { //사용안하는 함수 참고용
    const block = {
        data     : element,
        child    : [],
        parent   : null,
        marked   : false, //방문을 했느냐 안했느냐 # 전체 탐색할때만 필요
        addBlock : function(block) {
            this.child.push(block);
        }
    }
    return block;
}

/**
 * 워크밴치 state를 리턴하는 custom Hook 이다
 * 초기값으로 0번째 탭에 Start block 을 추가해두었다.
 * 
 */ 
function useWorkbench(addBlock) {
    const [workbench, setWorkbench] = useState({
        tabs : [
            {
                block : 
                [
                    <Start child={[]} parent={[]} marked={false} />,
                    <Start child={[]} parent={[]} marked={false} />
                ]
            }
        ]
    });
    
    return [workbench, setWorkbench];
}
export default useWorkbench;