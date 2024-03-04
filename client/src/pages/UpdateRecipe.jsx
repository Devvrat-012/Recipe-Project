import { useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateRecipe() {
  const [files, setFiles] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    imageUrls: [],
    title: "",
    description: "",
    instructions: "",
    category: "Breakfast",
    userRef: currentUser._id,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const fetchRecipe = async () => {
    const recipeId = params.recipeId;
    const res = await axios.get(`/recipe/get/${recipeId}`, {withCredentials:true} );
    const data = res.data;
    if(data.success === false){
      setError(data.message);
      return;
    }
    setFormData(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 5) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else if (files.length === 0) {
      setImageUploadError("Upload at least one image!");
      setUploading(false);
    } else {
      setImageUploadError("You can only upload 4 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      const res = await axios.put(
        `/recipe/updateRecipe/${params.recipeId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const data = res.data;
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/recipe/${params.recipeId}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Update Your Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center m-7 p-7 gap-5"
      >
        <div className="flex flex-col gap-5 md:min-w-80">
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Title"
            minLength="3"
            maxLength="100"
            className="border p-2 rounded-lg"
            onChange={handleChange}
            value={formData.title}
          />
          <textarea
            id="description"
            className="border p-2 rounded-lg"
            placeholder="Description"
            name="description"
            required
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <textarea
            className="border p-2 rounded-lg"
            id="instructions"
            placeholder="Instructions "
            name="instructions"
            required
            onChange={handleChange}
            value={formData.instructions}
          ></textarea>
          <div className="flex items-center justify-between gap-2">
            <label className="font-semibold">Category:</label>
            <select
              className="border w-full p-2 rounded"
              id="category"
              name="category"
              required
              onChange={handleChange}
              value={formData.category}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Snacks">Snacks</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              You can upload upto 4 images!
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
            <button
              type="button"
              disabled={uploading}
              onClick={handleImageSubmit}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                >
                  Delete
                </button>
              </div>
            ))}
          <button
            disabled={loading || uploading}
            className="p-3 bg-green-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Updating..." : "Update Recipe"}
          </button>
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
      </form>
    </main>
  );
}
