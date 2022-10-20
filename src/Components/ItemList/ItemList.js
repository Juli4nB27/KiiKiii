import React from "react";
import Item from "../Item/Item";


const ItemList = ({item}) => {
  return (
    <div  className="contenedorCards">{
        item.map(item=>
          <div key={item.id} >
            <div  className="cCard">
              <Item  item={item}/>
            </div>
          </div>
        ) 
      }
    </div>

  );
};
export default ItemList;
