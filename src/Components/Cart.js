import React, { useRef, useState } from "react";
import "./Cart.css";
import { useCart } from "./CartContext";
import Swal from "sweetalert2";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [counts, setCounts] = useState(cartItems.map(() => 1));

  const updateCount = (index, delta) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? Math.max(count + delta, 0) : count
      )
    );
  };

  const handleDelete = (item) => {
    removeFromCart(item);
    Swal.fire({
      icon: "success",
      title: "Deleted",
      text: `${item.title} has been removed from your cart.`,
      confirmButtonText: "Okay",
    });
  };
  let sale = 1;
  let total = cartItems.reduce(
    (acc, item, index) => acc + item.price * counts[index] * sale,
    0
  );

  const couponValue = useRef();
  // const coupon1 = "ahmed12";
  // const coupon2 = "mohamed10";

  // const couponFun = () => {
  //   if (
  //     couponValue.current.value === coupon1 ||
  //     couponValue.current.value === coupon2
  //   ) {
  //     sale = 15 / 100;
  //     total = cartItems.reduce(
  //       (acc, item, index) => acc + item.price * counts[index] * sale,
  //       0
  //     );
  //   } else {
  //     sale = 1;
  //     total = cartItems.reduce(
  //       (acc, item, index) => acc + item.price * counts[index] * sale,
  //       0
  //     );
  //   }
  // };

  const displayTotal = total.toFixed(2);

  return (
    <div className="Cart min-h-[80vh]">
      <h1 className="text-center mb-5 Cart-head text-2xl font-bold">Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid me-3"
                    />
                    <span>
                      {item.title}
                      <br />
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-dark btn-sm me-2"
                      onClick={() => updateCount(index, -1)}
                      disabled={counts[index] <= 0}
                    >
                      -
                    </button>
                    {counts[index]}
                    <button
                      className="btn btn-outline-dark btn-sm ms-2"
                      onClick={() => updateCount(index, 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * counts[index]).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm "
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-4">
            <label htmlFor="coupon" className="form-label">
              Have a coupon?
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="coupon"
                placeholder="Coupon Code"
                ref={couponValue}
              />

              <button className="btn btn-outline-secondary">Apply</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="border p-4 bg-light">
            <h5>Cart summary</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="shipping"
                id="freeShipping"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="freeShipping">
                Free shipping $0.00
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="shipping"
                id="expressShipping"
              />
              <label className="form-check-label" htmlFor="expressShipping">
                Express shipping +$15.00
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="shipping"
                id="pickUp"
              />
              <label className="form-check-label" htmlFor="pickUp">
                Pick Up $21.00
              </label>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${displayTotal}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <span>${displayTotal}</span>
            </div>
            <button className="btn btn-dark w-100 mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
