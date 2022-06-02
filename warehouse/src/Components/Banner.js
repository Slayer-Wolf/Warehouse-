import * as React from "react";
import { useEffect, useState } from "react";
import "./banner.css";

export default function Banner() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
  <div className="main">
      <section className="hero">
        <img
          src="https://millionsquarefeet.in/wp-content/uploads/2021/10/pricing-banner.jpg"
          alt="test"
          className="parallax"
          style={{
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">Subscription Plan</h1>
    
        </div>
      </section>
	  </div>

  );
}

