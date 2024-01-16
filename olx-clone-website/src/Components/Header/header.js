import './header.css'

function Header() {
    return (
        <div>
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
                    <img src="" class="hidden" alt=""/>
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
                    <button id="logIn-button">Log-In</button>
                    <div class="dropdown" id="userName">
                        <button class="dropdown-toggle user" id="userId" data-bs-toggle="dropdown" aria-expanded="false">

                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./src/useradds/useradd.html">My Adds</a></li>
                            <li><a class="dropdown-item" id="signout" href="">Sign Out</a></li>
                        </ul>
                    </div>
                    <button class="sell" id="sell-btn"> <b> +Sell </b></button>
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