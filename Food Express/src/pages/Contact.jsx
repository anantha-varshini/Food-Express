import { useState } from "react";
import Navbar from "./Navbar";
import "./Pages2.css";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <Navbar />
      <section className="contact-hero">

        <div className="contact-hero-content">
          <span className="contact-small-title">
            GET IN TOUCH</span>
          <h1>We'd Love To
            <br />
            <span>Hear From You.</span></h1>
          <p>Have a question, suggestion, or just want to
            say hello? Our team is always happy to help.</p>

        </div>
        <div className="contact-hero-icon">
          💬
        </div>

      </section>

      <section className="contact-info-section">

        <div className="contact-info-card">
          <div className="contact-icon">
            📞
          </div>

          <div>
            <span>CALL US</span>
            <h3> +91 98765 43210</h3>
            <p>Mon - Sun, 9 AM - 10 PM</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            📧
          </div>

          <div>
            <span>EMAIL US</span>
            <h3>hello@foodexpress.com</h3>
            <p>We reply within 24 hours</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            📍
          </div>

          <div>
            <span>VISIT US</span>
            <h3>Food Express HQ</h3>
            <p> COimbatore, Tamil Nadu</p>
          </div>
        </div>

      </section>

      <section className="contact-main">

        <div className="contact-form-container">
          <span className="contact-form-label">
            SEND US A MESSAGE</span>
          <h2>How Can We Help?</h2>
          <p className="contact-form-description">
            Fill out the form below and our team will
            get back to you as soon as possible.</p>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required/>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="What is this regarding?"value={formData.subject} onChange={handleChange} required/>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message"placeholder="Write your message here..."rows="6"
                value={formData.message}onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="send-message-btn">Send Message →</button>
          </form>
        </div>

        <div className="contact-location">
          <div className="location-map">
            <div className="map-grid"></div>
            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="location-pin">
              📍
            </div>
            <div className="location-label">
              <strong>Food Express</strong>
              <small>Coimbatore, Tamil Nadu</small>
            </div>
          </div>

          <div className="location-details">
            <span>📍 OUR LOCATION</span>
            <h3>Come Say Hello!</h3>
            <p>Food Express Headquarters
              <br />
              Coimbatore, Tamil Nadu, India </p>
            <div className="opening-hours">
              <div>
                <span>Monday - Friday</span>
                <strong>9:00 AM - 10:00 PM</strong>
              </div>

              <div>
                <span>Saturday - Sunday</span>
                <strong>10:00 AM - 11:00 PM</strong>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="contact-faq">

        <div className="faq-heading">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to some common questions.</p>
        </div>

        <div className="faq-grid">

          <div className="faq-card">
            <div className="faq-number">
              01
            </div>

            <div>
              <h3>How can I place an order?</h3>
              <p>Simply browse our menu, choose your
                favourite dishes and click Add to Cart.</p>
            </div>
          </div>

          <div className="faq-card">
            <div className="faq-number">
              02
            </div>

            <div>
              <h3>
                How long does delivery take?</h3>
              <p>Most orders are delivered within
                20–40 minutes depending on your location.</p>
            </div>
          </div>

          <div className="faq-card">
            <div className="faq-number">
              03
            </div>

            <div>
              <h3>
                Can I cancel my order?</h3>
              <p>Orders can be cancelled shortly after
                placing them, before preparation begins.</p>
            </div>
          </div>

          <div className="faq-card">
            <div className="faq-number">
              04
            </div>

            <div>
              <h3>
                How can I share feedback?</h3>
              <p> Use the contact form above or email
                our support team directly.</p>
            </div>
          </div>
        </div>

      </section>

      <section className="contact-cta">

        <div>
          <span>STILL HUNGRY?</span>
          <h2>Let's Get You Something Delicious.</h2>
        </div>
        <Link to="/menu"><button>Explore Menu →</button></Link>

      </section>

    </>
  );
}

export default Contact;