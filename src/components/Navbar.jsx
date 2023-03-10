import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <>
        <div className="p-6 shadow-sm border-b">
          <div className="flex justify-around items-center">
            <img src={Logo} width="12%" alt="logo" />
            <div>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 border-black rounded-xl w-96 p-2 placeholder:font-sans"
                placeholder="What do you want to learn?"
              />
            </div>
            <div className="flex justify-between items-center gap-10 font-semibold">
              <Link to="/">Become a creator</Link>
              <Link to="/">Login</Link>
              <Link to="Signup" className="px-6 py-1.5 rounded-xl border-2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </>
      <Outlet />
    </>
  );
};

export default Navbar;
