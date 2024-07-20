import React from "react";
import "./MobilePopup.css";

const MobilePopup = () => {
  const handleClose = () => {
    document.getElementById("mobile-popup").style.display = "none";
  };

  return (
    <div id="mobile-popup" className="mobile-popup">
      <div className="popup-content">
        <p>
          Your portfolio is best viewed on a desktop. Please switch to a desktop
          for the full experience.
        </p>
        <button id="close-popup" className="close-popup" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MobilePopup;
