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
        <div className='p-4 border-2'>
            <img className='w-screen h-96' src='https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg'/>
        <div className='flex flex-wrap w-full'>
            {products.map(function (item) {
                console.log(item)
                const { id } = item
                return (
                    <div className='border-2 w-72 mx-4 my-6 shadow-lg' onClick={() => navigate(`details/${id}`)}>
                        <img src={item.images[0]} className='w-full h-48 border-y-2 bg-gray-50 p-4' />
                        <div className='py-6'>
                            <h4 className='text-gray-500'>{item.brand}</h4>
                            <h3 className='font-bold text-zinc-600 hover:text-blue-600 font-serif'>{item.title}</h3>
                            <h3 className='text-gray-500 font-bold'>$ {item.price}</h3>
                        </div>

                    </div>
                )
            })}

        </div>
        </div>
    )

}

export default Cards;
