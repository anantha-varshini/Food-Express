
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  calculateTotal,
  clearCart,
} from "./cartSlice";
import "./Cartpage.css";

const API_URL = "http://localhost:5000/api/cart/sync";

const getCartId = () => {
  let id = localStorage.getItem("foodExpressCartId");

  if (!id) {
    id =
      "cart-" +
      Date.now() +
      "-" +
      Math.random().toString(36).slice(2, 12);

    localStorage.setItem("foodExpressCartId", id);
  }

  return id;
};

const Cartpage = () => {
  const { cartItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const [cartId] = useState(getCartId);

  const [syncStatus, setSyncStatus] = useState("");

  // Calculate the cart total
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  // Synchronize cart items with PostgreSQL
  useEffect(() => {
    const controller = new AbortController();

    const items = cartItems.map((food) => ({
      productId: String(food.id),
      productName: food.name || "",
      price: Number(food.price) || 0,
      imageUrl: food.img || food.image || "",
      quantity: food.quantity,
    }));

    setSyncStatus("Saving cart...");

    const timeoutId = setTimeout(async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartId,
            items,
          }),
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to save cart"
          );
        }

        setSyncStatus("Cart saved successfully.");
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        console.error("Cart sync error:", error);

        setSyncStatus(
          "Could not sync cart. Your local cart is still available."
        );
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [cartItems, cartId]);

  // PLACE ORDER
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      return;
    }

    alert("🎉 Your order has been placed successfully!");

    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {syncStatus && (
        <p className="cart-sync-status" role="status">
          {syncStatus}
        </p>
      )}

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

                    <td>₹{food.price}</td>

                    <td>
                      <div className="quantity-control">
                        <button
                          type="button"
                          className="quantity-btn"
                          aria-label={`Decrease ${food.name} quantity`}
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
                          type="button"
                          className="quantity-btn"
                          aria-label={`Increase ${food.name} quantity`}
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
                        type="button"
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

          <div className="place-order-container">
            <button
              type="button"
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