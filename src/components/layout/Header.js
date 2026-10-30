import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const LocationIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L9 11a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-container header-top-inner">
          <a href="#home" className="clinic-logo">
            <svg
              viewBox="0 0 36 40"
              width="37"
              height="40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 3C10 3 4 7 4 15c0 8 4 18 9 22 3 2 4-5 5-10 1 5 2 12 5 10 5-4 9-14 9-22C32 7 26 3 18 3Z"
                stroke="#2878e5"
                strokeWidth="2"
              />
              <path
                d="M10 10c3-3 8-4 13-2"
                stroke="#2878e5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <span className="clinic-logo-text">
              <strong>Confident</strong>
              <small>Dental Care Clinic</small>
            </span>
          </a>

          <div className="header-contact">
            <div className="header-contact-item">
              <LocationIcon />
              <span>St. Sanguin Number 40</span>
            </div>

            <a href="tel:+1234567890" className="header-contact-item">
              <PhoneIcon />
              <span>+1 234 - 4567 - 890</span>
            </a>

            <a href="#appointment" className="header-appointment">
              Appointment
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <Navbar />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
