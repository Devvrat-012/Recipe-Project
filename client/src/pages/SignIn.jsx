import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function SignIn() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center">
        <div className="flex justify-center  p-10">
          <span className="text-2xl p-1 px-2 font-semibold">Sign IN</span>
        </div>
        <form className="flex items-center flex-col gap-8 border rounded-lg py-10 mx-96 bg-slate-200">
          <img className="h-16 w-16" src="/images/logo.png" alt="logo" />
          <input
            id="email"
            type="email"
            required
            placeholder="Email"
            className="py-2 px-5 border rounded-lg"
          />
          <input
            id="password"
            type="password"
            required
            placeholder="Password"
            className="py-2 px-5 border rounded-lg"
          />
          <button className="bg-slate-500 p-2 text-white rounded-lg hover:bg-slate-400">
            Sign In
          </button>
        </form>
        <div className="flex justify-center p-5 gap-3">
          <p>Don't have an account?</p>
          <Link to="/signUp" className="text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
