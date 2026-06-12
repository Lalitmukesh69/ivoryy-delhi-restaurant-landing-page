import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import BookingForm from '../BookingForm/BookingForm';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookTable = (e) => {
    e.preventDefault();
    setShowBookingForm(true);
    setToggleMenu(false);
  };

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <span style={{ fontFamily: 'var(--font-base)', color: 'var(--color-crimson)', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Ivory Delhi</span>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="/login" className="p__opensans">Log In / Registration</a>
          <div />
          <a href="/" className="p__opensans" onClick={handleBookTable}>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#4A4A4A" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)} className="p__opensans">Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)} className="p__opensans">About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)} className="p__opensans">Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)} className="p__opensans">Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)} className="p__opensans">Contact</a></li>
                <li><a href="#login" onClick={() => setToggleMenu(false)} className="p__opensans">Log In / Registration</a></li>
                <li><a href="/" onClick={handleBookTable} className="p__opensans">Book Table</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} />
      )}
    </>
  );
};

export default Navbar;
