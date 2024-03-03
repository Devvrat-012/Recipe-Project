import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-600 text-white py-8 mx-2 rounded-lg ">
      <div className="flex justify-center mb-5 md:hidden gap-6">
        <Link className="link-component" to="/">
          Home
        </Link>
        <Link className="link-component" to="/about">
          About
        </Link>
        <Link className="link-component" to="/contact">
          Contact
        </Link>
      </div>
      <div className="container mx-5 flex flex-col gap-2 md:flex-row items-center justify-between">
        <div className="text-sm">
          &copy; {year} <span className="font-bold">FoodieDev.</span> All Rights
          Reserved.
        </div>
        <p className="mr-7 md:text-right">We are comitted to serve you!</p>
      </div>
    </footer>
  );
}
