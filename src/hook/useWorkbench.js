import { useState } from "react";
import {Start} from "../components/Block";

function useWorkbench(addBlock) {
    const [workbench, setWorkbench] = useState({
        tabs : [
            {
                blocks : [
                    [<Start addBlock={addBlock}/>]
                ]
            }
        ]
    });

    return [workbench, setWorkbench];
}
export default useWorkbench;