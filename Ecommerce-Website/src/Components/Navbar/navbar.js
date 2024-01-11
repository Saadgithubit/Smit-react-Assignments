function Navbar(){
    return (
        <nav className="bg-white border-2 px-3 py-6 flex justify-around">
            <div className="flex space-x-3 text-3xl py-2">
            <i class="fa-regular fa-chart-bar"></i>
            <h4>Sapphire</h4>
            </div>
            <div className='flex space-x-5'>
            <ul className="flex py-3">
                <li className="mx-2 bg-slate-200 h-8 hover:bg-sky-700">Home</li>
                <li className="mx-2">Shop</li>
                <li className="mx-2">Blogs</li>
                <li className="mx-2">Pages</li>
                <li className="mx-2">Contact</li>
                <li className='space-x-3 mx-2'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
            <button className='border-2 px-3 py-3 rounded-3xl font-bold w-32'>Buy Now</button>
          </div>  
        </nav>
    )
}

export default Navbar;
