import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './addpost.css'
import { addPostToDb } from '../../Config/firebase'
import GoogleMap from './mapLocation'
import { Rectangle } from 'react-leaflet'


function Addpost() {
    const userId = useSelector(state => state.userReducer.user.id)
    const navigate = useNavigate()
    const [locator, setlocator] = useState(false)
    const [clickBtn,setclickBtn] = useState(false)
    const [userLocationName, setuserLocationName] = useState()
    const [userLocation, setuserLocation] = useState({})
    const [title, settitle] = useState()
    const [amount, setamount] = useState()
    const [description, setdescription] = useState()
    const [img1, setimg1] = useState()
    const [img2, setimg2] = useState()
    const [img3, setimg3] = useState()
    const allImages = [img1, img2, img3]

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            const { latitude, longitude } = location.coords
            setuserLocation({ latitude: latitude, longitude: longitude,userLocationName: userLocationName })
        })

    }, [locator])




    const addPost = async () => {
        setclickBtn(true)
        const add = {title,amount,description,allImages,userLocation,userId,userLocationName}
        try {
            if(!title || !amount || !description || !userLocationName){
                alert('Please Fill All Fields')
                setclickBtn(false)
                return
            }
            if(!img1 || !img2 || !img3){
                alert('Please Add 3 Images')
                setclickBtn(false)
                return
            }
            await addPostToDb(add)
            navigate('/')
        }
        catch (e) {
            alert(e.message)
        }
    }
    return (
        <div className='post-div'>
            <center><h1>Post Your Add</h1></center>
            <div class="form" id="form">
                <div class="inner-form">
                    <p>Add Title</p>
                    <input onChange={(e) => settitle(e.target.value)} placeholder='Enter Title' type="text" name="" id="title" />
                    <p>Add Description</p>
                    <input onChange={(e) => setdescription(e.target.value)} placeholder='Enter Description' type="text" name="" id="description" />
                    <p>Set A Price</p>
                    <input onChange={(e) => setamount(e.target.value)} placeholder='Enter Price' type="text" name="" id="price" />
                    <p>Add Location</p>
                    <input onChange={(e) => setuserLocationName(e.target.value)} type='text' placeholder='Enter Your Location '/>
                    <button className='block border-2 p-2 my-3 border-r-2' onClick={() => setlocator(true)}>Add Your Current Location</button>
                    {locator && <GoogleMap userLocation={userLocation} />}

                </div>
                <div class="img-div">
                    <input onChange={(e) => setimg1(e.target.files[0])} type="file" name="upload" />
                    <input onChange={(e) => setimg2(e.target.files[0])} type="file" name="upload" />
                    <input onChange={(e) => setimg3(e.target.files[0])} type="file" name="upload" />
                </div>
                {!clickBtn ? <button onClick={addPost} className='post-btn'>Post</button>:
                <button className='post-btn'><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif'/></button>}
            </div>

        </div>
    )
}

export default Addpost