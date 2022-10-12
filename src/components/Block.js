import { useState } from "react";


/**
 *  Block 의 Base가 되는 컴포넌트 이다
 *  각각의 Block 요소들을 추가할때 아래의 Block 컴포넌트 에 내용을 전달하여 return 한다 
 */
function Block(props) {    
    let cn = `block-${props.type}` // 클레스네임 별의미는 없음
    let [child, setChild] = useState([]);
    let parent = props.parent;
    let marked = props.marked;

    const [mouseIn, setMouseIn] = useState(0); // 마우스가 들어왔는지 여부 변수
    return([
        <div 
            className={cn} 
            onMouseOver={()=>{setMouseIn(1)}}
            onMouseOut={()=>{setMouseIn(0)}}
        >
            <span>{props.content} </span>            
            { mouseIn == 1 ? <button onClick={(e)=>{
                let temp = <Assignment child={[]} parent={[]} marked={false} />;
                setChild(temp);
            }}> 추가하기 </button> : ""}
        </div>
        , child]
    );
}

/**
 * 변수를 선언할때 컴포넌트
 */
function Assignment(props) {
    return(
        <Block content="Assignment" type="assignment" addBlock={props.addBlock}/>
    );
}

/**
 * 워크플로어 의 시작 컴포넌트 
 */
function Start(props) {
    return(
        <Block content="START" type="circle" addBlock={props.addBlock}/>
    );
}

/**
 * 워크 플로어의 끝 컴포넌트 
 */
function End(props) {
    return(
        <div>끝이다</div>
    );
}
export { Assignment, Start, End }