import React, { useState, useEffect } from 'react';
import image from '../images/Paste image (2).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timedown.css';

function Timedown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Jul 30, 2024 15:37:25").getTime();

    const counter = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(counter);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(counter);
  }, []);
  return (
    <>
      <div className="container-fluid promotion mosalah">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={image} alt="Man with Headphones" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="details">
              <p className="text-uppercase">Limited Edition</p>
              <h1>  Hurry up! 30% OFF </h1>
              <p>  Find clubs that are right for your game </p>
              <p>  Offer expires in:</p>

              <div className="container-fluid countdown d-flex justify-content-center align-items-center flex-nowrap text-light">
        <div className="count-item bg-white rounded d-flex flex-column align-items-center">
          <h3 className="mb-0">{String(timeLeft.days).padStart(2, '0')}</h3>
          <p className="mb-0">Days</p>
        </div>
        <div className="count-item bg-white rounded d-flex flex-column align-items-center">
          <h3 className="mb-0">{String(timeLeft.hours).padStart(2, '0')}</h3>
          <p className="mb-0">Hours</p>
        </div>
        <div className="count-item bg-white rounded d-flex flex-column align-items-center">
          <h3 className="mb-0">{String(timeLeft.minutes).padStart(2, '0')}</h3>
          <p className="mb-0">Minutes</p>
        </div>
        <div className="count-item bg-white rounded d-flex flex-column align-items-center">
          <h3 className="mb-0">{String(timeLeft.seconds).padStart(2, '0')}</h3>
          <p className="mb-0">Seconds</p>
        </div>
      </div>
              <button className="btn   mt-3">Shop now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid benefits text-center d-flex flex-wrap justify-content-center text-light">
        <div className="row justify-content-center">
          <div className="col-md-3 benefit">
            <i className="fas fa-shipping-fast fa-2x"></i>
            <h5>Free Shipping</h5>
            <p>Order above $200</p>
          </div>
          <div className="col-md-3 benefit">
            <i className="fas fa-money-bill-wave fa-2x"></i>
            <h5>Money-back</h5>
            <p>30 days guarantee</p>
          </div>
          <div className="col-md-3 benefit">
            <i className="fas fa-lock fa-2x"></i>
            <h5>Secure Payments</h5>
            <p>Secured by Stripe</p>
          </div>
          <div className="col-md-3 benefit">
            <i className="fas fa-headset fa-2x"></i>
            <h5>24/7 Support</h5>
            <p>Phone and Email support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timedown;
