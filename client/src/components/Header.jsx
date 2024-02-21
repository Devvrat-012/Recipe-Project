import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-pink-400 p-5 flex justify-between mx-2 rounded-lg">
      <div>
        <span className="text-slate-700 text-xl font-bold">Foodie</span>
        <span className="text-black text-xl font-bold">Dev</span>
      </div>

      <div className="flex gap-4">
        <Link
          to="/list"
          className="text-lg font-semibold border border-pink-400 rounded-lg px-3  link-component"
        >
          Lists
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
      <span className="text-xl text-black font-bold hover:cursor-pointer hover:text-slate-500 ">
        <Link to="/signIn">
          <i className="fa fa-sign-in" aria-hidden="true">
            Sign In
          </i>
        </Link>
      </span>
    </div>
  );
}
