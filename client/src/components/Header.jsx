import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-pink-400 p-7 flex justify-between mx-2 rounded-lg">
      <div className="flex items-center gap-1">
        <img src="/images/logo.png" className="h-10" />
        <span className="text-slate-700 text-xl font-bold">Foodie</span>
        <span className="text-black text-xl font-bold">Dev</span>
      </div>

      <div className="flex gap-4">
        <Link
          to="/list"
          className="text-lg font-semibold border border-pink-400 rounded-lg px-3  link-component"
        >
          Recipes
        </Link>
        <Link
          to="/about"
          className="text-lg font-semibold border border-pink-400 rounded-lg px-3 link-component"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg font-semibold border border-pink-400 rounded-lg px-3 link-component"
        >
          Contact
        </Link>
      </div>
      <span className="text-xl text-black font-bold hover:cursor-pointer hover:text-slate-500 link-component ">
        <Link to="/signIn">
          <i className="fa fa-sign-in" aria-hidden="true">
            Sign In
          </i>
        </Link>
      </span>
    </div>
  );
}
