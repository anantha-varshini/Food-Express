import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Pages.css";
import Navbar from "./Navbar";
import { addToCart, removeFromCart } from "../new/cartSlice";
import chickenpizza from "../assets/chickenpizza.jpg"
import cheesepizza from "../assets/cheesepizza.jpg"
import margheritapizza from "../assets/margheritapizza.jpg"
import panneerpizza from "../assets/panneerpizza.jpg"
import chickenburger from "../assets/chickenburger.jpg"
import cheeseburger from "../assets/cheeseburger.jpg"
import crispyburger from "../assets/crispyburger.jpg"
import vegburger from "../assets/vegburger.jpg"
import chickenbiriyani from "../assets/chickenbiriyani.jpg"
import muttonbiriyani from "../assets/muttonbiriyani.jpg"
import vegrice from "../assets/vegrice.jpg"
import eggrice from "../assets/eggrice.jpg"
import grilledchicken from "../assets/grilledchicken.jpg"
import chickentikka from "../assets/chickentikka.jpg"
import chickenwings from "../assets/chickenwings.jpg"
import chicken65 from "../assets/chicken65.jpg"
import chocolatecake from "../assets/chocolatecake.jpg"
import brownie from "../assets/brownie.jpg"
import vannila from "../assets/vannila.jpg"
import gulabjamun from "../assets/gulabjamun.jpg"
import strawberry from "../assets/strawberry.jpg"
import mint from "../assets/mint.jpg"
import tender from "../assets/tender.jpg"
import watermelon from "../assets/watermelon.jpg"

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  const foods = [
    // PIZZA
    {
      id: 1,
      name: "Chicken Pizza",
      category: "Pizza",
      price: 280,
      rating: 4.9,
      time: "30 min",
      image: "/src/assets/chickenpizza.jpg",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 240,
      rating: 4.6,
      time: "25 min",
      image: "/src/assets/margheritapizza.jpg",
    },
    {
      id: 3,
      name: "Cheese Burst Pizza",
      category: "Pizza",
      price: 320,
      rating: 4.8,
      time: "30 min",
      image: "/src/assets/cheesepizza.jpg",
    },
    {
      id: 4,
      name: "Paneer Pizza",
      category: "Pizza",
      price: 260,
      rating: 4.7,
      time: "25 min",
      image: "/src/assets/panneerpizza.jpg",
    },

    // BURGER
    {
      id: 5,
      name: "Chicken Burger",
      category: "Burger",
      price: 160,
      rating: 4.7,
      time: "20 min",
      image: "/src/assets/chickenburger.jpg",
    },
    {
      id: 6,
      name: "Cheese Burger",
      category: "Burger",
      price: 180,
      rating: 4.7,
      time: "20 min",
      image: "/src/assets/cheeseburger.jpg",
    },
    {
      id: 7,
      name: "Crispy Chicken Burger",
      category: "Burger",
      price: 190,
      rating: 4.8,
      time: "20 min",
      image: "/src/assets/crispyburger.jpg",
    },
    {
      id: 8,
      name: "Veg Burger",
      category: "Burger",
      price: 130,
      rating: 4.5,
      time: "15 min",
      image: "/src/assets/vegburger.jpg",
    },

    // RICE
    {
      id: 9,
      name: "Chicken Biryani",
      category: "Rice",
      price: 220,
      rating: 4.8,
      time: "25 min",
      image: "/src/assets/chickenbiriyani.jpg",
    },
    {
      id: 10,
      name: "Mutton Biryani",
      category: "Rice",
      price: 320,
      rating: 4.9,
      time: "35 min",
      image: "/src/assets/muttonbiriyani.jpg",
    },
    {
      id: 11,
      name: "Veg Fried Rice",
      category: "Rice",
      price: 140,
      rating: 4.5,
      time: "20 min",
      image: "/src/assets/vegrice.jpg",
    },
    {
      id: 12,
      name: "Egg Fried Rice",
      category: "Rice",
      price: 160,
      rating: 4.6,
      time: "20 min",
      image: "/src/assets/eggrice.jpg",
    },

    // NON VEG
    {
      id: 13,
      name: "Grilled Chicken",
      category: "Non Veg",
      price: 260,
      rating: 4.8,
      time: "30 min",
      image: "/src/assets/grilledchicken.jpg",
    },
    {
      id: 14,
      name: "Chicken Tikka",
      category: "Non Veg",
      price: 280,
      rating: 4.8,
      time: "30 min",
      image: "/src/assets/chickentikka.jpg",
    },
    {
      id: 15,
      name: "Chicken Wings",
      category: "Non Veg",
      price: 220,
      rating: 4.7,
      time: "25 min",
      image: "/src/assets/chickenwings.jpg",
    },
    {
      id: 16,
      name: "Chicken 65",
      category: "Non Veg",
      price: 240,
      rating: 4.8,
      time: "25 min",
      image: "/src/assets/chicken65.jpg",
    },

    // DESSERTS
    {
      id: 17,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 430,
      rating: 4.6,
      time: "15 min",
      image: "/src/assets/chocolatecake.jpg",
    },
    {
      id: 18,
      name: "Brownie",
      category: "Desserts",
      price: 100,
      rating: 4.7,
      time: "10 min",
      image: "/src/assets/brownie.jpg",
    },
    {
      id: 19,
      name: "Vanilla Ice Cream",
      category: "Desserts",
      price: 90,
      rating: 4.5,
      time: "10 min",
      image: "/src/assets/vannila.jpg",
    },
    {
      id: 20,
      name: "Gulab Jamun",
      category: "Desserts",
      price: 80,
      rating: 4.8,
      time: "10 min",
      image: "/src/assets/gulabjamun.jpg",
    },

    // DRINKS
    {
      id: 21,
      name: "Strawberry Milkshake",
      category: "Drinks",
      price: 110,
      rating: 4.9,
      time: "15 min",
      image: "/src/assets/strawberry.jpg",
    },
    {
      id: 22,
      name: "Mint Mojito",
      category: "Drinks",
      price: 169,
      rating: 4.3,
      time: "13 min",
      image: "/src/assets/mint.jpg",
    },
    {
      id: 23,
      name: "Tender Freshness",
      category: "Drinks",
      price: 129,
      rating: 4.6,
      time: "16 min",
      image: "/src/assets/tender.jpg",
    },
    {
      id: 24,
      name: "Watermelon Juice",
      category: "Drinks",
      price: 40,
      rating: 4.9,
      time: "20 min",
      image: "/src/assets/watermelon.jpg",
    },
  ];

  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Rice",
    "Non Veg",
    "Desserts",
    "Drinks",
  ];

  // Search + category filter
  const filteredFoods = foods.filter((food) => {
    const categoryMatch =
      activeCategory === "All" ||
      food.category === activeCategory;

    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Category emojis
  const getCategoryEmoji = (category) => {
    switch (category) {
      case "Pizza":
        return "🍕";
      case "Burger":
        return "🍔";
      case "Rice":
        return "🍚";
      case "Non Veg":
        return "🍗";
      case "Desserts":
        return "🍰";
      case "Drinks":
        return "🍹";
      default:
        return "🍽️";
    }
  };

  // ADD FOOD
  const handleAddToCart = (food) => {
    dispatch(
      addToCart({
        ...food,
        img: food.image,
      })
    );
  };

  // REMOVE FOOD
  const handleRemoveFromCart = (food) => {
    dispatch(removeFromCart(food.id));
  };

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="menu-header">
        <div className="menu-header-content">
          <span className="menu-small-title">
            OUR MENU
          </span>

          <h1>
            Explore Our <span>Delicious Menu</span>
          </h1>

          <p>
            From crispy burgers to delicious biryanis,
            discover something tasty for every craving.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section">

        {/* SEARCH */}
        <div className="menu-top">
          <div className="menu-search">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search your favourite food..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {getCategoryEmoji(category)} {category}
            </button>
          ))}
        </div>

        {/* CATEGORY SECTIONS */}
        <div className="category-sections">

          {categories
            .filter((category) => category !== "All")
            .map((category) => {

              const categoryFoods =
                filteredFoods.filter(
                  (food) =>
                    food.category === category
                );

              if (categoryFoods.length === 0) {
                return null;
              }

              return (
                <section
                  className="menu-category-section"
                  key={category}
                >

                  {/* CATEGORY HEADING */}
                  <div className="category-section-heading">
                    <div>
                      <span>EXPLORE</span>

                      <h2>
                        {getCategoryEmoji(category)}{" "}
                        {category}
                      </h2>
                    </div>

                    <p>
                      {categoryFoods.length} items
                    </p>
                  </div>

                  {/* FOOD CARDS */}
                  <div className="food-grid">

                    {categoryFoods.map((food) => (

                      <div
                        className="food-card"
                        key={food.id}
                      >

                        {/* IMAGE */}
                        <div className="food-image-container">

                          <img
                            src={food.image}
                            alt={food.name}
                          />

                          <button
                            className="heart-btn"
                            onClick={() =>
                              alert(
                                `${food.name} added to favourites!`
                              )
                            }
                          >
                            ♡
                          </button>

                          <span className="food-time">
                            🕒 {food.time}
                          </span>

                        </div>

                        {/* DETAILS */}
                        <div className="food-details">

                          <div className="food-name-row">

                            <h3>
                              {food.name}
                            </h3>

                            <span className="food-rating">
                              ⭐ {food.rating}
                            </span>

                          </div>

                          <p className="food-category">
                            {food.category}
                          </p>

                          <div className="food-bottom">

                            <strong>
                              ₹{food.price}
                            </strong>

                            {/* CART BUTTON */}
                            {cartItems.some(
                              (item) =>
                                item.id === food.id
                            ) ? (

                              <button
                                className="remove-btn"
                                onClick={() =>
                                  handleRemoveFromCart(
                                    food
                                  )
                                }
                              >
                                Remove from cart
                              </button>

                            ) : (

                              <button
                                className="add-btn"
                                onClick={() =>
                                  handleAddToCart(
                                    food
                                  )
                                }
                              >
                                + Add to cart
                              </button>

                            )}

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </section>
              );
            })}

          {/* NO FOOD */}
          {filteredFoods.length === 0 && (
            <div className="no-food">

              <div>🍽️</div>

              <h3>
                No food found
              </h3>

              <p>
                Try searching for something else.
              </p>

            </div>
          )}

        </div>

      </section>
    </>
  );
}

export default Menu;