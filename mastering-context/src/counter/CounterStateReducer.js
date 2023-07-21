
import { type } from "@testing-library/user-event/dist/type";
import { useReducer,createContext,useContext } from "react"
const CounterContext=createContext(null);
const reducer=(state,action)=>{
    switch(action.type){
        case"add":
        return state+1;
        case"subtract":
        return state-1;
        default:
            return state;
    }
}
const CounterContextProvider=({children})=>(
    <CounterContext.Provider value={useReducer(reducer,0)}>
        {children}
    </CounterContext.Provider>
)
const AddOneButton=()=>{
    const[,dispatch]=useContext(CounterContext);
    return(
    <div>
        <button onClick={()=>dispatch({type:"add"})}>Add One</button>
    </div>
    )
}
const SubOneButton=()=>{
    const[,dispatch]=useContext(CounterContext);
    return(
    <div>
        <button onClick={()=>dispatch({type:"subtract"})}>Subtract One</button>
    </div>
    )
}
const Container=()=>(
    <>
    <AddOneButton />
    <SubOneButton/>
    </>
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