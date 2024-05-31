import React from "react";
import Logo from "../assets/imdb-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3">
      <img src={Logo} className="w-[120px]" />
      <Link to="/">Movies</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
};

export default Navbar;
