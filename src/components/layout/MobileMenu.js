import React, { useEffect, useState } from "react";

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="23"
    height="23"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`mobile-chevron ${open ? "is-open" : ""}`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
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
    viewBox="0 0 24 24"
    width="19"
    height="19"
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

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.3 22l5.2-1.3A9.9 9.9 0 1 0 12 2Zm0 17.9a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5.2-.4c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.4.5.2.9.4 1.2.4.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
  </svg>
);

const navigation = [
  {
    label: "Home",
    href: "#home",
    children: [
      { label: "Homepage 1", href: "#home" },
      { label: "Homepage 2", href: "#home" },
    ],
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Our Dentists", href: "#dentists" },
      { label: "Appointment", href: "#appointment" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    label: "Blog",
    href: "#blog",
    children: [
      { label: "Latest Articles", href: "#blog" },
      { label: "Dental News", href: "#blog" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [activeDropdown, setActiveDropdown] = useState("Home");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const toggleDropdown = (label) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div
      className={`mobile-menu-overlay ${isOpen ? "is-visible" : ""}`}
      aria-hidden={!isOpen}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <aside
        className={`mobile-menu-panel ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Drawer Header */}
        <div className="mobile-menu-header">
          <a
            href="#home"
            className="mobile-menu-logo"
            onClick={handleLinkClick}
          >
            <svg
              viewBox="0 0 36 40"
              width="38"
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

            <span>
              <strong>Confident</strong>
              <small>Dental Care Clinic</small>
            </span>
          </a>

          <button
            type="button"
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Menu Navigation */}
        <nav className="mobile-menu-navigation" aria-label="Mobile navigation">
          <div className="mobile-menu-label">
            <span>Explore Menu</span>
            <span className="menu-label-line" />
          </div>

          {navigation.map((item, index) => {
            const hasChildren = Boolean(item.children?.length);
            const isExpanded = activeDropdown === item.label;

            return (
              <div
                className={`mobile-menu-group ${isExpanded ? "expanded" : ""}`}
                key={item.label}
                style={{ "--menu-index": index }}
              >
                <div className="mobile-menu-row">
                  {hasChildren ? (
                    <button
                      type="button"
                      className={`mobile-menu-link ${
                        isExpanded ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <ChevronIcon open={isExpanded} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className="mobile-menu-link"
                    >
                      <span>{item.label}</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  )}
                </div>

                {hasChildren && (
                  <div
                    className={`mobile-submenu ${
                      isExpanded ? "submenu-open" : ""
                    }`}
                  >
                    <div className="mobile-submenu-inner">
                      {item.children.map((child) => (
                        <a
                          href={child.href}
                          key={child.label}
                          onClick={handleLinkClick}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-dot" />
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact Area */}
        <div className="mobile-menu-bottom">
          <div className="mobile-menu-contact">
            <a href="tel:+1234567890" className="mobile-contact-item">
              <span className="mobile-contact-icon">
                <PhoneIcon />
              </span>
              <span>
                <small>Call Us Anytime</small>
                <strong>+1 234 - 4567 - 890</strong>
              </span>
            </a>

            <div className="mobile-contact-item">
              <span className="mobile-contact-icon">
                <LocationIcon />
              </span>
              <span>
                <small>Visit Our Clinic</small>
                <strong>St. Sanguin Number 40</strong>
              </span>
            </div>
          </div>

          {/* Appointment CTA */}
          <a
            href="#appointment"
            onClick={handleLinkClick}
            className="mobile-menu-appointment"
          >
            Book An Appointment
            <span aria-hidden="true">↗</span>
          </a>

          {/* Social Links */}
          <div className="mobile-menu-social">
            <span className="social-heading">Follow Us</span>

            <div className="mobile-social-links">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <p className="mobile-menu-copyright">
            © {new Date().getFullYear()} Confident Dental Care
          </p>
        </div>
      </aside>
    </div>
  );
}
