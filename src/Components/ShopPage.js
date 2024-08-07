import { FaRegHeart } from "react-icons/fa6";
import shopLand from "../Images/ShopImageLand.png";
import productShop from "../Images/shopProduct.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Relode";
export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const allProducts = response.data;
        setProducts(allProducts);
        const uniqueCategories = [
          ...new Set(allProducts.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setFilteredProducts(allProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    const filtered = products.filter(
      (product) => product.category === category || category === ""
    );
    setFilteredProducts(filtered);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-center items-center relative h-[80vh]">
          <img
            src={shopLand}
            className="absolute inset-0 w-full h-full -z-10"
          ></img>
          <div className="text-center">
            <div className="flex flex-row justify-center">
              <Link
                to="/Full-E-commerce"
                className="text-[13px] font-medium mr-4"
              >
                Home -
              </Link>
              <Link to="/shop" className="text-[13px] font-medium mr-4">
                Shop
              </Link>
            </div>
            <h1 className="text-5xl font-bold my-3">Shop Page</h1>
            <p className="my-2 font-medium text-[15px]">
              Let’s design the place you always imagined.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full text-left">
            <div className="flex flex-col text-left my-3">
              <span className="my-1 font-medium text-[15px] text-gray-500">
                Categories
              </span>
              <select
                className="w-[150px] border-2 border-black py-1 px-1 rounded-lg"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full flex !justify-center !flex-row flex-wrap my-3 max-md:!flex-col">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[40%] flex flex-row rounded-lg m-4 max-md:w-[90%]"
              >
                <img
                  src={product.image}
                  className="w-[45%] h-[70%]"
                  alt={product.title}
                ></img>
                <div className="w-1/2 text-left pl-4 pt-2 h-full flex flex-col max-md:!pl-2">
                  <h3 className="text-[15px] font-medium">{product.title}</h3>
                  <span className="font-medium text-[14px] text-gray-500 my-3 max-md:my-0">
                    ${product.price}
                  </span>
                  <p className="text-[14px] text-gray-500 font-semibold max-md:text-[12px] h-[100px] overflow-y-scroll description">
                    {product.description}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-black text-center text-[15px] text-white py-2 px-5 rounded-lg mt-8 w-full max-md:mt-2 max-md:!px-1"
                  >
                    Show Product
                  </Link>
                  <a
                    href="#"
                    className="text-black text-[15px] my-3 font-medium flex flex-row justify-center"
                  >
                    <FaRegHeart className="my-auto mr-3" /> Wishlist
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
