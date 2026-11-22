"use client";
// use client was needed because Error: Event handlers cannot be passed to Client Component props, 
// so i needed to make this a client component so it wouldbe rendered client side not server side as the default
import {useState} from "react";
export default function Names() {
    const [index, setIndex] = useState(0);

    if(index>0){
        return <p 
                   key={index}
                   className="headline heart-pop cursor-pointer text-8xl sm:text-9xl [text-shadow:0_0_6px_currentColor]"
                   onClick = {function(){setIndex(index+1)}}
                   >Olivér</p>;
    }
    return(
        
   
      <h1 className="headline text-5xl sm:text-7xl lg:text-9xl px-4 text-center" 
          onClick= {function() {
            setIndex(index+1)
            }
             }
              >
        Brigi<span className="headline"> + </span>Johnny
      </h1>
    );
}
