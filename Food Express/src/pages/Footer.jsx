import "./Pages2.css";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">

          <div className="footer-logo">
            <span className="footer-logo-icon">🍴</span>
            <span>Food<span>Express</span></span>
          </div>

          <p> Delicious food delivered to your doorstep. Fresh, tasty and made just for you.</p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube"> ▶ </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/offers"> Offers</a>
          <a href="/recommended">Recommended</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="/menu">Food Delivery</a>
          <a href="/offers">Special Offers</a>
          <a href="/recommended">Recommended Food</a>
          <a href="/contact">Customer Support</a>
          <a href="/contact">Feedback</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Coimbatore, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@foodexpress.com</p>
          <p>🕒 9:00 AM - 10:00 PM</p>
        </div>

      </div>
      
      <div className="footer-bottom">

        <p>© 2026 Food Express. All rights reserved.</p>

        <div className="footer-bottom-links">

          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>

        </div>
      </div>

    </footer>
  );
}

export default Footer