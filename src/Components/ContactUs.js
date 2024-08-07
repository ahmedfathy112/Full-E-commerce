import { GiShop } from "react-icons/gi";
import aboutImage from "../Images/aboutUsimgae.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { Link } from "react-router-dom";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_ikqrpfd",
        "template_lcuiv89",
        form.current,
        "Qy_gtKV_i7kNrc_-_"
      )
      .then(
        () => {
          alert("SUCCESS!");
          form.current.reset(); // مسح الحقول بعد الإرسال الناجح
        },
        (error) => {
          alert("FAILED: " + error.text);
        }
      );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(sendEmail)} ref={form}>
      <div className="flex flex-col">
        <label className="text-[14px] font-medium">Your Name</label>
        <input
          {...register("name", { required: true })}
          className="w-[350px] outline-none border-[1px] border-gray-400 px-3 my-3 text-[14px] py-1 max-md:w-auto"
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className="flex flex-col">
        <label className="text-[14px] font-medium">Your Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          className="w-[350px] outline-none border-[1px] border-gray-400 px-3 my-3 text-[14px] py-1 max-md:w-auto"
        />
        {errors.email && <span>Invalid email address</span>}
      </div>
      <div className="flex flex-col">
        <label className="text-[14px] font-medium">Your Message:</label>
        <textarea
          {...register("message", {
            required: true,
            maxLength: 500,
          })}
          className="w-full py-2 px-[4px] text-[14px] outline-none border-[1px] h-[180px] max-md:w-auto"
        />
        {errors.message && errors.message.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.message && errors.message.type === "maxLength" && (
          <span>Message cannot exceed 500 words</span>
        )}
      </div>
      <input
        type="submit"
        value="Send message"
        className="text-[14px] bg-black py-1 px-3 rounded-lg text-white my-4"
      />
    </form>
  );
}

function ServiceSec() {
  return (
    <>
      <div className="flex w-full justify-center flex-row my-8 max-md:!flex-col">
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3">
          <TbTruckDelivery className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Free Shipping</h3>
          <span className="text-[13px] font-medium text-gray-400">
            order above 200$
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3">
          <CiMoneyBill className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Money-Back</h3>
          <span className="text-[13px] font-medium text-gray-400">
            30 days guarantee
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3">
          <GrSecure className="text-2xl mb-3" />
          <h3 className="font-semibold text-[15px]">Secure Payment</h3>
          <span className="text-[13px] font-medium text-gray-400">
            Secuerd By Stripe
          </span>
        </div>
        <div className="py-8 px-6 mr-8 text-left bg-[#F3F5F7] max-md:mb-3">
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
export default function ContactUs() {
  return (
    <>
      <div className="text-left w-full my-3">
        <div className="flex flex-row text-left">
          <Link to="/Full-E-commerce" className="text-[13px] mr-2 font-medium">
            Home -
          </Link>
          <Link to="/contact" className="text-[13px] mr-2 font-semibold">
            Contact Us
          </Link>
        </div>
        <h1 className="text-left w-[50%] text-3xl my-3 font-semibold max-md:w-full">
          We believe in sustainable decor. We’re passionate about life at home.
        </h1>
        <p className="mt-4 font-medium text-[14px] w-1/2 text-gray-500 max-md:w-full">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
      </div>
      <div className=" flex w-full flex-row h-[250px] my-5 max-md:!flex-col max-md:h-auto">
        <img src={aboutImage} className="w-1/2 h-full max-md:w-full"></img>
        <div className="w-1/2 text-left py-[25px] px-[80px] bg-[#F3F5F7] max-md:w-full max-md:text-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="my-3 text-[14px] font-medium text-gray-500">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <a href="#" className="text-[14px] font-medium underline">
            Shop Now
          </a>
        </div>
      </div>
      <div className="w-full my-4">
        <h1 className="text-center my-4 text-2xl font-semibold">Contact Us</h1>
        <div className="flex flex-row justify-center w-full max-md:!flex-col">
          <div className="w-1/3 py-[25px] px-[35px] bg-[#F3F5F7] text-center flex flex-col justify-center items-center rounded-lg m-3 max-md:w-full">
            <GiShop className="text-2xl my-3" />
            <span className="text-lg font-medium text-gray-500">Address</span>
            <p className="text-[14px] text-gray-500 font-medium">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
          <div className="w-1/3 py-[25px] px-[35px] bg-[#F3F5F7] text-center flex flex-col justify-center items-center rounded-lg m-3 max-md:w-full">
            <FaPhoneAlt className="text-2xl my-3" />
            <span className="text-lg font-medium text-gray-500">
              Contact Us
            </span>
            <p className="text-[14px] text-gray-500 font-medium">
              +84 234 567 890
            </p>
          </div>
          <div className="w-1/3 py-[25px] px-[35px] bg-[#F3F5F7] text-center flex flex-col justify-center items-center rounded-lg m-3 max-md:w-full">
            <MdEmail className="text-2xl my-3" />
            <span className="text-lg font-medium text-gray-500">Email</span>
            <p className="text-[14px] text-gray-500 font-medium">
              hello@3legant.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between flex-row my-4 max-md:!flex-col">
        <ContactForm className="w-1/2 max-md:w-full" />
        <img
          src={aboutImage}
          className="w-1/2 max-md:w-full max-md:h-full"
        ></img>
      </div>
      <ServiceSec />
    </>
  );
}
