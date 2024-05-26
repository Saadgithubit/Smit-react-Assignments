import './navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { removetoken } from "../../Store/userToken";
import { removeUser } from "../../Store/userSlice";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const totalCartProducts = useSelector(state => state.cartReducer.cart.length)
    const user = useSelector(state => state.userReducer.user)
    const userToken = useSelector(state => state.userTokenReducer.tokens)
    const [isoptionclicked, setisoptionclicked] = useState(false)
    const [isButtonclicked, setisButtonclicked] = useState(false)
    // console.log('token', userToken);
    // console.log('user', user);

    const signOut = () => {
        fetch('https://node-js-production-7fec.up.railway.app/users/logout', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Barier ${userToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(data.message);
                if (data.message === 'Logged out successfully!') {
                    dispatch(removetoken())
                    dispatch(removeUser())
                }
                console.log(data);
            })
    }

    const signInFirst = () => {
        alert('Sign In First')
        navigate('/signin')
    }

    return (
        <div>
        <nav className="bg-white border-2 px-3 py-6 flex justify-around navbar">
            <div className="flex space-x-2 text-3xl py-2">
                <i onClick={() => navigate('/')} class="cursor-pointer fa-regular fa-chart-bar m-1 text-blue-500"></i>
                <h4 onClick={() => navigate('/')} className="font-bold cursor-pointer">Sapphire</h4>
            </div>
            <div className='flex'>
                <ul className="flex py-3">
                    <li onClick={() => navigate('/')} className="mx-6 hover:text-blue-600 hover:cursor-pointer">Home</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Shop</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Blogs</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Pages</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Contact</li>
                    <li className='flex space-x-7 mx-20'>
                        <i class="fa-solid fa-magnifying-glass hover:text-blue-600 hover:cursor-pointer"></i>
                        <span className="flex space-x-2">
                            <i onClick={() => {user? navigate('/cart'): signInFirst()}} class="fa-solid fa-cart-shopping hover:text-blue-600 hover:cursor-pointer"></i>
                            <p>{totalCartProducts}</p>
                        </span>
                    </li>
                </ul>
                {!user ? <button onClick={() => navigate('/signin')} className='border-2 px-3 py-3 rounded-3xl font-bold w-40 hover:bg-blue-400 hover:text-white'>Log In</button>
                    : <div>
                        <button onClick={() => setisoptionclicked(!isoptionclicked)} className="border-2 bg-blue-500 text-white w-36 p-2 rounded-lg">{user.fullname} <i class="mx-1 fa-solid fa-caret-down"></i></button>
                        {isoptionclicked && <div className="flex flex-col border-2 rounded-md w-36 absolute top-23 bg-gray-300">
                            <button onClick={signOut} className='px-3 py-3 font-bold hover:bg-blue-400 hover:text-white'>Log Out</button>
                            {user.email === 'saad@gmail.com' &&<div className='w-full'>
                                <button onClick={() => navigate('/postadd')} className='w-full px-3 py-3 font-bold hover:bg-blue-400 hover:text-white'>Add Post</button>
                                <button onClick={() => navigate('/myadds')} className='w-full px-3 py-3 font-bold hover:bg-blue-400 hover:text-white'>My Adds</button>
                                </div>}
                        </div>}


                    </div>
                }
            </div>
            <div>

            </div>
        </nav>
        <nav className="hamb flex justify-between mr-3 my-2 border-t-2 border-b-2 w-full p-2">
            <div className='flex justify-center items-center mx-4 text-xl font-bold text-gray-600'>
                <div className="flex space-x-2 text-3xl py-2">
                <i class="fa-regular fa-chart-bar m-1 text-blue-500"></i>
                <h4 className="font-bold">Sapphire</h4>
            </div>
            </div>
            {user && <span className="flex items-center space-x-2">
                            <i onClick={() => navigate('/cart')} class="fa-solid fa-cart-shopping hover:text-blue-600 hover:cursor-pointer"></i>
                            <p>{totalCartProducts}</p>
                        </span>}
                <div>
                {!isButtonclicked?<i onClick={() => setisButtonclicked(!isButtonclicked)} class="fa-solid fa-bars text-2xl border-2 w-16 p-2 rounded-lg"></i>
                :<i onClick={() => setisButtonclicked(!isButtonclicked)} class="fa-solid fa-xmark text-3xl border-2 w-16 p-2 rounded-lg"></i>}
                </div>
                {isButtonclicked && <div className='absolute top-20 right-3 bg-white'>
                <ul className="flex flex-col py-3 border-2 w-72">
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">
                {user? <p className='border-b-2 p-2 font-bold text-xl w-full'>{user.fullname}</p>: <p> No User</p>}
                        </li>
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Home</li>
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Shop</li>
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Blogs</li>
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Pages</li>
                    <li className="h-12 flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Contact</li>
                    {!user?<li onClick={() => navigate('/signin')} className="h-12 font-bold flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Log In</li>
                    :<div>
                    <li onClick={signOut} className="h-12 font-bold flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Log Out</li>
                    {user.email === 'saad@gmail.com' &&<div>
                    <li onClick={() => navigate('/postadd')} className="h-12 font-bold flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">Add Post</li>
                    <li onClick={() => navigate('/myadds')} className="h-12 font-bold flex justify-center items-center hover:text-blue-600 hover:bg-gray-400 hover:cursor-pointer">My Adds</li>
                    </div>}
                    </div>}
                    </ul>
                </div>}
            </nav>
        </div>
    )
}

export default Navbar;
