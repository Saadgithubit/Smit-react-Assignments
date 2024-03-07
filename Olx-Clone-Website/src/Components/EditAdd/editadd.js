import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import { getSingleData, editSingleAdd } from "../../Config/firebase"
function EditAdd() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [editData, seteditData] = useState()
    const [clickBtn,setclickBtn] = useState(false)
    const [title, settitle] = useState('')
    const [amount, setamount] = useState('')
    const [description, setdescription] = useState('')

    useEffect(() => {
        editadd()
    }, [])

    const editadd = async () => {
        const edit = await getSingleData(id)
        console.log(edit);
        seteditData(edit)
    }

    const updateAdd = async () => {
        setclickBtn(true)
        try {
        if(title == '' || amount == '' || description == ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Fill all Fields",
              });
              setclickBtn(false)
              return
        }
        
            await editSingleAdd({ title, amount, description }, id)
            Swal.fire({
                title: "Good job!",
                text: "Data Updated Successfully",
                icon: "success"
            });
            navigate('/myadds')
        }
        catch (e) {
            alert(e.message)
        }
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                updateAdd();
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [updateAdd]);
    if (!editData) {
        return <div>Loading</div>
    }
    return (
        <div className="m-6 p-2">
            <div className="flex flex-col w-full md:w-1/2 m-auto p-3 space-y-2 bg-slate-200 border-2">
                <h1 className="text-center text-2xl m-auto font-bold">Edit Add</h1>
                <p className="w-auto h-auto">Title</p>
                <input value={editData.title} disabled className="h-10" type="text" />
                <p>New Title</p>
                <input onChange={(e) => settitle(e.target.value)} className="px-2 border-2 h-10" type="text" />
                <p className="w-auto h-auto">Price</p>
                <input value={editData.amount} disabled className="h-10" type="text" />
                <p className="w-auto h-auto">New Price</p>
                <input onChange={(e) => setamount(e.target.value)} className="px-2 border-2 h-10" type="text" />
                <p className="w-auto h-auto">Description</p>
                <textarea value={editData.description} disabled className="h-20" type="text" />
                <p className="w-auto h-auto">New Description</p>
                <textarea onChange={(e) => setdescription(e.target.value)} className="p-2 border-2 h-20" type="text" />
                {!clickBtn?<button onClick={updateAdd} className="w-full mt-4 h-10 bg-sky-400 text-white font-bold">Update</button>
                :<button className='w-full h-10 bg-sky-400 text-white font-bold'><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif'/></button>}
           
            </div>
        </div>
    )
}

export default EditAdd