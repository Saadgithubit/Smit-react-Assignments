import { useParams } from "react-router-dom"
import { getSingleData } from "../../Config/firebase";
import { useEffect,  useState } from "react";
import GoogleMap from "../Addpost/mapLocation";

function Details(){
    const { id } = useParams()
    const [product, setproduct] = useState('')
    const [imageIndex,setimageIndex] = useState(0)

    useEffect(()=>{
      singleData()
    },[])

    async function singleData(){
        const data = await getSingleData(id)
        setproduct(data)
        // console.log(data);
    }
    function increaseIndex(){
        setimageIndex(imageIndex + 1)
        if(imageIndex === product.images.length -1){
            setimageIndex(0)
        }
    }
    function decreaseIndex(){
        setimageIndex(imageIndex - 1)
        if(imageIndex === 0){
            setimageIndex(product.images.length -1)
        }

    }
    const {title,amount,images,description,city,userLocation,userId} = product
    if(product == ''){
        return<div>Loading .....</div>
    }
    return(
      
        <div>
          <div className="w-full my-4 flex justify-center flex-wrap space-y-4">
            <div className="lg:w-2/3 border-2 left">
                <div className="flex justify-between align-middle h-96 p-2">
            <i class="fa-solid fa-angle-left text-5xl mt-40 hover:text-blue-900 hover:cursor-pointer" onClick={increaseIndex}></i>
                <img className="w-3/4 p-4 h-full bg-black" src={images[imageIndex]} />
                <i class="fa-solid fa-angle-right text-5xl mt-40 hover:text-blue-900 hover:cursor-pointer" onClick={decreaseIndex}></i>
                </div>
                 <div className="border-y-2 p-2">
                <div className="flex justify-between">
                <h3 className="text-2xl font-bold">Rs {amount}</h3>
                <div className="icons">
                <i class="fa-regular fa-heart mx-4 text-2xl"></i>
                <i class="fa-solid fa-share-nodes text-2xl"></i>
                </div>
                </div> 
                <p className="my-3 text-xl w-auto">{title}</p>
            </div>
            <div className="py-4 px-2">
                <p className="text-xl mb-3 w-full">Product Discription:</p>
                <h3 className="leading-6 lg:text-lg">{description}</h3>
            </div>
            </div>
            <div className="border-2 w-1/2 lg:w-1/4 p-2 right mx-4">
                <h2 className="text-center font-bold text-xl">Saad Ahmed</h2>
                <h3 className="text-center my-2">See Profile <i class="fa-solid fa-greater-than mx-2"></i></h3>
                <button className="border-2 my-2 w-full p-3 bg-teal-950 text-white font-bold "><i class="fa-solid fa-phone mx-2"></i>Show Phone Number</button>
                <button className="border-2 border-black w-full p-3 my-2 text-xl"><i class="fa-regular fa-comments mx-3 "></i>Chat</button>
            <div className="border-2 p-2 w-full">
                <p className="w-full text-2xl mx-3">Location</p>
                <h3 className="w-full my-2 "><i class="fa-solid fa-location-dot mx-2"></i> {city}</h3>
            </div>
            <p className="w-full my-2">ID: <span>{userId}</span></p>
            <GoogleMap userLocation={userLocation}/>
            </div>
          </div>
            </div>
    )
}

export default Details