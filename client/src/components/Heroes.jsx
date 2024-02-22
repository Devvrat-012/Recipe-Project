import { Link } from "react-router-dom";

export default function Heroes() {
  return (
    <div>
      <div className="flex justify-center p-20 mx-2">
        <span className="text-5xl font-sans font-extrabold opacity-60">
          We Provide
        </span>
        <span className="text-5xl font-sans font-extrabold opacity-90">
          {" "}
          'The Best Recipe'
        </span>
      </div>
      <div className="h-96 overflow-hidden mx-2 rounded-lg">
        <img className="w-full" src="/images/img1.jpg" alt="food-photo" />
      </div>
      <div className="p-20 flex justify-center">
        <span className="text-5xl font-sans font-extrabold opacity-90">
          Choose Your Favorite!😋
        </span>
      </div>

      <div className="container mx-2 ">
        <div className="grid grid-cols-3 gap-5">
          <div className="card">
            <img
              src="/images/img4.webp"
              alt="Chinese Burger"
              className="rounded-lg w-full h-96"
            />
            <div className=" py-2 text-center">
              <span className="font-bold text-2xl ">Chinese Burger</span>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/img7.webp"
              alt="Indian Paneer"
              className="rounded-lg w-full h-96"
            />
            <div className=" py-2 text-center">
              <span className="font-bold text-2xl">Indian Paneer</span>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/img6.jpg"
              alt="French Burger"
              className="rounded-lg w-full h-96"
            />
            <div className=" py-2 text-center">
              <span className="font-bold text-2xl">French Burger</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20 ">
        <Link to="/recipe">
          <i className=" fa fa-angle-double-right text-2xl font-bold text-white bg-yellow-500 p-2 rounded-lg hover:bg-yellow-400 link-component">
            Recipe List
          </i>
        </Link>
      </div>
    </div>
  );
}
