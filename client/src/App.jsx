import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import axios from "axios";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreateRecipe from "./pages/CreateRecipe.jsx";
import UpdateRecipe from "./pages/UpdateRecipe.jsx"
import UserRecipe from "./pages/UserRecipe.jsx";
import Recipes from "./pages/Recipes.jsx";

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://server-five-indol.vercel.app/";

export default function App() {
  return (
    <div id="App" className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<UserRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
            <Route path="/updateRecipe/:recipeId" element={<UpdateRecipe />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
