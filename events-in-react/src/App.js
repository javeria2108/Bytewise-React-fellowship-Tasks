import React, { useState } from 'react';

const App=()=>{
  const lightGreen="lightgreen";
  const [bg,setBg]=useState(lightGreen);
  const [name,setName]=useState("click Me");
  const bgChange=()=>{
    ;
   // console.log('clicked');
   let newBg="lightblue";
   setBg(newBg);
   setName("Ramadan Mubarak");
   
  }
  const bgBack=()=>{
    setBg(lightGreen);
    setName("Iftar party?");
  }

  return(
    <>
    <div style={{ backgroundColor:bg  }}>
      <button onClick={bgChange} onDoubleClick={bgBack}> 
        {name}
      </button>
    </div>
    
    </>
  );
}
export default App;