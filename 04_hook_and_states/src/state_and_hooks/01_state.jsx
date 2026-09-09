// import { useState } from "react"

// const State =()=>{
//     const[count,setCount]=useState(0);

//     const Increment = ()=>{
//         setCount(count+1);
//     };

//     const decrs = ()=>{
//         setCount(count-1)
//     }

//     return(
//         <>
//             <h1>{count}</h1>
//             <br/>
//             <button onClick={()=>{Increment()}}>Increment</button>
//                <button  onClick={()=>{decrs()}}>decrs</button>
//         </>
//     )
// }

// export default State;

import { useState }  from "react"

const State_01 =()=>{
    const [counter,setCounter]= useState(0);

    const handleClick=()=>{
        setCounter(counter+1);
    }

    console.log("this is counter");

    return(
        <>
        <h1>{counter}</h1>

           {/* 
           1. Inline Arrow Function
              Click hone par hi setCounter execute hoga.
              Jab chhota logic directly button ke andar likhna ho,
              tab ye use kar sakte hain.
            */}

        {/* <button onClick={()=>setCounter(counter+1)}>increase</button> */}

              {/* 
          2. Function Reference
         React ko handleClick function ka reference diya hai.
           Button click hone par React automatically handleClick()
          execute karega.
          Ye tumhare case mein recommended/simple way hai.
        */}
        {/* <button onClick={handleClick}>increase</button>*/}

          {/* 
              3. Event Object ke saath
              React click event ko 'e' ke through receive karta hai
              aur handleClick ko pass karta hai.
              Jab event ki information chahiye ho tab useful hai.
            */}
        {/* <button onClick={(e)=>handleClick(e)}>increase</button> */}
        
         {/* 
              4. WRONG ❌
              handleClick() yaha immediately execute ho jayega,
              button click hone ka wait nahi karega.
              Isliye event handler mein normally () nahi lagate.
            */}
        <button onClick={handleClick()}>increase</button>
        </>

    )
    
}

export default State_01;