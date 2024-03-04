import { Link } from "react-router-dom";

export default function Heroes() {
  return (
    <div>
      <div className="flex justify-center m-10 md:p-20 mx-2">
        <p className="text-2xl md:text-4xl lg:text-5xl font-sans font-extrabold opacity-60">
          We Provide
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-sans font-extrabold opacity-90">
          {" "}
          'The Best Recipe'
        </p>
      </div>
      <div className="mx-2 h-96">
        <img className="w-full h-full rounded-lg" src="/images/img10.jpg" alt="food-photo" />
      </div>
      <div className="p-10 md:p-20 flex justify-center">
        <span className="text-2xl md:text-5xl font-sans font-extrabold opacity-90">
          Choose Your Favorite!😋
        </span>
      </div>

      <div className="flex md:grid md:grid-cols-3 flex-col md:flex-row gap-10">
        <div className="flex flex-col">
          <img
            src="/images/img4.webp"
            alt="Chinese Burger"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">Chinese Burger</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/img7.webp"
            alt="Indian Paneer"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">Indian Paneer</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/img6.jpg"
            alt="French Burger"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">French Burger</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/img4.webp"
            alt="Chinese Burger"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">Chinese Burger</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/img7.webp"
            alt="Indian Paneer"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">Indian Paneer</span>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/img6.jpg"
            alt="French Burger"
            className="rounded-lg w-full h-96"
          />
          <div className="py-2 text-center">
            <span className="font-bold text-2xl">French Burger</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20 ">
        <Link to="/recipes">
          <i className=" fa fa-angle-double-right text-2xl font-bold text-white bg-yellow-500 p-2 rounded-lg hover:bg-yellow-400 link-component">
            Recipe List
          </i>
        </Link>
      </div>
    </div>
  );
}
