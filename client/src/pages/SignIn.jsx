import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import OAuth from "./OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/auth/signIn", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setLoading(false);
      const data = res.data;

      if (data.success === false) {
        setError(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.message === "Request failed with status code 404") {
        setError("User not found!");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center  p-10">
          <span className="text-2xl p-1 px-2 font-semibold">Sign IN</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-8 border rounded-lg mx-2 p-5 md:mx-32 lg:mx-96 bg-slate-200"
        >
          <img className="h-16 w-16" src="/images/logo.png" alt="logo" />
          <input
            id="email"
            type="email"
            required
            placeholder="Email"
            className="py-2 px-5 border rounded-lg"
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            required
            placeholder="Password"
            className="py-2 px-5 border rounded-lg"
            onChange={handleChange}
          />
          <button
            // disabled={loading}
            className="bg-slate-500 p-2 text-white rounded-lg hover:bg-slate-400"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="flex justify-center p-5 gap-3">
          <p>Don't have an account?</p>
          <Link to="/signUp" className="text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
      {error && <p className="text-red-700 pt-5">{error}</p>}
    </div>
  );
}
