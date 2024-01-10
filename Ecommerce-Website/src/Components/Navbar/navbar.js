function Navbar(){
    return (
        <nav className="bg-white border-2 px-3 py-6 flex justify-around">
            <div className="flex space-x-3 text-3xl border-2">
            <i class="fa-solid fa-cart-shopping"></i>
            <h4 className="my-auto">Sapphire</h4>
            </div>
            <ul className="flex">
                <li className="mx-2">Home</li>
                <li className="mx-2">Shop</li>
                <li className="mx-2">Blogs</li>
                <li className="mx-2">Pages</li>
                <li className="mx-2">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;