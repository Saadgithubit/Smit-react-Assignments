import './addpost.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPostToDb } from '../../Config/firebase'

 function Addpost(){
    const navigate = useNavigate()
    const [title,settitle] = useState()
    const [amount,setamount] = useState()
    const [description,setdescription] = useState()
    const [img ,setimg] = useState()

   
        
    
    const addPost = async() => {
       try{
           await addPostToDb({title, amount , description, img})
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
        <input onChange={(e)=>setimg(e.target.files[0])} type="file" name="upload"/>
    </div>
     <button onClick={addPost}>Post</button>
    </div>

        </div>
    )
}

export default Addpost