
function Header(props) {
    return(
        <header>
            <span>초특급 로고</span>
            <span> 아무개 </span>
            <button onClick={()=>{
                try{
                    
                    let tempState = Object.assign({}, props.blockState);
                    let tempJson = {};
                    tempState.foreEach((value, index) => tempJson[index] = value);
                    
                    console.log(tempJson);
                    navigator.clipboard.writeText(JSON.stringify());
                    alert('copied Json! (test)');
                    
                } catch (err){
                    console.log(err);
                }
            }}>get json</button>
        </header>
    );
}
export default Header;