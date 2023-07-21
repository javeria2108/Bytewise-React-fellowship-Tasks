import { useState } from "react";
export const useToggle=(initialVal)=>{
    const[state,setState]=useState(initialVal);
    const toggle =()=>{
        setState((prev)=>!prev)
    };
    return [state,toggle]

};