import Navbar from "./Navbar";
import "./Pages.css";
import homehero from "../assets/homehero.jpg"
import cheesepizza from "../assets/cheesepizza.jpg"
import chickenburger from "../assets/chickenburger.jpg"
import chickenbiriyani from "../assets/chickenbiriyani.jpg"
import chocolatecake from "../assets/chocolatecake.jpg"
import spicekitchen from "../assets/spicekitchen.jpg"
import pizzahouse from "../assets/pizzahouse.jpg"
import burgerhouse from "../assets/burgerhouse.jpg"
import sweettreats from "../assets/sweettreats.jpg"

function Home() {
  return (
    <>
      <Navbar/>
      <section className="hero">

        <div className="hero-content">

          <div className="hero-tag">
            🔥 Fresh & Delicious
          </div>

          <h1>
            Good Food.
            <br />
            <span>Good Mood.</span>
          </h1>

          <p>
            Discover delicious food from your favourite restaurants
            and enjoy it right at your doorstep.
          </p>

          <div className="search-box">
            <span className="search-icon">🔍</span>

            <input type="text"placeholder="Search for pizza, burger, biryani..."/>

            <button>Search</button>
          </div>

          <div className="hero-features">

            <div className="feature">
              <span>🚀</span>
              <div>
                <strong>Fast Delivery</strong>
                <small>Quick & reliable</small>
              </div>
            </div>

            <div className="feature">
              <span>⭐</span>
              <div>
                <strong>Best Quality</strong>
                <small>Fresh ingredients</small>
              </div>
            </div>

            <div className="feature">
              <span>💰</span>
              <div>
                <strong>Best Prices</strong>
                <small>Great deals</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-image-container">

          <div className="hero-circle"></div>

          <img src={homehero} alt="Delicious Food"className="hero-image" />

          <div className="rating-card">
            <span className="rating-star">⭐</span>

            <div>
              <strong>4.9/5</strong>
              <small>Customer Rating</small>
            </div>
          </div>

          <div className="delivery-card">
            <span>🚴</span>

            <div>
              <strong>30 min</strong>
              <small>Fast Delivery</small>
            </div>
          </div>

        </div>

      </section>

      <section className="categories">

        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>What are you craving?</h2>
          </div>

          <button className="view-menu-btn">
            View All →
          </button>
        </div>


        <div className="category-container">

          <div className="category-card">
            <div className="category-image pizza">
              🍕
            </div>
            <h3>Pizza</h3>
            <p>25+ items</p>
          </div>

          <div className="category-card">
            <div className="category-image burger">
              🍔
            </div>
            <h3>Burgers</h3>
            <p>30+ items</p>
          </div>

          <div className="category-card">
            <div className="category-image rice">
              🍚
            </div>
            <h3>Rice</h3>
            <p>20+ items</p>
          </div>

          <div className="category-card">
            <div className="category-image chicken">
              🍗
            </div>
            <h3>Non Veg</h3>
            <p>35+ items</p>
          </div>

          <div className="category-card">
            <div className="category-image sweets">
              🍰
            </div>
            <h3>Desserts</h3>
            <p>20+ items</p>
          </div>

          <div className="category-card">
            <div className="category-image drinks">
              🥤
            </div>
            <h3>Drinks</h3>
            <p>15+ items</p>
          </div>

        </div>

      </section>

      <section className="popular-dishes">

  <div className="section-heading">
    <div>
      <span>OUR MENU</span>
      <h2>Popular Dishes</h2>
      <p>Delicious favourites loved by our customers</p>
    </div>

    <button className="view-menu-btn">
      View Menu →
    </button>
  </div>

  <div className="food-container">

    <div className="food-card">
      <div className="food-image">
        <img src={cheesepizza} alt="Cheese Pizza" />
        <span className="food-badge">Popular</span>
      </div>

      <div className="food-content">
        <h3>Cheese Burst Pizza</h3>
        <p>Loaded with cheese & fresh toppings</p>

        <div className="food-info">
          <span>⭐ 4.8</span>
          <strong>₹299</strong>
        </div>

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>


    <div className="food-card">
      <div className="food-image">
        <img src={chickenburger} alt="Chicken Burger" />
        <span className="food-badge">Best Seller</span>
      </div>

      <div className="food-content">
        <h3>Chicken Burger</h3>
        <p>Crispy chicken with fresh vegetables</p>

        <div className="food-info">
          <span>⭐ 4.7</span>
          <strong>₹199</strong>
        </div>

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>


    <div className="food-card">
      <div className="food-image">
        <img src={chickenbiriyani} alt="Chicken Biryani" />
        <span className="food-badge">Hot</span>
      </div>

      <div className="food-content">
        <h3>Chicken Biryani</h3>
        <p>Authentic aromatic basmati rice</p>

        <div className="food-info">
          <span>⭐ 4.9</span>
          <strong>₹249</strong>
        </div>

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>


    <div className="food-card">
      <div className="food-image">
        <img src={chocolatecake} alt="Chocolate Cake" />
        <span className="food-badge">New</span>
      </div>

      <div className="food-content">
        <h3>Chocolate Cake</h3>
        <p>Rich chocolate cake with creamy layers</p>

        <div className="food-info">
          <span>⭐ 4.6</span>
          <strong>₹430</strong>
        </div>

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>

  </div>

</section>

<section className="restaurants">

  <div className="section-heading">
    <div>
      <span>DISCOVER</span>
      <h2>Popular Restaurants</h2>
      <p>Explore the best restaurants near you</p>
    </div>

    <button className="view-menu-btn">
      View All →
    </button>
  </div>

  <div className="restaurant-container">

    <div className="restaurant-card">
      <img src={spicekitchen} alt="Spice Kitchen" />

      <div className="restaurant-content">
        <h3>Spice Kitchen</h3>
        <p>🍛 Indian • Biryani • North Indian</p>

        <div className="restaurant-info">
          <span>⭐ 4.8</span>
          <span>30-40 min</span>
        </div>

        <button>View Restaurant</button>
      </div>
    </div>


    <div className="restaurant-card">
      <img src={pizzahouse} alt="Pizza Palace" />

      <div className="restaurant-content">
        <h3>Pizza House</h3>
        <p>🍕 Pizza • Italian • Fast Food</p>

        <div className="restaurant-info">
          <span>⭐ 4.7</span>
          <span>25-35 min</span>
        </div>

        <button>View Restaurant</button>
      </div>
    </div>


    <div className="restaurant-card">
      <img src={burgerhouse} alt="Burger House" />

      <div className="restaurant-content">
        <h3>Burger House</h3>
        <p>🍔 Burgers • Fast Food • Beverages</p>

        <div className="restaurant-info">
          <span>⭐ 4.6</span>
          <span>20-30 min</span>
        </div>

        <button>View Restaurant</button>
      </div>
    </div>


    <div className="restaurant-card">
      <img src={sweettreats} alt="Sweet Treats" />

      <div className="restaurant-content">
        <h3>Sweet Treats</h3>
        <p>🍰 Desserts • Cakes • Ice Cream</p>

        <div className="restaurant-info">
          <span>⭐ 4.9</span>
          <span>15-25 min</span>
        </div>

        <button>View Restaurant</button>
      </div>
    </div>

  </div>

</section>

<section className="why-us">

  <div className="why-us-content">

    <div className="why-us-text">
      <span>WHY FOOD EXPRESS?</span>

      <h2>
        We deliver happiness
        <br />
        <span>with every order.</span>
      </h2>

      <p>
        From fresh ingredients to fast doorstep delivery,
        we make sure every meal reaches you hot, fresh
        and delicious.
      </p>

      <button className="order-now-btn">
        Order Now →
      </button>
    </div>


    <div className="why-us-cards">

      <div className="why-card">
        <div className="why-icon">🚀</div>
        <h3>Lightning Fast</h3>
        <p>
          Get your favourite food delivered
          fresh and hot in no time.
        </p>
      </div>


      <div className="why-card">
        <div className="why-icon">🥗</div>
        <h3>Fresh Ingredients</h3>
        <p>
          We use fresh and quality ingredients
          to prepare every meal.
        </p>
      </div>


      <div className="why-card">
        <div className="why-icon">💳</div>
        <h3>Easy Payments</h3>
        <p>
          Pay securely using your favourite
          payment method.
        </p>
      </div>


      <div className="why-card">
        <div className="why-icon">❤️</div>
        <h3>Made With Love</h3>
        <p>
          Delicious food prepared with care
          and served with happiness.
        </p>
      </div>

    </div>

  </div>

</section>

    </>
  );
}

export default Home;