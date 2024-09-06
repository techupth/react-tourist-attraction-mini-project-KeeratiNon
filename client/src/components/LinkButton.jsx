import React, { useState } from "react";

const LinkButton = ({ url }) => {
  const [link, setLink] = useState("Link 🔗");
  const handleClick = () => {
    navigator.clipboard.writeText(url);
    setLink("Copied ♾️");
    setTimeout(() => {
      setLink("Link 🔗");
    }, 2000);
  };
  return (
    <a href="#" className="copy-link" onClick={handleClick}>
      {link}
    </a>
  );
};

export default LinkButton;
