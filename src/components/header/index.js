
function Header(props) {
    return(
        <header>
            <span>초특급 로고</span>
            <span>아무개</span>
            <button onClick={()=>{
                console.log(props.blockState);
                alert('copied Json! (test)');
                /*
                navigator.clipboard.writeText(JSON.stringify(props.blockState));
                
                alert("Copied Json !");
                */
            }}>get json</button>
        </header>
    );
}

export default Header;