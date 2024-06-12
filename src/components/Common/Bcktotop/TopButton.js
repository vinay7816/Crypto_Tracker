import React, { useEffect, useRef } from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpward';
import "./TopButton.css";

function TopButton() {
  const mybuttonRef = useRef(null);

  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybuttonRef.current.style.display = "flex";
      } else {
        mybuttonRef.current.style.display = "none";
      }
    }

    window.onscroll = scrollFunction;

    // Clean up the event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className="top-btn"
      id="top-btn"
      ref={mybuttonRef}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default TopButton;
