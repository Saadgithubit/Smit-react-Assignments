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
        <div className='all-products'>
            {products.map(function (item) {
                console.log(item)
                const { id } = item
                return (
                    <div className='card' onClick={() => navigate(`details/${id}`)}>
                        <img src={item.images[0]} width='100%' height='60%' />

                    </div>
                )
            })}

        </div>
    )

}

export default Cards;
