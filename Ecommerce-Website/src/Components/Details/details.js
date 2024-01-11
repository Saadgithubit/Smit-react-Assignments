import './details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/navbar'


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
           <Navbar/>
           <div className ='flex justify-around my-4'>
            <img className = ''src={product.images[0]}/>
            <div className='border-2 p-5 w-1/4'>
            <h3 className = 'text-red-600'>In demand. 69 people bought this in the last 24 hours.</h3>
            <h2 className='font-bold'>$ {product.price}</h2>
            <h1>{product.title}</h1>
            <p className='text-left'>{product.description}</p>
            <h5>Return & Change Excepted</h5>
            </div>
            
            </div>
        </div>
    )
}

export default Details;
