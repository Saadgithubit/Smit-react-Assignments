import './signin.css'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { TextField } from '@mui/material';
import Swal from 'sweetalert2'

import { logIn } from '../../Config/firebase';
import olxImage from '../../Images/Capture 2.PNG'



function Signin() {
    const navigate = useNavigate()
    const [clickBtn, setclickBtn] = useState(false)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const signIn = async () => {
        setclickBtn(true)
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Email & Password!",
            });
            setclickBtn(false)
            return
        }
        try {
            await logIn({ email, password })
            navigate('/')
        }
        catch (e) {
            alert(e.message)
        }

    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                signIn();
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [signIn]);
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h5 className='text-md'>Email: tester@gmail.com</h5>
            <h5 className='text-md'>Password: 123456</h5>
            <fieldset>
                <div className="signin-div">
                    <img src={olxImage} />
                </div>
                <TextField
                    onChange={(e) => setemail(e.target.value)}
                    sx={{
                        width: '100%',
                        height: '40px',
                        background: 'transparent',
                        marginTop: '5px',

                    }}
                    id="full-width"
                    type='text'
                    label="Email"
                    variant="filled" />

                <TextField
                    onChange={(e) => setpassword(e.target.value)}
                    sx={{
                        width: '100%',
                        height: '40px',
                        background: 'transparent',
                        marginTop: '45px',
                        marginBottom: '40px',
                        bgcolor: '#f7f8f8'
                    }}
                    id="full-width"
                    label="Password"
                    type='password'
                    variant="filled" />
                {!clickBtn ? <button className="signin-btn" onClick={signIn}>Sign In</button> :
                    <button className="signin-btn"><img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' /></button>}
                <br /><br />
                <p className="link">Don't have an account ?<span onClick={() => navigate('/signup')}>Sign Up </span></p>
            </fieldset>
        </div>
    )
}

export default Signin; 