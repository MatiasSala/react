import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const  handleAdd= () => {
        if (count < stock){
            setCount(count+1);
        } else {
            alert ("no hay suficiente stock");
        }
    }

    const handleDecrement=()=>{
        if (count > stock){
            setCount(count-1);
        } else {
            alert ("no hay ningun item seleccionado");
        }
    }

    useEffect(()=> {
        console.log("Se monto el ItemCount")

    },[])

    useEffect(()=> {
        console.log("Se actualiza el estado")

    },[count])

    return <div>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>

    </div>;

};

export default ItemCount