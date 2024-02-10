import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDataFromFirebase } from '../../Config/firebase';

function Cards() {
    // const { fetchdata } = props

    const navigate = useNavigate()
    const [products, setproducts] = useState([])
    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        const data = await getAllDataFromFirebase()
console.log(data);
        setproducts(data)
        // fetchdata(data)

    }

    if (!products.length) {
        return <div className='w-3/6 m-auto'>
            <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif"
                width="50%" alt="" />
        </div>
    }
    return (

        <div className=' p-8 border-2 justify-center align-middle'>

            <div className='flex border-2 container flex-wrap w-full '>
                {products.map(function (item) {
                    const { id } = item
                    return (
                        <div className='border-2 w-72 pb-4 mx-2 my-6 shadow-lg' onClick={() => navigate(`details/${id}`)}>
                            <img src={item.images[1]} className='w-full h-48 border-y-2 p-1' />
                            <div className='px-6'>
                                <div className='flex justify-between py-2'>
                                    <h3 className='mt-2 font-bold'>Rs {item.amount}</h3>
                                    <i class="fa-regular fa-heart mt-1 cursor-pointer text-xl"></i>
                                </div>
                                <h3 className=' mt-2 hover:text-blue-600 font-serif'>{item.title}</h3>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )

}

export default Cards;