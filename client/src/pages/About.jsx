import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container mx-auto"> 
      <Header />
      <main className="flex flex-col md:flex-row m-5 gap-10"> 
        <div className="w-full md:w-1/2"> 
          <h1 className="font-semibold text-2xl mb-5">About Delicious Food</h1>
          <p className="text-gray-700 text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis aliquam sem. Pellentesque interdum nisl sed nulla tincidunt, vitae tincidunt ligula egestas. Nunc sed orci ante. Donec a diam lectus. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet laoreet.
          </p>
          <p className="text-gray-700 text-xl">
            Phasellus eget enim eu lectus cursus viverra. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
          </p>
        </div>
        <div className="w-1/2 md:w-2/4">
          <img
            src="/images/img5.webp"
            alt="Delicious Food Photo"
            className="rounded-lg h-3/4 object-cover" 
          />
        </div>
      </main>
      <div className="text-center ">
        <Link to="/contact" className="fa fa-contact px-4 py-3 my-5 bg-yellow-500 text-white hover:bg-yellow-700 rounded-md link-component">
          Contact Us
        </Link>
      </div>
      <Footer />
    </div>
  );
}
