import React,{useState} from 'react';


function Room() {
    let [isLit, setLit] = useState(true);
    let [Age, setAge] = useState(21);

    // function updateList(){
    //     // console.log('button clicked')
    //     setLit(!isLit);
    // }


    
  return (
    <div>
        This is Room  : {isLit?'lit' :'dark'}
        <br />
        Age is   : {Age}

        <br />
        <button onClick={()=>{setLit(!isLit)}}>toggle light</button>

        <br />
        <button onClick={()=>{
            setAge(++Age);
        }}>
        Increase Age</button>

    </div>
  );
}

export default Room;
