import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
// import imagefooter2 from "../images/pngtree-beautiful-girl-wearing-headphones-and-listening-to-songs-happily-png-image_14490460-removebg-preview.png";

function Footer() {
  return (
    <>
      <footer className="footer text-center py-4 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left mb-3 mb-md-0">
              <h5>Happy House</h5>
              <p>Headphone Store</p>
              <p>&copy; 2023 3legant. All rights reserved</p>
              <a href="#" className="text-white">
                Privacy Policy
              </a>
              |
              <a href="#" className="text-white">
                Terms of Use
              </a>
            </div>
            <div className="col-md-6 text-md-right">
              <Link to="/Full-E-commerce" className="text-white mr-3">
                Home
              </Link>
              <Link to="/shop" className="text-white mr-3">
                Shop
              </Link>
              <Link to="/whishlist" className="text-white mr-3">
                WhishList
              </Link>
              <Link to="/contact" className="text-white">
                Contact Us
              </Link>
              <div className="mt-3 flex flex-row justify-center">
                <a href="#" className="text-white mr-3">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white mr-3">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-white">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
