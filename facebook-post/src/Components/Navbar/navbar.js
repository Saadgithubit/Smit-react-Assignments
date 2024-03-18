import './navbar.css'
function Navbar(){
 
    return (
        <div className='navbar'>
            <div className='left'>
            <img width='60px' src='https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png'/>
            <span className='input'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type='text' placeholder='Search Facebook'/></span>
            </div>
            <div className='center'>

            <span className='center-icon'>
                <i class="fa-solid fa-house"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-solid fa-store"></i>
                <i class="fa-solid fa-user-group"></i>
                <i class="fa-solid fa-gamepad"></i>
                </span>
                </div>
            <div className='right'>

            <span className='right-icon'>
            <i class="fa-solid fa-bars"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-solid fa-bell"></i>
            </span>
            </div>
        
    </div>
    );
}
export default Navbar