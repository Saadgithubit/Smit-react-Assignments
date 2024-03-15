import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    const totalCartProducts = useSelector(state => state.cartReducer.cart.length)
    console.log('cart --> ',totalCartProducts);
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
            <button onClick={() => navigate('/signin')} className='border-2 px-3 py-3 rounded-3xl font-bold w-40 hover:bg-blue-400 hover:text-white'>Log In</button>
          </div>  
        </nav>
    )
}

export default Navbar;
