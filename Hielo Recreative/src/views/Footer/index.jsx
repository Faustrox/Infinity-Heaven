import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaRegEnvelope,
} from 'react-icons/fa';
import './style.scss';

export default function Index() {
  return (
    <footer id="footer" className="center">
      <section className="icons-container">
        <FaTwitter size="30" className="icon" />
        <FaFacebookF size="30" className="icon" />
        <FaInstagram size="30" className="icon" />
        <FaRegEnvelope size="30" className="icon" />
      </section>
      <section className="copyright">
        © Untitled. All rights reserved.
      </section>
    </footer>
  );
}
