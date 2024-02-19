import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getUserAdds } from "../../Config/firebase";
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";


function MyAdds() {
    const userId = useSelector(state => state.userReducer.user.id)
    const [adds, setadds] = useState([])

    useEffect(() => {
        userAdds()

    }, [])

    async function userAdds() {
        const data = await getUserAdds(userId)
        console.log(data);
        setadds(data)
    }
    if (!adds) {
        return <div>Loading....</div>
    }

    return (

        <div>
            {adds.map((item, index) => {
                return <div key={index} className="w-full h-52 flex justify-evenly border-2 p-3">
                    <img className="w-32 h-32" src={item.images[0]}/>
                    <h3 className="text-xl lg:text-2xl font-bold">{item.title}</h3>
                    <h3 className="text-xl lg:text-2xl font-bold">{item.amount}</h3>
                </div>
            })}
        </div>
    )
}

export default MyAdds