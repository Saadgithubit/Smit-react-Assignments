import './signup.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'

import { register } from "../../Config/firebase";
import olxImage from '../../Images/Capture 2.PNG'

function Signup(){
    const navigate = useNavigate()
    const [clickBtn,setclickBtn] = useState(false)
    const [fullName , setfullName] = useState()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [confimPassword, setconfirmPassword] = useState()
    const [contact , setcontact] = useState()
    
    const signUp = async () => {
        if(!fullName || !email || !password || !confimPassword || !contact){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Fill All Fields!",
              });
            return
        }
        if(password !== confimPassword){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Both Passwords Are Not Same!",
              });
            return
        }
        if(password.length < 6  || confimPassword.length < 6){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Atleast 6 digits password!",
              });
            return
        }
       try {
         await register({fullName,email,password,contact})
       }
        catch(e){
        alert(e.message)
       }
    }

    return(
        <div className='flex justify-center'>
              <fieldset className='fieldset'>
        <div class="signup-div">
        <img src={olxImage}/>
        </div>
    <h5>Full Name</h5>
    <input type="text" onChange={(e)=>{setfullName(e.target.value)}} placeholder="Enter Your Full Name" class="signup-inp" required="required" id="name"/><br/><br/>
    <h5>Father Name</h5>
    <input type="text" placeholder="Enter Your Father Name" class="signup-inp" required="required" id="fathername"/><br/><br/>
    <h5>Email</h5>
    <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter Your Email" class="signup-inp" required="required" id="email"/><br/><br/>
    <h5>Contact Number</h5>
    <input type="number" onChange={(e)=>{setcontact(e.target.value)}} placeholder="Enter Contact Number"  class="signup-inp" required="required" id="contact"/>
    <h5>Password</h5>
    <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter Your Password" class="signup-inp" required="required" id="password"/><br/><br/>
    <h5>Confirm Password</h5>
    <input type="password" onChange={(e)=>{setconfirmPassword(e.target.value)}} placeholder="Confirm Your Password" class="signup-inp" required="required" id="con-password"/><br/><br/>

    {!clickBtn? <button class="signup-btn" onClick={signUp}>Sign Up</button>:
    <button className="signup-btn"><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif'/></button>}
    
    <p class="para">Already registered <span onClick={()=>navigate('/signin')}>Sign In</span></p>
</fieldset>
        </div>
    )
}

export default Signup;
