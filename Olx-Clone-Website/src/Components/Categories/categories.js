import './categories.css'
import Capture7 from '../../Images/Capture 7.PNG'

function Categories(){
    return(
        <div className='container'>

  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={Capture7} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={Capture7} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={Capture7} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="h3">
    <h3 className='ml-5'>All Categories</h3>

  </div>

  <div class="container-fluid items">
    <div class="same">
      <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" class="img" alt=""/>
      <p>Mobiles</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" class="img" alt=""/>
      <p>Vehicles</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" class="img"
        alt=""/>
      <p>Property For Sale</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" class="img"
        alt=""/>
      <p>Property For Rent</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png"
        class="img" alt=""/>
      <p>Electronics Home Appliance</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" class="img" alt=""/>
      <p>Bikes</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png"
        class="img" alt=""/>
      <p>Business Industrial Agriculture</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" class="img" alt=""/>
      <p>Services</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" class="img" alt=""/>
      <p>Jobs</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" class="img" alt=""/>
      <p>Animals</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" class="img" v
        alt=""/>
      <p>Furniture & Home Decor</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" class="img" alt=""/>
      <p>Fashion Beauty</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" class="img"
        alt=""/>
      <p>Books Sports & Hobbies</p>
    </div>
    <div class="same">
      <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" class="img" alt=""/>
      <p>Kids</p>
    </div>
  </div>
        </div>
    )
}

export default Categories