import { useEffect, useState } from "react"

export default function BadgerSaleItem(props) {

    const [count,setCount] = useState(0);
    const able_to_click = count > 0
    const Title_style = (props.featured === true? {color: "red"} : {color: "black"});

    const but_plus = () => {
        setCount(count+1);
    }

    const but_minus = () => {
        if(count > 0){
            setCount(count-1);
        }else{
            setCount(0);
        }
    }
  
    return <div>
        <h2>{props.name }</h2>
        <div>
            <p style={Title_style}>{props.description}</p>
            <br></br>
            <p>Price: ${props.price}</p>
        </div>
        <div>
            <button className="inline" onClick={but_minus} disabled={!able_to_click} >-</button>
            <p className="inline">{count}</p>
            <button className="inline"  onClick = {but_plus}>+</button>
        </div>
    </div>
}