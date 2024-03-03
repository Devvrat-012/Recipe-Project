import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center my-5">
        About Delicious Food
      </h1>
      <main className="flex flex-col items-center md:flex-row m-2 gap-10">
        <div className="w-full items-center flex flex-col ">
          {" "}
          <p className="text-gray-700 text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mattis aliquam sem. Pellentesque interdum nisl sed nulla tincidunt,
            vitae tincidunt ligula egestas. Nunc sed orci ante. Donec a diam
            lectus. Aenean euismod bibendum laoreet. Proin gravida dolor sit
            amet laoreet.
          </p>
          <p className="text-gray-700 text-xl">
            Phasellus eget enim eu lectus cursus viverra. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
          </p>
        </div>
        <img
          src="/images/img5.webp"
          alt="Delicious Food Photo"
          className="rounded-3xl w-3/4 md:w-1/2 lg:w-1/3 h-3/4 md:h-1/2 object-cover"
        />
      </main>
      <div className="text-center ">
        <Link
          to="/contact"
          className="fa fa-contact px-4 py-3 my-5 bg-yellow-500 text-white hover:bg-yellow-700 rounded-md link-component"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
