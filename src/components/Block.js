import { useState } from "react";

function Block(props) {    
    let cn = `block-${props.type}`
    const [mouseIn, setMouseIn] = useState(0);    
    return(
        <div 
            className={cn} 
            onMouseOver={()=>{setMouseIn(1)}}
            onMouseOut={()=>{setMouseIn(0)}}
        >
            <span>{props.content}</span>
            {/* { mouseIn == 1 ?  <button onClick={()=>{props.addBlock(<span>테스트!</span>)}}>+</button> : "" } */}
            { mouseIn == 1 ? <button onClick={function(){props.addBlock(<Assignment/>)}}>asdf</button> : ""}
        </div>
    );
}
function Assignment() {
    return(
        <Block content="네모이다" type="assignment"/>
    );
}
function Start(props) {
    return(
        <Block content="START" type="circle" addBlock={props.addBlock}/>
    );
}
function End(props) {
    return(
        <div>끝이다</div>
    );
}
export { Assignment, Start, End }