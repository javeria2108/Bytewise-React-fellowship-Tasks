import { useState } from "react"
const AddOneButton=({setCounter})=>{
    return(
    <div>
        <button onClick={()=>setCounter((v)=>
            v+1)}>Add One</button>
    </div>
    )
}
const Container=({children})=>(
   <div>{children}</div>
)
const Counter=({counter})=>(
    <div>Counter: {counter}</div>
)
export default function CounterState(){
const [counter,setCounter]=useState(0);
    return(
    <div>
        <Container >
            <AddOneButton setCounter={setCounter}/>
        </Container>
        <Counter counter={counter}></Counter>
    </div>)
}