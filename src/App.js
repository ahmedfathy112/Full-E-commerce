import logo from "./logo.svg";
import "./App.css";
import Header from "./ShareComponent/Header";
import chair from "./Images/headphones.jpg";
import bedroom from "./Images/bedroom.png";
import kitchen from "./Images/kitchen.png";
import SalesImage from "./Images/salesImage.png";
import Land1 from "./Images/imageLand1.jpg";
import Land2 from "./Images/land2.jpg";
import Land3 from "./Images/land3.jpg";

// swiper imports
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// import required modules
import { Navigation } from "swiper/modules";
import image from "./Images/LandImage.png";
import Footer from "./ShareComponent/Footer";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import ShopPage from "./Components/ShopPage";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Swal from "sweetalert2";
import { isUserLoggedIn } from "./Firebase";
import axios from "axios";
import ProductDetails from "./Components/ProductDetails";
import { CartProvider } from "./Components/CartContext";
import Loading from "./Components/Relode";
import Whishlist from "./Components/WhishList";

function LandingPage() {
  return (
    <>
      <div className="w-full">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-[70vh] mt-10"
        >
          <SwiperSlide>
            <img className="w-full h-full" src={image}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={Land1}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={Land2}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={Land3}></img>
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex justify-between mt-5 max-md:flex-col">
          <div className="text-6xl font-bold">
            Simply Unique/ <br /> Simply Better.
          </div>
          <div className="text-lg font-serif font-medium m-auto text-gray-500">
            <span className="text-black">Happy House</span> is a gift &
            decorations store based in HCMC, <br />
            Vietnam. Est since 2019.
          </div>
        </div>
      </div>
    </>
  );
}
function CategoriesSec() {
  return (
    <>
      <div className="w-full flex flex-row mt-5 h-[70vh] mb-11 max-md:flex-col items-end">
        <div className="relative h-full w-[50%] max-md:w-full max-md:h-[100%]">
          <img src={chair} className="absolute inset-0 h-full w-full"></img>
          {/* <div className="absolute top-8 left-10 z-20 max-md:top-4">
            <h2 className="text-2xl font-bold max-md:text-xl">Living Room</h2>
            <a href="#" className="text-sm border-b-2 mt-3 pb-1 border-black">
              Show Now
            </a>
          </div> */}
        </div>
        <div className="w-[48%] h-full flex flex-col relative ml-4 max-md:w-full max-md:h-[100%] max-md:mt-5">
          <div className="relative w-full h-[50%] max-md:mx-auto">
            <img src={bedroom} className="absolute inset-0 w-full h-full"></img>
            {/* <div className="absolute bottom-8 left-10 z-20 max-md:top-4">
              <h2 className="text-2xl font-bold max-md:text-xl">BedRoom</h2>
              <a href="#" className="text-sm border-b-2 mt-3 pb-1 border-black">
                Show Now
              </a>
            </div> */}
          </div>
          <div className="relative w-full h-[48%] mt-5 max-md:mx-auto">
            <img src={kitchen} className="absolute inset-0 w-full h-full"></img>
            {/* <div className="absolute bottom-8 left-10 z-20 max-md:top-4">
              <h2 className="text-2xl font-bold max-md:text-xl">kitchen</h2>
              <a href="#" className="text-sm border-b-2 mt-3 pb-1 border-black">
                Show Now
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
var SlidesNum;
function SlidesResize() {
  if (window.innerWidth <= 670) {
    SlidesNum = 1.5;
  } else {
    SlidesNum = 4.5;
  }
}
SlidesResize();
function SliderArrivels() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data.slice(0, 7);
        setNewArrivals(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Swiper
      slidesPerView={SlidesNum}
      spaceBetween={30}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="mySwiper my-10"
    >
      {newArrivals.map((product) => (
        <SwiperSlide
          key={product.id}
          className="flex flex-col cursor-pointer relative slides"
        >
          <div className="relative h-[250px]">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full rounded-xl"
            />
            <Link
              to={`/product/${product.id}`}
              className="absolute w-full bottom-1 left-1 bg-black text-white text-[14px] py-2 px-12 text-center rounded-lg cartBtn"
            >
              Show Product
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[14px] font-semibold">{product.title}</h3>
            <span className="text-[14px] font-semibold">${product.price}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function NewArrivels() {
  return (
    <>
      <div className="w-full mt-4">
        <div className="w-full flex justify-between">
          <h2 className="text-2xl font-bold">
            New <br /> Arrivals
          </h2>
          <Link
            to="/shop"
            className="underline border-black my-auto font-mono font-medium"
          >
            More Products
          </Link>
        </div>
        <SliderArrivels />
      </div>
    </>
  );
}
function ServiceSec() {
  return (
    <>
      <div className="flex w-full justify-center flex-row flex-wrap my-8 max-md:!flex-col">
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3 max-md:w-full">
          <TbTruckDelivery className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Free Shipping</h3>
          <span className="text-[13px] font-medium text-gray-400">
            order above 200$
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3 max-md:w-full">
          <CiMoneyBill className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Money-Back</h3>
          <span className="text-[13px] font-medium text-gray-400">
            30 days guarantee
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3 max-md:w-full">
          <GrSecure className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Secure Payment</h3>
          <span className="text-[13px] font-medium text-gray-400">
            Secuerd By Stripe
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3 max-md:w-full">
          <FaPhoneAlt className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">24/7 Support</h3>
          <span className="text-[13px] font-medium text-gray-400">
            Phone and email support
          </span>
        </div>
      </div>
    </>
  );
}
function SalesSec() {
  return (
    <>
      <div className="w-full flex justify-between bg-[#F3F5F7] my-8 max-md:flex-col">
        <img src={SalesImage} className="w-[50%] max-md:w-full"></img>
        <div className="text-left w-[45%] m-auto max-md:w-full max-md:p-4">
          <span className="text-blue-500 font-bold text-[15px]">
            SALE UP TO 35% OFF
          </span>
          <h3 className="text-3xl font-semibold w-[75%]">
            HUNDREDS of New lower prices!
          </h3>
          <p className="text-gray-500 text-[14px] my-3 w-[75%]">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <a href="#" className="underline text-[15px] font-medium">
            Show More
          </a>
        </div>
      </div>
    </>
  );
}
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await isUserLoggedIn();
        if (!loggedIn) {
          Swal.fire({
            icon: "warning",
            title: "Please Login",
            text: "Login First",
            confirmButtonText: "Sign In",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    checkLoginStatus();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <SignUp />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <SignIn />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/Full-E-commerce"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <LandingPage />
                <CategoriesSec />
                <NewArrivels />
                <ServiceSec />
                <SalesSec />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <ContactUs />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/Product/:productid"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <ProductDetails />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <Profile />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <ShopPage />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <Cart />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/whishlist"
          element={
            <>
              <div className=" px-[80px] max-md:pl-[20px] max-md:pr-[20px]">
                <Header />
                <Whishlist />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
