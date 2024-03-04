import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice.js";
import { useState } from "react";

export default function OAuth() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(
        "/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials:true,
        }
      );

      const data = res.data;
      if (data.success === false) {
        setError(data.message);
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log("Could not sign in with google!", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="bg-red-500 text-white uppercase p-2 rounded-lg font-semibold"
      >
        Continue with google
      </button>
      <p className="text-red-700 pt-5" >{error && error}</p>
    </div>
  );
}
