import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../Config/firebase";

function Signup(){
    const navigate = useNavigate()
    const [fullName , setfullName] = useState()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [contact , setcontact] = useState()
    
    const signUp = async () => {
       try {
         await register({fullName,email,password,contact})
       }
        catch(e){
        alert(e.message)
       }
    }

    return(
        <div>
              <fieldset>
        <div class="signup-div">
            <h1>Sign Up Page</h1>
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
    <input type="password" placeholder="Enter Your Password" class="signup-inp" required="required" id="password"/><br/><br/>
    <h5>Confirm Password</h5>
    <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Confirm Your Password" class="signup-inp" required="required" id="con-password"/><br/><br/>

    <button class="signup-btn" onClick={signUp}>Sign Up</button>
    <p class="para">Already registered <span onClick={()=>navigate('/signin')}>Sign In</span></p>
</fieldset>
        </div>
    )
}

export default Signup;
