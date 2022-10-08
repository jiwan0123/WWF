import { useState } from 'react';

function ClipBoardButton(props) {

    let [blockState, setBlockState] = useState({});

    const handleClick = () => {
      navigator.clipboard.writeText(JSON.stringify(props));
      console.log(props);
      alert("Copied Json !");
    }

    return <button onClick={handleClick}>Json Copy to clipboard</button>
  }

export default ClipBoardButton;