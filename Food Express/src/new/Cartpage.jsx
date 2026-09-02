import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, calculateTotal, clearCart} from "./cartSlice";
import "./Cartpage.css";

const Cartpage = () => {
  const { cartItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  // PLACE ORDER
  const handlePlaceOrder = () => {
    alert("🎉 Your order has been placed successfully!");
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((food) => (
                  <tr key={food.id}>
                    <td>
                      <img
                        src={food.img || food.image}
                        alt={food.name}
                        className="cart-image"
                      />
                    </td>

                    <td className="product-name">
                      {food.name}
                    </td>

                    <td>
                      ₹{food.price}
                    </td>

                    <td>
                      <div className="quantity-control">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: food.id,
                                change: -1,
                              })
                            )
                          }
                        >
                          -
                        </button>

                        <span className="quantity">
                          {food.quantity}
                        </span>

                        <button
                          className="quantity-btn"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: food.id,
                                change: 1,
                              })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      ₹{food.price * food.quantity}
                    </td>

                    <td>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          dispatch(removeFromCart(food.id))
                        }
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-total">
            <h3>
              Total Amount: ₹{totalAmount}
            </h3>
          </div>

          {/* PLACE ORDER BUTTON */}
          <div className="place-order-container">
            <button
              className="recommend-add"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartpage;