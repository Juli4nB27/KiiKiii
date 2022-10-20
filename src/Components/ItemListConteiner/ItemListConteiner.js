import Carrusel from "../Carrusel/Carrusel";
import React from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { firestoreFetch } from "../utils/firebaseConfig";


const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      firestoreFetch()
          .then(result => setProducts(result.filter(item => item.categoryId === parseInt(id))))
          .catch(err => console.log(err))
  } else {
    firestoreFetch()
    .then(result => setProducts(result))
  }
    
  }, [id]);
  return (
    <main className='App-main'>
      <div className="divContMain">
        <Carrusel />
        <div>
          <ItemList item={products} />
        </div>
      </div>
    </main> 
  );
};

export default ItemListConteiner;
