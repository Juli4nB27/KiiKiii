

import React,{useState} from "react";


const ItemCount = ({ RestarContador, SumarContador, count, onAdd}) => {

    return(
        <div className="count" >
            <div className="contContador" >
                <button onClick={RestarContador} disabled={count <= 0}>-</button>
                <span>{count}</span>
                <button className="btnMas" onClick={SumarContador} disabled={count >= 10}>+</button>
            </div>
            {   
                <div className="divAgregarCarrito"onClick={onAdd}>
                    <button className="btnAgregarCarrito">Agregar al carrito</button>
                </div>
            }
        </div>
    )
}


export default ItemCount;