
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';


const ItemDetailConteiner = () =>{ 
    const [datos, setDatos] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const q = doc(db, 'productos', id);
        getDoc(q)
            .then(res => setDatos({
                id: res.id,
                ...res.data()
            }))
    }, [id])
    return(
        <>{
            <main className='App-main'>
                <ItemDetail item={datos} />
            </main>
        }</>
    )
}

export default ItemDetailConteiner;
