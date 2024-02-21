import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx"

export default function App() {
  return (
    <div className="p-1"> 
      <BrowserRouter>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
  