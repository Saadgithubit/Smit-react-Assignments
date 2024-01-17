import './header.css'
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()

    return (
        <div>
             <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header off">
          <h5 class="offcanvas-title p-3" id="offcanvasNavbarLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <form class="d-flex flex-column" role="search">
            <span class="nav-login-btn"><a href="./src/signin.html">log In</a></span>
            <span class="nav-sell-btn"><a href="./src/AddsPosts/post.html">Start Selling</a></span>
            <span class="nav-sell-btn"><a href="./src/useradds/useradd.html">My Adds</a></span>
            <span class="nav-sell-btn"><a class="dropdown-item" id="signout" href="">Sign Out</a></span>
          </form>
        </div>
      </div>
    </div>
  </nav>
             <div class="header-top">

<div class="header-img">
  <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png" width="30px" height="20px" alt=""/>
</div>
<div class="header-a">
  <a href=""><i class="fa-solid fa-car"></i> MOTORS</a>
</div>
<div class="header-a2">
  <a href=""><i class="fa-regular fa-building"></i> PROPERTY</a>
</div>
</div>
            <div class="header">
                <div class="olx-img">
                    <img src=".././Images/Capture 2.PNG" class="hidden" alt=""/>
                </div>

                <div class="sel-div">
                    <select name="" id="inp">
                        <option value="">Pakistan</option>
                    </select>
                    <div class="icon">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                            class="fa-magnifying-glass" alt=""/>
                    </div>
                </div>
                <div class="parent-inp">
                    <input type="text" placeholder="Find car,Mobile Phones & more" name="abc" id="input"/>
                        <div class="icon-2">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                </div>
                <div class="btn-div">
                    <button id="logIn-button" onClick={()=>navigate('/signin')}>Log-In</button>
                    <div class="dropdown" id="userName">
                        <button class="dropdown-toggle user" id="userId" data-bs-toggle="dropdown" aria-expanded="false">
                          check
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./src/useradds/useradd.html">My Adds</a></li>
                            <li><a class="dropdown-item" id="signout" href="">Sign Out</a></li>
                        </ul>
                    </div>
                    <button class="sell" onClick={()=>navigate('/addpost')}> <b> +Sell </b></button>
                </div>
            </div>

            <div>
            </div>

            <div class="container-fluid nav-bar">
                <ul class="ul">
                    <li class="Categories"> <select class="select">
                        <option class="option">All Categories</option>
                    </select></li>
                    <li>Mobile Phones</li>
                    <li>Cars</li>
                    <li>Motor Cycles</li>
                    <li>Houses</li>
                    <li>TV-Audio_Video</li>
                    <li>Tablets</li>
                    <li>Land & Plots</li>
                </ul>
            </div>
        </div>

        )
}

export default Header