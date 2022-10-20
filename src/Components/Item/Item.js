


import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({item}) => {


    return(
        <div key={item.id} className="contenedorCard">
            <img alt="" src={item.image} className="imagenCard"/>
            <h2 className="tituloCard">{item.title}</h2>
            <p className="precioCard">${item.precio}</p>
            <Link className="btnDetalle" to={`/item/${item.id}`}><button className="BtnDetalle">Detalle</button></Link>
        </div>
    );
}

export default Item;