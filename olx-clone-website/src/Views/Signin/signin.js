import './sign.css'
import { useNavigate } from 'react-router-dom';

function Signin(){
    const navigate = useNavigate()
    return(
        <div>
             <fieldset>
        <div class="signin-div">
            <h1>Sign In Page</h1>
        </div>
        <h5>Email</h5>
        <input type="email" placeholder="Enter Your Email" class="signin-inp" required="required" id="logInEmail"/><br/><br/>
        <h5>Password</h5>
        <input type="password" placeholder="Enter Your Password" class="signin-inp" required="required"id="logInPassword"/><br/><br/>
        <button class="signin-btn" id="signIn-btn">Sign In</button><br/><br/>
        <p class="link">Don't have an account <span onClick={()=>navigate('/signup')}>Sign Up </span></p>
    </fieldset>
        </div>
    )
}

export default Signin;