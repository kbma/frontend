import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Contact from "./components/Contact.jsx";
import Service from "./components/Service";
import { useState } from "react";
function App() {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/acceuil">Acceuil</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">service</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/acceuil"
            element={<Acceuil />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/service"
            element={<Service />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
