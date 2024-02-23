import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-pink-400 p-7 flex justify-between mx-2 rounded-lg sticky top-0 left-0 w-full z-50">
      <div className="flex items-center gap-1">
        <img src="/images/logo.png" className="h-10" />
        <span className="text-slate-700 text-xl md:text-2xl lg:text-3xl font-bold">
          Foodie
        </span>
        <span className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
          Dev
        </span>
      </div>

      <div className="hidden md:block">
        <NavLink
          to="/"
          className={({ isActive }) => {
            const baseClass =
              "md:text-lg lg:text-2xl font-semibold rounded-lg px-3 link-component";
            return isActive
              ? `${baseClass} text-white text-lg md:text-2xl`
              :`${baseClass}`;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipe"
          className={({ isActive }) => {
            const baseClass =
              "md:text-lg lg:text-2xl font-semibold rounded-lg px-3 link-component";
            return isActive
              ? `${baseClass} text-white`
              :`${baseClass}`;
          }}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            const baseClass =
              "md:text-lg lg:text-2xl font-semibold rounded-lg px-3 link-component";
            return isActive
              ? `${baseClass} text-white`
              :`${baseClass}`;
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            const baseClass =
              "md:text-lg lg:text-2xl font-semibold rounded-lg px-3 link-component";
            return isActive
              ? `${baseClass} text-white`
              :`${baseClass}`;
          }}
        >
          Contact
        </NavLink>
      </div>
      <span className="text-xl md:text-2xl text-black font-bold hover:cursor-pointer hover:text-slate-500 link-component">
        <NavLink
          to="/signIn"
          className={({ isActive }) => {
            const baseClass =
              "md:text-lg lg:text-2xl font-semibold rounded-lg px-3 link-component";
            return isActive
              ? `${baseClass} text-white`
              :`${baseClass}`;
          }}
        >
          <i className="fa fa-sign-in">
            Sign In
          </i>
        </NavLink>
      </span>
    </div>
  );
}
