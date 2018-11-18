import React from "react";

const Footer = () => {
  return (
    <div className="uk-text-center uk-text-small uk-text-muted footer">
      <p className="small">
        {"made by "}
        <a href="https://github.com/MikhailKarpov87/" target="_blank" rel="noopener noreferrer">
          Mihanik87
        </a>
      </p>
      <p className="small">
        <a
          href="https://github.com/MikhailKarpov87/bikes-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
