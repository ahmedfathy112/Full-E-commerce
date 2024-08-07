import React from 'react';
import image1 from '../images/Paste image (1).png';
import imagepay1 from '../images/img (7).png';
import imagepay2 from '../images/path3066.png';
import imagepay3 from '../images/Mastercard.png';
import imagepay4 from '../images/Stripe.png';
import imagepay5 from '../images/Payment Methods (2).png';
import imagepay6 from '../images/Payment Methods.png';
import './Foooter.css'; // استيراد ملف CSS

function Foooter() {
  return (
    <>
     <div className="foooter">
     <div className="container-fluid my-0  ">
        <div className="newsletter-section text-center my-5">
          <h3>Join Our Newsletter</h3>
          <p>Sign up for deals, new products and promotions</p>
          <div className="d-flex justify-content-center align-items-center">
            <img src={image1} alt="" className="img-fluid mx-2 d-none d-md-block" />
            <form className="form-inline justify-content-center mx-3">
              <input className="form-control mr-2" type="email" placeholder="Email address" />
              <button className="btn button " type="submit">Signup</button>
            </form>
            <img src={image1} alt="" className="img-fluid mx-2 d-none d-md-block" />
          </div>
        </div>

        <div className="instagram-section text-center my-5">
          <h3>Newsfeed</h3>
          <h5>Instagram</h5>
          <p>Follow us on social media for more discount & promotions</p>
          <p>@3legant_official</p>
          <div className="row no-gutters">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="col-6 col-sm-4 col-md-2" key={i}>
                <img src={image1} alt={`Instagram ${i}`} className="img-fluid w-100" />
              </div>
            ))}
          </div>
        </div>

        <footer className="text-center mt-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <h3>3legant.</h3>
              <p>More than just a game. It’s a lifestyle.</p>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Page Info</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Shipping Info</h5>
              <ul className="list-unstyled">
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Return & Refund</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h5>Contact Us</h5>
              <p>43111 Hai Trieu street, District 1, HCMC Vietnam</p>
              <p>84-756-3237</p>
            </div>
          </div>

         <div className="row">
         <div className="footer-bottom d-flex justify-content-between align-items-center   ">
            <div className="footer-left    ">
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
            </div>
            <div className="footer-right    ">
              <a href="#"><img src={imagepay1} alt="Payment Link 1" className="payment-link small-img" /></a>
              <a href="#"><img src={imagepay2} alt="Payment Link 2" className="payment-link small-img" /></a>
              <a href="#"><img src={imagepay3} alt="Payment Link 3" className="payment-link small-img" /></a>
              <a href="#"><img src={imagepay4} alt="Payment Link 4" className="payment-link small-img" /></a>
              <a href="#"><img src={imagepay5} alt="Payment Link 5" className="payment-link small-img" /></a>
              <a href="#"><img src={imagepay6} alt="Payment Link 6" className="payment-link small-img" /></a>
            </div>
          </div>
         </div>
        </footer>
      </div>
     </div>
    </>
  );
}

export default Foooter;
