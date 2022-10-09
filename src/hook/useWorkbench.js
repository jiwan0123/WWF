import { useState } from "react";
import Block from "../components/Block";

function useWorkbench() {

    const [workbench, setWorkbench] = useState({
        tabs : [
            {
                blocks : [
                    <Block.Start/>

                ]
            }
        ]
    });

    return [workbench, setWorkbench];
}
export default useWorkbench;