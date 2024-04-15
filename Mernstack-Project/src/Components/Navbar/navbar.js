import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removetoken } from "../../Store/userToken";
import { removeUser } from "../../Store/userSlice";

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const totalCartProducts = useSelector(state => state.cartReducer.cart.length)
    const user = useSelector(state => state.userReducer.user)
    const userToken = useSelector(state => state.userTokenReducer.tokens)
    console.log('token', userToken);
    console.log('user', user);

    const signOut = () => {
        fetch('https://repulsive-turtleneck-shirt-ant.cyclic.app/users/logout', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Barier ${userToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
                if (data.message === 'Logged out successfully!') {
                    dispatch(removetoken())
                    dispatch(removeUser())
                }
                console.log(data);
            })
    }

    return (
        <nav className="bg-white border-2 px-3 py-6 flex justify-around">
            <div className="flex space-x-2 text-3xl py-2">
                <i class="fa-regular fa-chart-bar m-1 text-blue-500"></i>
                <h4 className="font-bold">Sapphire</h4>
            </div>
            <div className='flex space-x-8'>
                <ul className="flex py-3">
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Home</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Shop</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Blogs</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Pages</li>
                    <li className="mx-6 hover:text-blue-600 hover:cursor-pointer">Contact</li>
                    <li className='flex space-x-7 mx-20'>
                        <i class="fa-solid fa-magnifying-glass hover:text-blue-600 hover:cursor-pointer"></i>
                        <span className="flex space-x-2">
                            <i class="fa-solid fa-cart-shopping hover:text-blue-600 hover:cursor-pointer"></i>
                            <p>{totalCartProducts}</p>
                        </span>
                    </li>
                </ul>
                {!user ? <button onClick={() => navigate('/signin')} className='border-2 px-3 py-3 rounded-3xl font-bold w-40 hover:bg-blue-400 hover:text-white'>Log In</button>
                    : <div>
                        <p>{user.fullname}</p>
                        <button onClick={signOut} className='border-2 px-3 py-3 rounded-3xl font-bold w-40 hover:bg-blue-400 hover:text-white'>Log Out</button>
                        <button onClick={() => navigate('/postadd')} className='border-2 px-3 py-3 rounded-3xl font-bold w-40 hover:bg-blue-400 hover:text-white'>Add Post</button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;
