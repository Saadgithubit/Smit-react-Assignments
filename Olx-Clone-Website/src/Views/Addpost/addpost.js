import './addpost.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPostToDb } from '../../Config/firebase'

 function Addpost(){
    const navigate = useNavigate()
    const [title,settitle] = useState()
    const [amount,setamount] = useState()
    const [description,setdescription] = useState()
    const [img1 ,setimg1] = useState()
    const [img2 ,setimg2] = useState()
    const [img3 ,setimg3] = useState()
    const [img4 ,setimg4] = useState()
    const images = [img1,img2,img3,img4]

    
    console.log('images' , images);
   
        
    
    const addPost = async() => {
        const add = {title, amount , description, images}
       try{
           await addPostToDb(add)
           navigate('/')
       } 
       catch(e){
        alert(e.message)
       }
     }
    return(
        <div>
            <center><h1>Post Your Add</h1></center>
             <div class="form" id="form">
       <div class="inner-form">
        <p>Add Title</p>
        <input onChange={(e)=>settitle(e.target.value)} type="text" name="" id="title"/>
        <p>Add Description</p>
        <input onChange={(e)=>setdescription(e.target.value)} type="text" name="" id="description"/>
        <p>Set A Price</p>
        <input onChange={(e)=>setamount(e.target.value)} type="text" name="" id="price"/>
        
    </div>
        <div class="img-div">
        <input onChange={(e)=>setimg1(e.target.files[0])} type="file" name="upload"/>
        <input onChange={(e)=>setimg2(e.target.files[0])} type="file" name="upload"/>
        <input onChange={(e)=>setimg3(e.target.files[0])} type="file" name="upload"/>
        <input onChange={(e)=>setimg4(e.target.files[0])} type="file" name="upload"/>
    </div>
     <button onClick={addPost} className='post-btn'>Post</button>
    </div>

        </div>
    )
}

export default Addpost