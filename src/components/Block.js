import { useState } from "react";

function Block(props) {
    let cn = `block-${props.type}`    
    return(
        <div 
            className={cn}
        >
            <span>{props.content}</span>
        </div>
    );
}
export default {
    Assignment : function() {
        return(
            <Block content="네모이다" type="assignment"/>
        );
    },
    Start : function() {
        return(
            <Block content="START" type="circle"/>
        );
    },
    End : function() {
        return(
            <div>끝이다</div>
        );
    }
}