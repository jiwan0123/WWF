
function Header(props) {
    return(
        <header>
            <span>초특급 로고</span>
            <span> 아무개 </span>
            <button onClick={()=>{
                try{
                    let tempState = Object.assign({}, props.blockState);
                    //let tempJson = {...tempState.tabs[props.currentTab - 1]?.blocks[0]};
                    let tempJson = {Blocks:[]};
                    for(let i=0;i < tempState.tabs[props.currentTab - 1].blocks.length; i++){
                        tempJson.Blocks[i] = tempState.tabs[props.currentTab - 1].blocks[i].type.name;
                    }
                    console.log(tempJson);
                    navigator.clipboard.writeText(JSON.stringify(tempJson));
                    //alert('copied Json! (test)');
                } catch (err){
                    console.log('contents not exist');
                }
            }}>get json</button>
        </header>
    );
}
export default Header;