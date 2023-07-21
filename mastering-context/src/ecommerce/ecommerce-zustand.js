import useStore from "./store-zustang"

const LoginSection=()=>{
    const login=useStore((state)=>state.login);
    const logout=useStore((state)=>state.logout);
    return(
    <div>
        <button onClick={login}>
            Login
        </button>
        <button onClick={logout}> 
            Logout
        </button>
    </div>
    )
}
const UserSection=()=>{
    const user=useStore((state)=>state.user);
    return(
    <div>
       User: {user}
    </div>)
}
const AddCartSection=()=>{
    const addCart=useStore((state)=>state.addCart);
    return(
    <div>
       <button onClick={addCart}>
        Add to cart
       </button>
    </div>)
}
const CartCountSection=()=>{
    const cartCount=useStore((state)=>state.cartCount);
    return(
    <div>
       Cart Count: {cartCount}
    </div>
    )
}

export default function ZustandPage(){
    return(
        <div>
          <LoginSection/>
          <UserSection/>
          <AddCartSection/>
          <CartCountSection/>
        </div>
    )
}