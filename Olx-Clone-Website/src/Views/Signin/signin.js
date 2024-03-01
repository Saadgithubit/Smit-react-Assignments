import './signin.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Swal from 'sweetalert2'

import { logIn } from '../../Config/firebase';
import olxImage from '../../Images/Capture 2.PNG'

function Signin(){
    const navigate = useNavigate()
    const [clickBtn,setclickBtn] = useState(false)
    const [email , setemail] = useState()
    const [password , setpassword] = useState()

    const signIn = async() => {
        setclickBtn(true)
        if(!email || !password){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Email & Password!",
              });
            setclickBtn(false)
            return
        }
        try{
            await logIn({email,password})
            navigate('/')
        }
        catch(e){
            alert(e.message)
        }

    }

    return(
        <div className='w-screen h-screen flex justify-center items-center'>
             <fieldset>
        <div className="signin-div">
            <img src={olxImage}/>
        </div>
        <h5>Email</h5>
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email" className="signin-inp" required="required" id="logInEmail"/><br/><br/>
        <h5>Password</h5>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password" className="signin-inp" required="required"id="logInPassword"/><br/><br/>
        {!clickBtn ? <button className="signin-btn" onClick={signIn}>Sign In</button>:
        <button className="signin-btn"><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif'/></button>}
        <br/><br/>
        <p className="link">Don't have an account <span onClick={()=>navigate('/signup')}>Sign Up </span></p>
    </fieldset>
        </div>
    )
}

export default Signin; 