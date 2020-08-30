import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);
            }else setShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://occ-0-3740-2705.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png"
        alt="Netflix Avarta"
        className="nav__avarta"
      />
    </div>
  );
}

export default Nav;
