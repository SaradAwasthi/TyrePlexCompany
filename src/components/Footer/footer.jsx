import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css'; 

function Footer() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Social Media Links */}
        <div className="footer-logo-social">
          <img
            className="footer-logo"
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
            alt="TyrePlex"
          />
          <ul className="social-links">
            <li>
              <button onClick={() => window.location.href = 'https://www.facebook.com/tyreplex'} title="Facebook">
                <FaFacebook className="social-icon" />
              </button>
            </li>
            <li>
              <button onClick={() => window.location.href = 'https://www.instagram.com/ontyreplex'} title="Instagram">
                <FaInstagram className="social-icon" />
              </button>
            </li>
          </ul>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-section">
            <h6 className="section-title">About Us</h6>
            <ul className="link-list">
              <li><Link to="/about-us" className="footer-link">Who We Are</Link></li>
              <li><Link to="/dealer-details" className="footer-link">Are you a Tyre Dealer?</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h6 className="section-title">Legal</h6>
            <ul className="link-list">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="footer-link">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h6 className="section-title">Contact</h6>
            <ul className="link-list">
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/career" className="footer-link">Career</Link></li>
              <li><Link to="/shipping-return-policy" className="footer-link">Shipping & Return Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
