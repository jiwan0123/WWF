import { useState } from 'react';

function ClipBoardButton(props) {

    let [blockState, setBlockState] = useState({});

    function handleClick(){
      navigator.clipboard.writeText(JSON.stringify(props));
      alert("Copied Json !");
    }

    return <button onClick={handleClick}>Json Copy to clipboard</button>
  }

export default ClipBoardButton;