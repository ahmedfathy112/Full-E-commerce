import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleFlyMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div
        className={`absolute w-[90%] min-h-[100vh] bg-white flex flex-col z-10 left-0 p-4 ${menuOpen ? "block" : "hidden"}`}
        id="flyMenu"
      >
        <div className="flex justify-between w-full">
          <span className="text-2xl font-bold">Happy  </span>
          <span
            className="text-xl font-semibold my-auto cursor-pointer"
            onClick={toggleFlyMenu}
          >
            <i className="tw tw-close"></i> {/* استخدام أيقونة إغلاق من Taiwand */}
          </span>
        </div>
        <input
          type="search"
          className="w-[90%] border-2 mt-5 rounded-xl border-black outline-none mx-auto p-2"
          placeholder="Search"
        />
        <div className="w-full flex flex-col mt-5">
          <a
            href="#"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Home
          </a>
          <a
            href="#"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Shop
          </a>
          <a
            href="#"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            Product
          </a>
          <a
            href="#"
            className="font-semibold text-lg border-b-2 pb-3 cursor-pointer mt-3"
          >
            ContactUS
          </a>
        </div>
        <div className="mt-[40%] flex flex-col">
          <div className="border-b-2 pb-3 flex justify-between">
            <a href="#" className="font-semibold text-lg cursor-pointer mt-3">
              Cart
            </a>
            <span className="cursor-pointer pr-2 text-xl my-auto">
              <i className="tw tw-cart"></i> {/* استخدام أيقونة عربة التسوق من Taiwand */}
            </span>
          </div>
          <div className="border-b-2 pb-3 flex justify-between">
            <a href="#" className="font-semibold text-lg cursor-pointer mt-3">
              WishList
            </a>
            <span className="cursor-pointer pr-2 text-xl my-auto">
              <i className="tw tw-heart"></i> {/* استخدام أيقونة القلب من Taiwand */}
            </span>
          </div>
          <button className="py-3 px-8 rounded-lg text-white bg-black text-center cursor-pointer border-0 outline-none text-xl font-semibold">
            Sign In
          </button>
        </div>
      </div>
      <header className="w-full flex justify-between py-3">
        <div className="text-2xl text-black font-bold flex flex-row">
          <span>
            <i
              className="tw tw-menu m-auto mr-2 cursor-pointer hidden max-md:block"
              onClick={toggleFlyMenu}
            ></i> {/* استخدام أيقونة القائمة من Taiwand */}
          </span>
          Happy House
        </div>
        <div className="flex flex-row max-md:hidden">
          <a href="#" className="pr-3 text-black font-medium text-sm">
            Home
          </a>
          <a href="#" className="pr-3 text-black font-medium text-sm">
            Shop
          </a>
          <a href="#" className="pr-3 text-black font-medium text-sm">
            Product
          </a>
          <a href="#" className="pr-3 text-black font-medium text-sm">
            ContactUs
          </a>
        </div>
        <div className="flex flex-row">
          <i className="tw tw-search cursor-pointer pr-2 text-2xl max-md:hidden"></i> {/* استخدام أيقونة البحث من Taiwand */}
          <i className="tw tw-profile cursor-pointer pr-2 text-2xl max-md:hidden"></i> {/* استخدام أيقونة الملف الشخصي من Taiwand */}
          <i className="tw tw-cart cursor-pointer pr-2 text-2xl"></i> {/* استخدام أيقونة عربة التسوق من Taiwand */}
        </div>
      </header>
    </>
  );
}
