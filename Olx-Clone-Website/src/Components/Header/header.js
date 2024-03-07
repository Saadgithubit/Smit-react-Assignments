import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2'

import './header.css'
import Capture from '../../Images/Capture 2.PNG'
import { auth, onAuthStateChanged, getUser, logOut } from '../../Config/firebase';
import { useState } from 'react';
import { removeUser, setUser } from '../../Store/userSlice';


function Header() {
  const [userName, setUserName] = useState('User')
  const [userDetails, setuserDetails] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const activeUser = useSelector(state => state.userReducer.user.fullName)

  onAuthStateChanged(auth, async (user) => {
    if (user) {

      const id = auth.currentUser.uid
      const userData = await getUser(id)
      setuserDetails(true)
      setUserName(activeUser)
      dispatch(setUser({...userData,id: id}))
    } else {
      setUserName("User")
      setuserDetails(false)
    }
  });

  const goToSell = () => {
    if(userName == "User"){
      Swal.fire({
        title: "Please Sign In First",
        text: "User Not Found!",
        icon: "question"
      });
      navigate('/signin')
    }else{

      navigate('/addpost')
    }
  }

  const signOut = () => {
    logOut()
    dispatch(removeUser({}))
  }

  return (

    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header off" >
              <h5 className="offcanvas-title p-3 pb-2 text-2xl font-bold" id="offcanvasNavbarLabel">{userName}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><span><i class="fa-solid fa-x text-2xl"></i></span></button>
            </div>
            <div className="offcanvas-body">
              <form className="d-flex flex-column" role="search">
              {userDetails && <span className="nav-sell-btn" onClick={() => navigate('/')}><a href="">Home</a></span>}
                <span className="nav-sell-btn" onClick={() => !userDetails ? navigate('/signin') : navigate('/addpost')}><a href="">Start Selling</a></span>
                <span className="nav-sell-btn" onClick={() => !userDetails ? navigate('/signin') : navigate('/myadds')}><a>My Adds</a></span>
                {!userDetails ? <span class="nav-sell-btn" onClick={() => navigate('/signin')}><a class="dropdown-item" href="">Log In</a></span>
                  :
                  <span className="nav-sell-btn" onClick={signOut}><a class="dropdown-item" id="signout" href="">Sign Out</a></span>
                }
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div class="header-top">

        <div className="header-img my-1">
          <img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png" width="30px" height="20px" alt="" />
        </div>
        <div className="header-a">
          <a href=""><i class="fa-solid fa-car"></i> MOTORS</a>
        </div>
        <div className="header-a2">
          <a href=""><i className="fa-regular fa-building"></i> PROPERTY</a>
        </div>
      </div>
      <div className="header">
        <div className="olx-img">
          <img src={Capture} alt="" width='80px' />
        </div>

        <div className="sel-div">
          <select name="" id="inp">
            <option value="">Pakistan</option>
          </select>
          <div className="icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              className="fa-magnifying-glass" alt="" />
          </div>
        </div>
        <div className="parent-inp">
          <input type="text" placeholder="Find car,Mobile Phones & more" name="abc" id="input" />
          <div className="icon-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="btn-div">

          {!userDetails ? <button id="logIn-button" onClick={() => navigate('/signin')}>Log-In</button>
            :
            <div className="dropdown" id="userName">
              <button className="dropdown-toggle user" data-bs-toggle="dropdown" aria-expanded="false">
                <img width='50px' src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png' />
              </button>
              <ul className="dropdown-menu">
                <div className='border border-top-0 p-2'>
                  <span className='flex'>
                    <img width='50px' src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png' />
                    <p className='mx-3'>Hello<br />{userName}</p>
                  </span>
                  <button className='border p-2 w-full my-2'>view and edit your profile</button>
                </div>
                <li onClick={() => navigate('/')}><a class="dropdown-item">Home</a></li>
                <li onClick={() => navigate('myadds')}><a class="dropdown-item">My Adds</a></li>
                <li onClick={signOut}><a class="dropdown-item" id="signout" href="">Sign Out</a></li>
              </ul>
            </div>
          }



          <button className="sell" onClick={goToSell}> <b> +Sell </b></button>
        </div>
      </div>

      <div>
      </div>

      <div className="container pl-6 nav-bar">
        <ul className="ul">
          <li className="Categories"> <select class="select">
            <option className="option">All Categories</option>
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