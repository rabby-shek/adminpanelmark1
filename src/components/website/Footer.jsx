import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
const Footer = () => {
  const footerLinkIcons = [
    {
      id: 1,
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      icon: <FaTwitter />,
    },
    {
      id: 3,
      icon: <FaGoogle />,
    },
    {
      id: 4,
      icon: <FaInstagram />,
    },
    {
      id: 5,
      icon: <FaLinkedinIn />,
    },
    {
      id: 6,
      icon: <FaGithub />,
    },
  ];
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {footerLinkIcons.map((item) => {
            return (
              <a
                data-mdb-ripple-init
                className="btn btn-floating m-1 footer-icon-container"
                href="#!"
                role="button"
                key={item.id}
              >
                {item.icon}
              </a>
            );
          })}
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {year} Copyright :
        <a
          className="text-body"
          href="https://rabby-shek.github.io/suvo-portfolio/"
        >
           MD Rabby Shek Suvo
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
