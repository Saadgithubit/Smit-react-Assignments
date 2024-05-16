import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    const [fullName, setfullName] = useState()
    const [contact, setcontact] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confPassword, setconfPassword] = useState()


    const signUp = () => {
        const foamData = { fullname: fullName, email: email, password: password }
        if (!fullName || !contact || !email || !password || !password) {
            alert('Please Fill all fields')
            return
        }
        if (password.length < 6) {
            alert('Password is too short put atleast 6 characters')
            return
        }
        if (password !== confPassword) {
            alert('Both Password Are Not Same')
            return
        }
        fetch('https://busy-teal-firefly-gear.cyclic.app/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(foamData)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                navigate('/signin')

            })
            .catch(error => console.error(error))

    }
    return (
        <div
            style={
                {
                    backgroundImage: "url('https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg?w=740&t=st=1710529026~exp=1710529626~hmac=80e4f6682b9ccd083cb305295c8f78fb26d0a1d3da9408d9d2f65ab4f2c61352')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="flex flex-col justify-center items-center p-3 h-screen">

            <div className="sm:w-1/2 lg:w-1/3 h-auto m-auto mt-6 bg-white rounded-xl">
                <form className="bg-transparent p-8 h-auto">
                    <h1 className='text-2xl text-blue-400 font-bold'>Sign Up Page</h1>
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            background: 'transparent',
                            marginTop: '15px',

                        }}
                        onChange={(e) => setfullName(e.target.value)}
                        type='text'
                        label="Full Name"
                        variant="filled" />
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            background: 'transparent',
                            marginTop: '30px',

                        }}
                        onChange={(e) => setcontact(e.target.value)}
                        type='text'
                        label="Contact"
                        variant="filled" />
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            background: 'transparent',
                            marginTop: '30px',

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
                    <TextField
                        sx={{
                            width: '100%',
                            height: '40px',
                            marginTop: '30px',

                        }}
                        onChange={(e) => setconfPassword(e.target.value)}
                        type='password'
                        label="Confirm Password"
                        variant="filled" />
                    <button
                        type='button'
                        onClick={signUp}
                        style={
                            { background: "linear-gradient(to right, #9FCAED , #DAE1D9,#FFAE92)" }}
                        className='my-12 w-full border-2 p-3 rounded-xl text-xl'>
                        Sign Up
                    </button>
                    <p className='w-full'>Already Have Account?
                        <span onClick={() => navigate('/signin')} className='cursor-pointer text-blue-400 font-bold mx-3'>Sign In</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signup