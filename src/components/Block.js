function BaseComponent(props) {
    return(
        <div className={``}>
            {props.content}
        </div>
    );
}
export default {
    Assignment : function() {
        return(
            <div>네모이다</div>
        );
    },
    Start : function() {
        return(
            <div>시작이다</div>
        );
    },
    End : function() {
        return(
            <div>끝이다</div>
        );
    }
}