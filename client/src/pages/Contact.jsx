import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/contact/sendMessage',
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const data = res.data;
      if (data.success === false) {
        setError(data.message);
      }
      setMessage("Message sent successfully!")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="m-2 p-8 grid grid-cols-2 rounded-lg bg-slate-100">
        <div>
          <h1 className="font-semibold text-xl mb-10">Contact Us :</h1>
          <div className="mt-5">
            <span className="font-semibold">Address:</span>
            <p>SLIET Longowal</p>
          </div>
          <div className="mt-5">
            <span className="font-semibold">Email:</span>
            <p>starkji555@gmail.com</p>
          </div>
          <div className="mt-5">
            <span className="font-semibold">Phone:</span>
            <p>+91 93307643079</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="border p-2"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="border p-2"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Message"
              required
              className="border p-2"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-slate-500 p-2 rounded-md hover:opacity-80"
          >
            Send Message
          </button>
        </form>
        {message && <p className="text-green-700">{message}</p>}
        {error && <p className="text-red-700">{error}</p>}
      </div>
    </div>
  );
}
