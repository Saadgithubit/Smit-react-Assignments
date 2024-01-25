import { useParams } from "react-router-dom"
import { getSingleData } from "../../Config/firebase";
import { useEffect,  useState } from "react";
import Footer from "../../Components/Footer/footer";

function Details(){
    const { id } = useParams()
    const [product, setproduct] = useState('')

    useEffect(()=>{
      singleData()
    },[])

    async function singleData(){
        const data = await getSingleData(id)
        setproduct(data)
        console.log('product --> ',product);
    }
    const {title,amount,img,description} = product
    if(product == ''){
        return<div>Loading .....</div>
    }
    return(
      
        <div>
          <div className="w-full my-4 flex">
            <div className="w-2/3 border-2 left">
                <img className="w-full h-96 p-8 bg-black" src={img} />
            <div className="border-2 p-2">
                <div className="flex justify-between">
                <h3 className="text-2xl font-bold">Rs {amount}</h3>
                <div className="icons">
                <i class="fa-regular fa-heart mx-4 text-2xl"></i>
                <i class="fa-solid fa-share-nodes text-2xl"></i>
                </div>
                </div> 
                <p className="my-3 text-xl w-full">{title}</p>
            </div>
            <div className="py-4 px-2 border-2">
                <h3 className="w-2/3 leading-6">{description}</h3>
            </div>
            </div>
            <div className="border-2 w-1/4 p-2 right mx-4">
                <h2 className="text-center font-bold text-xl">Saad Ahmed</h2>
                <h3 className="text-center my-2">See Profile <i class="fa-solid fa-greater-than mx-2"></i></h3>
                <button className="border-2 my-2 w-full p-3 bg-teal-950 text-white font-bold "><i class="fa-solid fa-phone mx-2"></i>Show Phone Number</button>
                <button className="border-2 border-black w-full p-3 my-2 text-xl"><i class="fa-regular fa-comments mx-3 "></i>Chat</button>
            </div>
          </div>
          <Footer/>
            </div>
    )
}

export default Details