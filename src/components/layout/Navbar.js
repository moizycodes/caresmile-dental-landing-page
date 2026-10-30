import React, { useState } from "react";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 5 5" />
  </svg>
);

const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Our Dentists", href: "#dentists" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Appointment", href: "#appointment" },
    ],
  },
  {
    label: "Blog",
    href: "#blog",
    dropdown: [
      { label: "Latest Articles", href: "#blog" },
      { label: "Dental News", href: "#blog" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();
    if (!query) return;

    const section = document.getElementById(query.replace(/\s+/g, "-"));

    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-wrapper">
      <nav className="header-container navbar-inner">
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li className="navbar-item" key={link.label}>
              <a
                href={link.href}
                className={`navbar-link ${index === 0 ? "active" : ""}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown />}
              </a>

              {link.dropdown && (
                <div className="navbar-dropdown">
                  {link.dropdown.map((item) => (
                    <a href={item.href} key={item.label}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search website"
          />

          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>
      </nav>
    </div>
  );
}
