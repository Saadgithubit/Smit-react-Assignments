import './details.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer';
import { setcart } from '../../Store/cartSlice';


function Details() {
    const dispatch = useDispatch()
    const { adId } = useParams()
    const [imageIndex, setimageIndex] = useState(0)
    const [product, setproduct] = useState('')

    useEffect(() => {
        getData()
    }, [])

    function getData() {

        fetch('https://busy-teal-firefly-gear.cyclic.app/ads/singleAd/' + adId)
            .then(res => res.json())
            .then(res => setproduct(res.data))

    }

    function increaseIndex() {
        setimageIndex(imageIndex + 1)
        if (imageIndex === product.images.length - 1) {
            setimageIndex(0)
        }
    }
    function decreaseIndex() {
        setimageIndex(imageIndex - 1)
        if (imageIndex === 0) {
            setimageIndex(product.images.length - 1)
        }

    }

    function addToCart(){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Item Added To Cart",
            showConfirmButton: false,
            timer: 1500
          });
        dispatch(setcart(product))
    }

    if (product === '') {
        return <div>Loading ....</div>
    }

    return (
        <div>
            <Navbar />
            <div className='md:flex lg:flex sm:col-auto justify-around my-8 w-full'>
                <div className='border-2 lg:w-2/4 md:w-2/4 p-3 flex'>
                    <img className='w-screen p-7' src={product.images} />
                </div>
                <div className='border-2 p-5 md:w-1/3 lg:w-1/3 text-left'>
                    <h3 className='text-red-700 font-serif'>In demand. 69 people bought this in the last 24 hours.</h3>
                    <h1 className='mt-4 text-3xl font-bold text-blue-800 '>{product.title}</h1>
                    <h2 className='font-bold text-3xl text-green-700 mt-4'>USD {product.amount}</h2>
                    <h3 className='text-green-700 font-sans text-xl'>60% off sale ends 13 January</h3>
                    <p className='mt-3 text-gray-700 font-light text-sm'>Local taxes included (where applicable)</p>
                    <p className='mt-3 text-lg leading-5'>{product.description}</p>
                    <h3 className='mt-6 mx-4 text-sm'>Rating <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </h3>
                    <h5 className='mt-2 font-light'><i class="fa-solid fa-check mr-2"></i>Return & Change Excepted</h5>
                    <button onClick={addToCart} className='px-12 py-4 w-full text-xl my-4 bg-blue-900 text-white rounded cursor-pointer'>Add To Cart</button>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Details;
