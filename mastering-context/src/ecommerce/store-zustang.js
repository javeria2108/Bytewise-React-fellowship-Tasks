import create from "zustand";
const useStore=create(set=>({
    user:"",
    cartCount:0,
    login:()=>set(state=>({user:"Jack"})),
    logout:()=>set(state=>({user:""})),
    addCart:()=>set(state=>({cartCount:state.cartCount+1})),
}))
export default useStore;