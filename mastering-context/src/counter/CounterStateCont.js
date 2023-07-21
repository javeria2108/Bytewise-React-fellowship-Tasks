
import { useState,createContext,useContext } from "react"
const CounterContext=createContext(null);
const CounterContextProvider=({children})=>(
    <CounterContext.Provider value={useState(0)}>
        {children}
    </CounterContext.Provider>
)
const AddOneButton=()=>{
    const[,setCounter]=useContext(CounterContext);
    return(
    <div>
        <button onClick={()=>setCounter((v)=>
            v+1)}>Add One</button>
    </div>
    )
}
const Container=()=>(
    <AddOneButton />
)
const Counter=()=>{
    const[counter]=useContext(CounterContext);
   return(
    <div>Counter: {counter}</div>
   )
   }
function CounterState(){
    return(
    <div>
        <CounterContextProvider>
        <Container />
        <Counter ></Counter>
        </CounterContextProvider>
    </div>)
}
export default function CounterStatePage(){
return(
    <>
    <CounterState/>
    <CounterState/>
    <CounterState/>
     <CounterState/>
    
    </>
)
}