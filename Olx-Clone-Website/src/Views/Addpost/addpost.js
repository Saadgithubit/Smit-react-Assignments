import './addpost.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPostToDb } from '../../Config/firebase'

 function Addpost(){
    const navigate = useNavigate()
    const [title,settitle] = useState()
    const [amount,setamount] = useState()
    const [description,setdescription] = useState()
    const [img,setimg] = useState()
    const [img1 ,setimg1] = useState()
    const [img2 ,setimg2] = useState()
    const [img3 ,setimg3] = useState()
    const [img4 ,setimg4] = useState()
    const images = [img1,img2,img3,img4]

    
    console.log('images' , images);
   
        
    
    const addPost = async() => {
        const add = {title, amount , description, img}
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
        <p>Add Location</p>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus' width='80%' height='50px'></iframe>
        
    </div>
        <div class="img-div">
        <input onChange={(e)=>setimg(e.target.files[0])} type="file" name="upload"/>
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