import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDataFromFirebase } from '../../Config/firebase';
function Cards() {

    const navigate = useNavigate()
    const [products, setproducts] = useState([])
    useEffect(() => {
        getData()
    }, [])

   async function getData() {
    const data = await getAllDataFromFirebase()
      setproducts(data)
        
    }

    if (!products.length) {
        return <div>Loading ......</div>
    }
    return (

        <div className=' p-4 border-2'>
            
            <div className='flex flex-wrap w-full'>
                {products.map(function (item) {
                    const { id } = item
                    return (
                        <div className='border-2 w-72 mx-2 my-6 shadow-lg' onClick={() => navigate(`details/${id}`)}>
                            <img src={item.img} className='w-full h-48 border-y-2 bg-gray-50 p-4' />
                            <div className='p-6'>
                                <h3 className='font-bold text-zinc-600 mt-2 hover:text-blue-600 font-serif'>{item.title}</h3>
                                <h3 className='text-gray-500 mt-2 font-bold'>Rs {item.amount}</h3>
                            </div>

                        </div>
                    )
                })}

            </div>
          
        </div>
    )

}

export default Cards;