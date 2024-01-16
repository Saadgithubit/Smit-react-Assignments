import './footer.css'

function Footer(){
    return(
        <div className="footer-parent">
        <div class="footer">
    <div class="first-col">
      <ul class="ul-1">
        <li class="footer-li-heading">
          <h3>Popular Categories</h3>
        </li>
        <li class="footer-li">Cars</li>
        <li class="footer-li">Flats for Rent</li>
        <li class="footer-li">Mobiles Phones</li>
        <li class="footer-li">Jobs</li>

      </ul>
    </div>

    <div class="first-col">
      <ul class="ul-1">
        <li class="footer-li-heading">
          <h3>Trending Searches</h3>
        </li>
        <li class="footer-li">Bikes</li>
        <li class="footer-li">Watches</li>
        <li class="footer-li">Books</li>
        <li class="footer-li">Dogs</li>

      </ul>
    </div>

    <div class="first-col">
      <ul class="ul-1">
        <li class="footer-li-heading">
          <h3>About Us</h3>
        </li>
        <li class="footer-li">About Dubizzle Group</li>
        <li class="footer-li">OLX Blog</li>
        <li class="footer-li">Contact Us</li>
        <li class="footer-li">OLX For Bussines</li>

      </ul>
    </div>

    <div class="first-col">
      <ul class="ul-1">
        <li class="footer-li-heading">
          <h3>Olx</h3>
        </li>
        <li class="footer-li">Help</li>
        <li class="footer-li">Site Map</li>
        <li class="footer-li">Term of use</li>
        <li class="footer-li">Prvacy Policy</li>

      </ul>
    </div>

    <div class="last">
      <div>
        <h3 class="follow">FOLLOW US</h3>
        <img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" width="25px"
          height="30px" alt=""/>
        <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" width="25px"
          height="30px" alt=""/>
        <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" width="25px"
          height="30px" alt=""/>
        <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"
          width="25px" height="30px" alt=""/>
      </div><br/>
      <div>
        <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
          width="90px" height="50px" alt=""/>
        <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
          width="90px" height="50px" alt=""/>
        <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
          width="90px" height="50px" alt=""/>
      </div>
    </div>

{/* //   <!-- ......................................Accordian.......................................... --> */}

  <div class="accordion accordion-flush acc" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Categories
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Popular Categories
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled
          with some actual content.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Trending Searches
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening
          here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more
          representative of how this would look in a real-world application.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          About
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          OLX
        </button>
      </h2>
      <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
          <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div class="follow-us">
      <h3 class="follow">FOLLOW US</h3>
      <img src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" width="25px"
        height="30px" alt=""/>
      <img src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" width="25px"
        height="30px" alt=""/>
      <img src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" width="25px"
        height="30px" alt=""/>
      <img src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" width="25px"
        height="30px" alt=""/>
    </div><br/>
    <div class="last-button">
      <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" width="90px"
        height="50px" alt=""/>
      <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
        width="90px" height="50px" alt=""/>
      <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" width="90px"
        height="50px" alt=""/>
    </div>
  </div>


</div>

  <div class="end">
    <p class="last-para">Free Classified in pakistan . @ 2006-2023 OLX</p>
  </div>

  </div>

    )
}

export default Footer