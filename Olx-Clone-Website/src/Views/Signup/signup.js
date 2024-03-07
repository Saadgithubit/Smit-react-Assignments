import './signup.css'
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Swal from 'sweetalert2'
import { TextField } from '@mui/material';

import { register } from "../../Config/firebase";
import olxImage from '../../Images/Capture 2.PNG'

function Signup() {
  const navigate = useNavigate()
  const [clickBtn, setclickBtn] = useState(false)
  const [fullName, setfullName] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [confimPassword, setconfirmPassword] = useState()
  const [contact, setcontact] = useState()

  const signUp = async () => {
    setclickBtn(true)
    if (!fullName || !email || !password || !confimPassword || !contact) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All Fields!",
      });
      setclickBtn(false)

      return
    }
    if (password !== confimPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Both Passwords Are Not Same!",
      });
      setclickBtn(false)
      return
    }
    if (password.length < 6 || confimPassword.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Atleast 6 digits password!",
      });
      setclickBtn(false)
      return
    }
    try {
      await register({ fullName, email, password, contact })
      navigate('/signin')
    }
    catch (e) {
      alert(e.message)
      setclickBtn(false)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            signUp();
        }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
        window.removeEventListener('keypress', handleKeyPress);
    };
}, [signUp]);

  return (
    <div className='flex justify-center'>
      <fieldset className='fieldset'>
        <div class="signup-div">
          <img src={olxImage} />
        </div>
        <TextField
          onChange={(e) => setfullName(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '10px',
            marginBottom: '40px',

          }}
          id="full-width"
          type='text'
          label="Name"
          variant="filled" />
          <TextField
          onChange={(e) => setfullName(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '5px',
            marginBottom: '40px',

          }}
          id="full-width"
          type='text'
          label="FatherName"
          variant="filled" />
          <TextField
          onChange={(e) => setemail(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '5px',
            marginBottom: '40px',

          }}
          id="full-width"
          type='email'
          label="Email"
          variant="filled" />
          <TextField
          onChange={(e) => setcontact(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '5px',
            marginBottom: '40px',
          }}
          id="full-width"
          type='text'
          label="Contact"
          variant="filled" />
          <TextField
          onChange={(e) => setpassword(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '5px',
            marginBottom: '40px',
          }}
          id="full-width"
          type='password'
          label="Password"
          variant="filled" />
          <TextField
          onChange={(e) => setconfirmPassword(e.target.value)}
          sx={{
            width: '100%',
            height: '40px',
            background: 'transparent',
            marginTop: '5px',
            marginBottom: '40px',
          }}
          id="full-width"
          type='password'
          label="Confirm Password"
          variant="filled" />
        {!clickBtn ? <button class="signup-btn" onClick={signUp}>Sign Up</button> :
          <button className="signup-btn"><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' /></button>}

        <p class="para">Already registered <span onClick={() => navigate('/signin')}>Sign In</span></p>
      </fieldset>
    </div>
  )
}

export default Signup;
