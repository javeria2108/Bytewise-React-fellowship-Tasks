import React,{createContext} from "react";
import { useRef } from "react";
import ComA from "./ComA";
const FirstName=createContext();
const LastName=createContext();

const App=()=> {
  let ref=useRef(0);
  function handleClick(){
    ref.current=ref.current+1;
    alert('You clicked '+ ref.current + ' times! ' );
  }
 return(
  <>
  <FirstName.Provider value={"Javeria "}>
    <LastName.Provider value={"Zaheer"}>
      <ComA/>
    </LastName.Provider>
  </FirstName.Provider>
  <button onClick={handleClick}>
    useRef
  </button>
  </>
 );
};

export default App;
export {FirstName,LastName}
