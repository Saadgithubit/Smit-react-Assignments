import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cards() {

    const navigate = useNavigate()
    const [products, setproducts] = useState([])
    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setproducts(res.products))
        console.log(products);
    }
    if (!products.length) {
        return <div>Loading ......</div>
    }
    return (
                <div className='flex flex-wrap'>
            {products.map(function (item) {
                console.log(item)
                const { id } = item
                return (
                    <div className='border-2 w-64 mx-8 my-6' onClick={() => navigate(`details/${id}`)}>
                        <img src={item.images[0]} className='w-full h-48' />
                        <div className='py-6'>
                     <h4 className='text-gray-500'>{item.brand}</h4>
                     <h3 className='font-bold text-zinc-600'>{item.title}</h3>
                     <h3 className='text-gray-500'>$ {item.price}</h3>
                     </div>

                    </div>
                )
            })}

        </div>
    )

}

export default Cards;
