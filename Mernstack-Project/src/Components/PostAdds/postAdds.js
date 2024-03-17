import { useState } from "react"
import { useSelector } from "react-redux"
import { postAd } from "../../Config/firebase"

function Postadd() {
    const [title, settitle] = useState()
    const [amount, setamount] = useState()
    const [description, setdescription] = useState()
    const [image, setimage] = useState()
    const userToken = useSelector(state => state.userTokenReducer.tokens)

    const submit = async () => {

        await postAd(userToken,{ title, amount, description, image })

    }
    return (
        <div>
            <form className="w-2/3 border-2 flex flex-col h-96 m-auto p-2 my-6">
                <h1 className="text-xl my-3 font-bold">Post Add</h1>
                <input onChange={(e) => settitle(e.target.value)} type="text" className="border-2 h-12 px-2 my-3" placeholder="Title" />
                <input onChange={(e) => setamount(e.target.value)} type="text" className="border-2 h-12 px-2 my-3" placeholder="Price" />
                <input onChange={(e) => setdescription(e.target.value)} type="text" className="border-2 h-12 px-2 my-3" placeholder="Description" />
                <input onChange={(e) => setimage(e.target.files[0])} type="file" />
                <button type="button" onClick={submit} className="bg-sky-400 w-32 p-3 rounded-md my-3">Post</button>
            </form>
        </div>
    )
}

export default Postadd