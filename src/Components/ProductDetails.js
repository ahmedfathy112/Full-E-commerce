import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { prettyDOM } from "@testing-library/react";
import Loading from "./Relode";
import { useCart } from "./CartContext";
import Swal from "sweetalert2";

function ProductDetails() {
  const [oneProduct, setOneProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  const Params = useParams();
  const { addToCart } = useCart() || {};
  console.log(addToCart);
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const getOneProduct = () => {
    setLoading(true);
    fetch(`${apiUrl}/${Params.productid}`)
      .then((res) => res.json())
      .then((oneProduct) => {
        setOneProduct(oneProduct);
        setLoading(false);
        console.log(oneProduct);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const allProducts = response.data;
      const randomProducts = allProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 7);
      setProducts(randomProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    getOneProduct();
  }, [Params.productid]);

  const handleClick = (productId) => {
    Params.productid = productId;
    getOneProduct();
  };

  const handleAddToCart = () => {
    addToCart(oneProduct);
    Swal.fire({
      icon: "success",
      title: "Added",
      text: `Item has been added to your cart.`,
      confirmButtonText: "Okay",
    });
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  const addToWishlist = () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!savedWishlist.some((item) => item.id === oneProduct.id)) {
      const updatedWishlist = [...savedWishlist, oneProduct];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      Swal.fire({
        icon: "success",
        title: "Added",
        text: "Product has been added to your wishlist.",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Info",
        text: "Product is already in your wishlist.",
      });
    }
  };

  return (
    <>
      <div className="container mt-5 h-[80vh] max-md:h-auto">
        <div className="row" key={oneProduct.id}>
          <div className="col-md-6 position-relative">
            <img
              src={oneProduct.image}
              alt={oneProduct.title}
              className="product-image-main h-[50%]"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-2xl font-medium">{oneProduct.title}</h1>
            <p className="text-[15px] font-medium mt-2 text-gray-500">
              {oneProduct.description}
            </p>
            <div className="price my-3">
              {oneProduct.price}${" "}
              <span className="old-price">${oneProduct.price + 20}</span>
            </div>
            <div className="d-flex align-items-center my-3">
              <button className="btn btn-secondary mr-3">-</button>
              <span>1</span>
              <button className="btn btn-secondary ml-3">+</button>
              <button
                className="btn btn-outline-secondary ml-3"
                onClick={addToWishlist}
              >
                Wishlist
              </button>
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => handleAddToCart(oneProduct)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="carousel container">
        <div className="carousel-cart container">
          <div className="carousel-cart-top">
            <div className="carousel-cart-top-left">
              <h1 className="text-xl font-medium  max-md:!text-[16px]">
                You Might Also Like
              </h1>
            </div>
            <div className="carousel-cart-top-right">
              <Link
                to="/shop"
                className="card-text text-xl font-medium max-md:!text-[14px]"
              >
                More Products &rarr;
              </Link>
            </div>
          </div>

          <div className="carousel-cart-bottom">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.25}
              modules={[Pagination]}
              breakpoints={{
                540: { slidesPerView: 2.5 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
                1280: { slidesPerView: 5.5 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="slides">
                  <img src={product.image} alt={product.title} />
                  <div className="star-rating">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>&#9733;</span>
                      ))}
                  </div>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <div className="price">
                      ${product.price}
                      <span className="old-price">
                        ${(product.price * 2).toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full -bottom-1 left-1 bg-black text-white text-[14px] py-2 px-12 text-center rounded-lg cartBtn"
                    onClick={() => handleClick(product.id)}
                  >
                    Show Product
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
