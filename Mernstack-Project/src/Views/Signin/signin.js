import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Swal from 'sweetalert2'

import { settoken } from '../../Store/userToken';
import { setUser } from '../../Store/userSlice';

function Signin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [isButtonClicked, setisButtonClicked] = useState(false)

    const signIn = () => {
        setisButtonClicked(true)
        if (!email || !password) {
            alert('Please Fill all fields')
            setisButtonClicked(false)
            return
        }
        fetch('https://repulsive-turtleneck-shirt-ant.cyclic.app/users/login', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password, })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message !== 'User Login Successfull') {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: data.message,
                      });
                    setisButtonClicked(false)
                    return
                }
                Swal.fire({
                    title: "Good job!",
                    text: data.message,
                    icon: "success"
                  });
                dispatch(settoken(data.usertoken))
                dispatch(setUser(data.userdata))
                navigate('/')

            })
            .catch(error => {
                console.error(error)
                setisButtonClicked(false)
            })
    }
    return (
        <div
            style={
                {
                    backgroundImage: "url('https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=740&t=st=1710529026~exp=1710529626~hmac=80e4f6682b9ccd083cb305295c8f78fb26d0a1d3da9408d9d2f65ab4f2c61352')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="flex flex-col justify-center items-center p-3 h-screen">

            <div className="sm:w-1/2 lg:w-1/3 h-96 m-auto bg-white rounded-xl">
                <form className="bg-transparent p-5 h-auto">
                    <h1 className='text-2xl text-blue-400 font-bold'>Sign In Page</h1>
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            background: 'transparent',
                            marginTop: '15px',

                        }}
                        onChange={(e) => setemail(e.target.value)}
                        type='email'
                        label="Email"
                        variant="filled" />
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            marginTop: '30px',

                        }}
                        onChange={(e) => setpassword(e.target.value)}
                        type='password'
                        label="Password"
                        variant="filled" />
                    {!isButtonClicked ?
                        <button
                            type='button'
                            onClick={signIn}
                            style={
                                { background: "linear-gradient(to right, #9FCAED , #DAE1D9,#FFAE92)" }}
                            className='my-12 w-full border-2 p-3 rounded-xl text-xl'>
                            Log In
                        </button> :
                        <button
                            type='button'
                            onClick={signIn}
                            style={
                                { background: "linear-gradient(to right, #9FCAED , #DAE1D9,#FFAE92)" }}
                            className='my-12 w-full border-2 p-3 rounded-xl text-xl'>
                            <img className='w-7 m-auto' src='https://i.gifer.com/ZZ5H.gif' />
                        </button>}

                    <p className='w-full'>Don't Have Account?
                        <span onClick={() => navigate('/signup')} className='cursor-pointer text-blue-400 font-bold mx-3'>Sign Up</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signin