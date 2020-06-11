import React,{useState} from 'react';
import './Room.css';


function Room() {
    let [isLit, setLit] = useState(true);
    // let [Age, setAge] = useState(21);
    let [temp, setTemp] = useState(22);

    // function updateList(){
    //     // console.log('button clicked')
    //     setLit(!isLit);
    // }


    
  return (
    <div className={`room ${isLit ? 'lit': 'dark'} `}>
    {/* <div className='room'> */}
        <div>
            This Room switch is  : {isLit?'On' :'Off'}
            <br />
            {/* Age is   : {Age} */}

            <br />
            Room Temperature   : {temp} Celsius

            <br />
        </div>
        <div>
            <button onClick={()=>{setLit(true)}}>light On</button>

            <button onClick={()=>{setLit(false)}}>light Off</button>


            <br />

            <button onClick={()=>{
                setTemp(++temp);
            }}>
            Increase Temperature</button>

            <br />
            <button onClick={()=>{
                setTemp(--temp);
            }}>
            Increase Temperature</button>
        </div>
    </div>
  );
}

export default Room;
