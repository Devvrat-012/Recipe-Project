import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice.js";
import { app } from "../firebase.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const { currentUser, loading } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showRecipesError, setShowRecipesError] = useState(false);
  const [userRecipes, setUserRecipes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axios.post(
        `/user/update/${currentUser._id}`,
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
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteUser = async () => {
    dispatch(deleteUserStart());
    try {
      const res = await axios.delete(`/user/delete/${currentUser._id}`, {
        withCredentials: true,
      });

      const data = res.data;
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate("/signIn");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await axios.get("/auth/signOut");
      const data = res.data;
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleShowRecipes = async () => {
    try {
      setShowRecipesError(false);
      const res = await axios.get(`/user/recipes/${currentUser._id}`, {
        withCredentials: true,
      });
      const data = res.data;
      if (data.success === false) {
        setShowRecipesError(true);
        return;
      }

      setUserRecipes(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRecipeDelete = async (recipeId) => {
    try {
      const res = await axios.delete(`/recipe/deleteRecipe/${recipeId}`, {
        withCredentials: true,
      });
      const data = res.data;
      if (data.success === false) {
        return;
      }
      setUserRecipes((prev) =>
        prev.filter((recipe) => recipe._id !== recipeId)
      );
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          hidden
          accept="image/*"
          type="file"
          ref={fileRef}
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profilePhoto"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image upload! (Image must be less than 2 MB!)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>{" "}
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
          to={"/createRecipe"}
        >
          Create Recipe
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span
          onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer link-component"
        >
          Delete account
        </span>
        <span
          onClick={handleSignOut}
          className="text-red-700 cursor-pointer link-component"
        >
          Sign out
        </span>
      </div>
      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "User is updated successfully!" : ""}
      </p>
      <button onClick={handleShowRecipes} className="text-green-700 w-full">
        Show Recipes
      </button>
      <p className="text-red-700 mt-5">
        {showRecipesError ? "Error showing recipes" : ""}
      </p>

      {userRecipes && userRecipes.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">
            Your Recipes
          </h1>
          {userRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <Link to={`/recipe/${recipe._id}`}>
                <img
                  src={recipe.imageUrls[0]}
                  alt="recipe cover"
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                to={`/recipe/${recipe._id}`}
              >
                <p>{recipe.title}</p>
              </Link>

              <div className="flex flex-col item-center">
                <button
                  onClick={() => handleRecipeDelete(recipe._id)}
                  className="text-red-700 uppercase"
                >
                  Delete
                </button>
                <Link to={`/updateRecipe/${recipe._id}`}>
                  <button className="text-green-700 uppercase">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
