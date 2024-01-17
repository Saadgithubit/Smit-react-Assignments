import './sign.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { logIn } from '../../Config/firebase';

function Signin(){
    const navigate = useNavigate()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()

    const signIn = async() => {
        try{
            await logIn({email,password})
            navigate('/')
        }
        catch(e){
            alert(e.message)
        }

    }

    return(
        <div>
             <fieldset>
        <div class="signin-div">
            <h1>Sign In Page</h1>
        </div>
        <h5>Email</h5>
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Enter Your Email" class="signin-inp" required="required" id="logInEmail"/><br/><br/>
        <h5>Password</h5>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Your Password" class="signin-inp" required="required"id="logInPassword"/><br/><br/>
        <button class="signin-btn" onClick={signIn}>Sign In</button><br/><br/>
        <p class="link">Don't have an account <span onClick={()=>navigate('/signup')}>Sign Up </span></p>
    </fieldset>
        </div>
    )
}

export default Signin; 