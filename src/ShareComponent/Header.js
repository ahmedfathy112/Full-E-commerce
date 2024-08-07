import { CgProfile } from "react-icons/cg";
import { FaBarsStaggered, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../Firebase";
import { useEffect } from "react";

export default function Header() {
  const flymenu = document.getElementById("flyMenu");
  function flyMenuOpen() {
    flymenu.classList.add("!flex");
  }
  function flyMenuClose() {
    flymenu.classList.add("!hidden");
  }
  let signHeader = document.getElementById("signHeader");
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await isUserLoggedIn();
        if (!loggedIn) {
          signHeader.style.display = "block";
        } else {
          signHeader.style.display = "none";
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    checkLoginStatus();
  }, []);
  return (
    <>
      <div
        className="absolute w-[90%] min-h[100vh] bg-white flex-col z-10 left-0 p-4 hidden"
        id="flyMenu"
      >
        <div className="flex justify-between w-full">
          <span className="text-2xl font-bold">Happy House</span>
          <span className="text-xl font-semibold my-auto cursor-pointer">
            <ImCancelCircle onClick={flyMenuClose} />
          </span>
        </div>
        <input
          type="search"
          className="w-[90%] border-2 mt-5 rounded-xl border-black outline-none mx-auto p-2"
          placeholder="Search"
        ></input>
        <div className="w-full flex flex-col mt-5">
          <Link
            to="/"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Shop
          </Link>
          <Link
            to="/whishlist"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Whishlist
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            ContactUs
          </Link>
        </div>

        <div className="mt-[40%] flex flex-col">
          <div className="border-b-2 pb-3 flex justify-between">
            <Link
              to="/cart"
              className="font-semibold text-lg cursor-pointer mt-3"
            >
              Cart
            </Link>
            <span className="cursor-pointer pr-2 text-xl my-auto">
              <FaCartShopping />
            </span>
          </div>
          <div className="border-b-2 pb-3 flex justify-between">
            <Link
              to="/whishlist"
              className="font-semibold text-lg cursor-pointer mt-3"
            >
              WishList
            </Link>
            <span className="cursor-pointer pr-2 text-xl my-auto">
              <FaRegHeart />
            </span>
          </div>
          <Link
            to="/login"
            id="signHeader"
            className="py-3 px-8 rounded-lg text-white bg-black text-center cursor-pointer border-0 outline-none text-xl font-semibold"
          >
            Sign In
          </Link>
        </div>
      </div>
      <header className="w-full flex justify-between py-3">
        <div className="text-2xl text-black font-bold flex flex-row">
          <span className="my-auto">
            <FaBarsStaggered
              className=" cursor-pointer hidden max-md:block"
              onClick={flyMenuOpen}
            />
          </span>
          <Link to="/Full-E-commerce" className="ml-4">
            Happpy House
          </Link>
        </div>
        <div className="flex flex-row max-md:hidden">
          <Link
            to="/Full-E-commerce"
            className="pr-3 text-black font-medium text-sm"
          >
            Home
          </Link>
          <Link to="/shop" className="pr-3 text-black font-medium text-sm">
            Shop
          </Link>
          <Link to="/whishlist" className="pr-3 text-black font-medium text-sm">
            WishList
          </Link>
          <Link to="/contact" className="pr-3 text-black font-medium text-sm">
            ContactUs
          </Link>
        </div>
        <div className="flex flex-row">
          <Link to="/profile">
            <CgProfile className="cursor-pointer pr-2 text-2xl max-md:hidden" />
          </Link>
          <Link to="/cart">
            <FaCartShopping className="cursor-pointer pr-2 text-2xl" />
          </Link>
        </div>
      </header>
    </>
  );
}
