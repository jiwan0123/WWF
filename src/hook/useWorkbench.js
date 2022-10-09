import { useState } from "react";
import Block from "../components/Block";

function useWorkbench() {

    const [workbench, setWorkbench] = useState({
        tabs : [
            {
                blocks : [
                    <Block.Start/>,
                    <Block.End/>
                ]
            }
        ]
    });

    return [workbench, setWorkbench];
}
export default useWorkbench;