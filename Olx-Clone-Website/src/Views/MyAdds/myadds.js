import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

import { getUserAdds, deleteSingleAdd } from "../../Config/firebase";


function MyAdds() {
    const userId = useSelector(state => state.userReducer.user.id)
    const [adds, setadds] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        userAdds()

    }, [])

    async function deleteAdd(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this add?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteSingleAdd(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            }
        });
    }


    async function userAdds() {
        const data = await getUserAdds(userId)
        setadds(data)
    }
    if (!adds) {
        return <div>Loading....</div>
    }

    return (

        <div>
            <h1 className="text-2xl font-bold text-center my-2">Your Posted Adds</h1>
            {adds.map((item, index) => {
                const { id } = item
                return <div key={index} className="w-full my-3 flex justify-center flex-col sm:flex-row sm:justify-between border-2 p-3">
                    <img className="w-full h-44 p-2 sm:w-32 sm:h-32" src={item.images[0]} />
                    <div className="flex flex-col pace-y-2 w-auto px-3">
                        <h3 className="text-xl lg:text-2xl m-auto font-bold text-sky-500">{item.title}</h3>
                        <h3 className="text-xl lg:text-2xl m-auto font-bold text-gray-600">Rs {item.amount}</h3>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto">
                        <button onClick={() => navigate(`/editadd/${id}`)} className="w-full sm:w-36 h-12 my-2 m-auto font-bold bg-slate-200 hover:bg-gray-700 hover:text-white">Edit</button>
                        <button onClick={() => deleteAdd(id)} className="w-full sm:w-36 h-12 my-2 m-auto font-bold bg-slate-200 hover:bg-gray-700 hover:text-white">Delete</button>
                    </div>
                </div>
            })}
           
        </div>
    )
}

export default MyAdds