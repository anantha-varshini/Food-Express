import { useState } from "react";
import Navbar from "./Navbar";
import "./Pages2.css";
import { Link } from "react-router-dom";
import chickenbiriyani from '../assets/chickenbiriyani.jpg'
import chickenburger from '../assets/chickenburger.jpg'
import chocolatecake from '../assets/chocolatecake.jpg'
import cheeseburger from '../assets/cheeseburger.jpg'
import menu4 from '../assets/menu4.jpg'
import sdessert from '../assets/sdessert.jpg'
import vegrice from '../assets/vegrice.jpg'
import chickenpizza from '../assets/chickenpizza.jpg'

function Recommended() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      category: "Rice",
      price: 220,
      rating: 4.9,
      time: "25 min",
      image: "/src/assets/chickenbiriyani.jpg",
      badge: "Best Seller",
      description: "Aromatic basmati rice with tender chicken and rich spices.",
    },
    {
      id: 2,
      name: "Chicken Burger",
      category: "Burger",
      price: 180,
      rating: 4.8,
      time: "20 min",
      image: "/src/assets/chickenburger.jpg",
      badge: "Popular",
      description: "Crispy chicken, fresh vegetables and creamy sauce.",
    },
    {
      id: 3,
      name: "Special Chicken Pizza",
      category: "Pizza",
      price: 299,
      rating: 4.9,
      time: "30 min",
      image: "/src/assets/chickenpizza.jpg",
      badge: "Top Pick",
      description: "Loaded pizza topped with chicken, cheese and herbs.",
    },
    {
      id: 4,
      name: "Grilled Chicken",
      category: "Non Veg",
      price: 260,
      rating: 4.7,
      time: "30 min",
      image: "/src/assets/menu4.jpg",
      badge: "Chef's Choice",
      description: "Juicy grilled chicken seasoned with delicious herbs.",
    },
    {
      id: 5,
      name: "Mint Mojito",
      category: "Drinks",
      price: 169,
      rating: 4.6,
      time: "10 min",
      image: "/src/assets/mint.jpg",
      badge: "Healthy",
      description: "Fresh refreshment with mint and lemon flavour.",
    },
    {
      id: 6,
      name: "Cheese Burger",
      category: "Burger",
      price: 190,
      rating: 4.8,
      time: "20 min",
      image: "/src/assets/cheeseburger.jpg",
      badge: "Trending",
      description: "Juicy burger with melted cheese and fresh toppings.",
    },
    {
      id: 7,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 430,
      rating: 4.7,
      time: "15 min",
      image: "/src/assets/chocolatecake.jpg",
      badge: "Sweet Pick",
      description: "Rich chocolate cake made for every sweet craving.",
    },
    {
      id: 8,
      name: "Strawberry Dessert",
      category: "Desserts",
      price: 150,
      rating: 4.6,
      time: "15 min",
      image: "/src/assets/sdessert.jpg",
      badge: "New",
      description: "Creamy strawberry dessert with a fresh fruity flavour.",
    },
  ];

  const categories = [
    "All",
    "Rice",
    "Burger",
    "Pizza",
    "Non Veg",
    "Desserts",
    "Drinks",
  ];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(
          (food) => food.category === selectedCategory
        );

  return (
    <>
      <Navbar />

      {/* ================= RECOMMENDED HERO ================= */}

      <section className="recommended-hero">

        <div className="recommended-hero-content">

          <span className="recommended-label">
            ✨ MADE FOR YOU
          </span>

          <h1>
            Food You'll
            <br />
            <span>Love.</span>
          </h1>

          <p>
            Discover hand-picked dishes that are
            perfect for your next delicious meal.
          </p>

          <button className="recommended-btn" onClick={() => { document.getElementById("recommended-foods").scrollIntoView({ behavior: "smooth", });
            }}> Explore Recommendations ↓</button>

        </div>

        {/* Hero Graphic */}

        <div className="recommended-hero-graphic">

          <div className="recommended-circle">
            🍛
          </div>

          <div className="recommend-floating-card card-top">
            ⭐ 4.9
            <small>Top Rated</small>
          </div>

          <div className="recommend-floating-card card-bottom">
            🔥 Trending
            <small>Most Ordered</small>
          </div>

        </div>

      </section>

      <section className="recommend-message">

        <div className="recommend-message-icon">
          ❤️
        </div>

        <div>
          <span>FOOD EXPRESS PICKS</span>

          <h2>
            Something delicious is waiting for you!
          </h2>

          <p>
            We've selected some of our most loved
            dishes for you to try.
          </p>
        </div>

      </section>


      {/* ================= FOOD SECTION ================= */}

      <section
        className="recommended-section"
        id="recommended-foods"
      >

        <div className="recommended-heading">

          <div>
            <span>OUR TOP PICKS</span>

            <h2>
              Recommended For You
            </h2>
          </div>

          <p>
            {filteredFoods.length} delicious picks
          </p>

        </div>

        {/* Categories */}

        <div className="recommended-categories">

          {categories.map((category) => (
            <button key={category} className={ selectedCategory === category ? "recommend-category-active":""}
              onClick={() => setSelectedCategory(category)}>{category}</button>
          ))}

        </div>


        {/* Food Cards */}

        <div className="recommended-grid">

          {filteredFoods.map((food) => (

            <div className="recommended-card" key={food.id}>

              {/* Image */}

              <div className="recommended-image">

                <img src={food.image} alt={food.name}/>
                <span className="recommend-badge">{food.badge} </span>
                <button className="recommend-heart"> ♡</button>
                <span className="recommend-time"> 🕒 {food.time}</span>

              </div>

              {/* Content */}

              <div className="recommended-details">

                <div className="recommend-title-row">

                  <h3>{food.name}</h3>
                  <span> ⭐ {food.rating}</span>

                </div>

                <p className="recommend-category">{food.category}</p>
                <p className="recommend-description">{food.description}</p>

                <div className="recommend-bottom">

                  <strong> ₹{food.price}</strong>

                  <button className="recommend-add" onClick={() =>alert(`${food.name} added to cart!`)}>
                    + Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= TRENDING SECTION ================= */}

      <section className="trending-section">

        <div className="trending-content">

          <span>
            🔥 TRENDING NOW
          </span>

          <h2>
            Everyone is loving these!
          </h2>

          <p>
            Check out the dishes that are
            currently trending on Food Express.
          </p>

          <Link to='/menu'><button>View Full Menu →</button></Link>

        </div>

        <div className="trending-foods">
          🍕 🍔 🍗 🍰
        </div>

      </section>

    </>
  );
}

export default Recommended;