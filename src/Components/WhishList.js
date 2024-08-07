import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Whishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleDelete = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    Swal.fire({
      icon: "success",
      title: "Deleted",
      text: `Item has been removed from your WhishList.`,
      confirmButtonText: "Okay",
    });
  };

  return (
    <>
      <div className="min-h-[80vh]">
        <h2 className="text-2xl font-semibold my-3 text-left">Your Wishlist</h2>
        <div className="flex w-full my-4 justify-center flex-row flex-wrap max-md:!flex-col">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col w-1/4 border-2 p-3 my-4 max-md:!w-full"
              >
                <img
                  src={item.image}
                  className="w-full h-[250px]"
                  alt={item.title}
                />
                <h3 className="text-[19px] font-medium my-2">{item.title}</h3>
                <span className="text-[15px] font-medium text-blue-500">
                  {item.price}$
                </span>
                <div className="flex justify-between mt-2">
                  <button
                    className="btn btn-danger w-full"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No items in wishlist</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Whishlist;
