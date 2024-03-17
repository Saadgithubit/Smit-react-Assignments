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
        
    }

    function clickProduct(){
        
    }

    if (!products.length) {
        return <div>Loading ......</div>
    }
    return (

        <div className=' p-4 border-2'>
            <div className='flex h-[500px]'>
                <div className='w-1/4 bg-blue-600'>
                    <img className='h-[85%] w-full relative left-20 top-12' src='https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png' />
                </div>
                <div className='w-3/4 bg-gray-300 px-64 py-12'>
                    <div className='w-[80%] text-left'>
                        <h3 className='mt-2 text-xl font-serif text-gray-600'>Shop is fun</h3>
                        <h1 className='mt-3 text-4xl font-bold'>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p className='mt-3 text-gray-600'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button className='mt-6 border-2 px-3 py-3 rounded-3xl font-bold w-40 bg-blue-600 text-white hover:bg-white hover:text-black'>Browse Now</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap w-full'>
                {products.map(function (item) {
                    const { id } = item
                    return (
                        <div className='border-2 w-72 mx-4 my-6 shadow-lg' onClick={() => navigate(`details/${id}`)}>
                            <img src={item.images[0]} className='w-full h-48 border-y-2 bg-gray-50 p-4' />
                            <div className='py-6'>
                            <h3 className='text-blue-700 text-xl font-bold'>{item.brand}</h3>
                                <h3 className='font-bold text-zinc-600 mt-2 hover:text-blue-600 font-serif'>{item.title}</h3>
                                <h3 className='text-gray-500 font-bold'>Rs {item.price}</h3>
                            </div>

                        </div>
                    )
                })}

            </div>
            <div className='border-2 flex justify-start px-40 py-14 w-full h-80 bg-no-repeat bg-cover bg-top bg-[url("https://static.vecteezy.com/system/resources/previews/016/264/237/non_2x/portrait-of-an-excited-beautiful-girl-wearing-dress-and-sunglasses-holding-shopping-bags-cheerful-young-woman-with-handbag-on-yellow-background-shopaholic-shopping-fashion-free-photo.jpg")]'>
             <div>
               <h1 className="text-4xl font-bold">Up To 50% Off</h1>
               <h3 className='text-2xl mt-2'>Winter Sale</h3>
               <p classNae='text-gray-400 mt-2'>Him she'd let them sixth saw light</p>
               <button className='mt-6 border-2 px-3 py-3 rounded-3xl font-bold w-40 bg-blue-600 text-white hover:bg-white hover:text-black'>Browse Now</button>
               </div>
            </div>
        </div>
    )

}

export default Cards;
