import './details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Details() {
    const { adId } = useParams()
    const [product, setproduct] = useState('')

    useEffect(()=>{
        getData()
    },[])
 
    function getData(){

        fetch('https://dummyjson.com/products/'+ adId)
        .then(res => res.json())
        .then(res => setproduct(res))

    }
    if(product === ''){
        return <div>Loading ....</div>
    }

    return (
        <div>
            <img src={product.images[0]}/>
            <h1>{product.title}</h1>
        </div>
    )
}

export default Details;