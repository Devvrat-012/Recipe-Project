import React from "react";

export default function CreateRecipe() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col md:flex-row justify-center m-7 p-7 gap-5">
        <div className="flex flex-col gap-5 md:min-w-80">
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Title"
            minlength="3"
            maxlength="100"
            className="border p-2 rounded-lg"
          />
          <textarea
            id="description"
            className="border p-2 rounded-lg"
            placeholder="Description"
            name="description"
            required
          ></textarea>
          <textarea
            className="border p-2 rounded-lg"
            id="instructions"
            placeholder="Instructions "
            name="instructions"
            required
          ></textarea>
          <div className="flex items-center justify-between gap-2">
            <label className="font-semibold" for="category">
              Category:
            </label>
            <select
              className="border w-full p-2 rounded"
              id="category"
              name="category"
              required
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
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-green-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
