import { useParams } from "react-router-dom"
import { getSingleData } from "../../Config/firebase";
import { useEffect,  useState } from "react";

function Details(){
    const { id } = useParams()
    const [product, setproduct] = useState({})

    useEffect(()=>{
      singleData()
    },[])

    async function singleData(){
        const data = await getSingleData(id)
        setproduct(data)
        console.log(product);
    }
    return(
        <div>Details Page</div>
    )
}

export default Details