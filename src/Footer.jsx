import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h3>OFFLINE STORE</h3>
        <a href="#">Find Stores Near Me</a>
      </div>
      <div class="footer-section">
        <h3>GET TO KNOW US</h3>
        <a href="#">Contact Us</a>
        <a href="#">FAQ's</a>
        <a href="#">Blogs</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <div class="footer-section">
        <h3>TRACK OR RETURN/EXCHANGE ORDER</h3>
        <a href="#">TRACK ORDER</a>
        <a href="#">PLACE RETURN/EXCHANGE REQUEST</a>
        <a href="#">RETURNS/EXCHANGE POLICY</a>
      </div>
      <div class="footer-section">
        <h3>CUSTOMER CARE</h3>
        <p>Timings: 10 AM - 7 PM (Mon - Sat)</p>
        <p>Whatsapp: +91 6364430801</p>
        <p>Instagram: <a href="https://www.instagram.com/snitch.co.in">@snitch.co.in</a></p>
      </div>
    </div>

    <div class="footer-subscribe">
      <h3>SIGN UP AND SAVE</h3>
      <p>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>
      <form>
        <input type="email" placeholder="Enter your email"/>
        <button type="submit">&#9993;</button>
      </form>
    </div>

    <div class="footer-social">
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
      <a href="#"><i class="fab fa-pinterest"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 SNITCH</p>
      <p>Made in India, for the World 🌎</p>
    </div>
  </footer>
  )
}

export default Footer