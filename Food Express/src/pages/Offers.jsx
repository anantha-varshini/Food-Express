import { useState } from "react";
import Navbar from "./Navbar";
import "./Pages.css";
import { Link } from "react-router-dom";

function Offers() {
  const [copied, setCopied] = useState("");

  const copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const offers = [
    {
      id: 1,
      discount: "50% OFF",
      title: "Weekend Feast",
      description:
        "Get 50% off on selected meals and enjoy your weekend with delicious food.",
      code: "FEAST50",
      minOrder: "Min. order ₹499",
      icon: "🍕",
      tag: "BEST DEAL",
    },
    {
      id: 2,
      discount: "30% OFF",
      title: "Burger Bonanza",
      description:
        "Enjoy amazing burgers at a special price. Perfect for your burger cravings.",
      code: "BURGER30",
      minOrder: "Min. order ₹299",
      icon: "🍔",
      tag: "POPULAR",
    },
    {
      id: 3,
      discount: "25% OFF",
      title: "Biryani Special",
      description:
        "Order your favourite biryani and get an instant discount on your meal.",
      code: "RICE25",
      minOrder: "Min. order ₹399",
      icon: "🍚",
      tag: "HOT OFFER",
    },
    {
      id: 4,
      discount: "20% OFF",
      title: "Sweet Treat",
      description:
        "Make your meal sweeter with exclusive discounts on desserts and sweets.",
      code: "SWEET20",
      minOrder: "Min. order ₹249",
      icon: "🍰",
      tag: "NEW",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="offers-hero">

        <div className="offers-hero-content">

          <span className="offers-small-title">
            FOOD EXPRESS DEALS</span>

          <h1>Delicious Food, <br />
            <span>Better Prices.</span></h1>

          <p>Save more on your favourite meals with our
            exclusive offers and special discounts.</p>

          <Link to="/menu"><button className="offers-menu-btn">Explore Menu →</button></Link>

        </div>

        <div className="offers-hero-image">
          <div className="offer-circle">
            🎁
          </div>

          <div className="floating-offer offer-one">
            50% OFF
          </div>

          <div className="floating-offer offer-two">
            🔥 HOT DEAL
          </div>
        </div>

      </section>

      <section className="offers-section">

        <div className="offers-heading">

          <span>EXCLUSIVE OFFERS</span>
          <h2>Today's Best Deals</h2>
          <p> Grab these offers before they disappear!</p>

        </div>

        <div className="offers-grid">

          {offers.map((offer) => (

            <div className="offer-card" key={offer.id}>

              <div className="offer-card-top">

                <span className="offer-tag">{offer.tag}</span>
                <span className="offer-icon">{offer.icon}</span>

              </div>

              <h3 className="offer-discount">{offer.discount}</h3>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <Link to="/menu"><button className="claim-btn">Order Now →</button></Link>

            </div>

          ))}

        </div>

      </section>

      <section className="special-offer">

        <div className="special-content">

          <span>LIMITED TIME OFFER</span>
          <h2>Free Delivery</h2>
          <p>Get free delivery on orders above ₹499.
            No coupon required.</p>

          <Link to="/menu"><button>Order Now →</button></Link>
        </div>

        <div className="special-food">
          🍔 🍕 🍗
        </div>

      </section>

    </>
  );
}

export default Offers;