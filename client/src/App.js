import React, {useState, createContext, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/homePage";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";
import ForgotPassword from "./components/forgotPassword";
import MenuPage from "./components/menuPage";
import Contacts from "./components/contacts";
import About from "./components/About";
import NotFound from "./components/notFound";
import BreakfastDetails from "./components/menuPage/breakfastDetails"
import LunchDetails from "./components/menuPage/lunchDetails"
import SnackMenu from "./components/menuPage/snacksDetails"
import DrinkMenu from "./components/menuPage/drinksDetails";
import DinnerMenu from "./components/menuPage/dinnerDetails";

export const store = createContext();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <store.Provider value={[token, setToken]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />}/>
          <Route exact path="/menu" element={<MenuPage />}/>
          <Route exact path="/menubreakfast" element={<BreakfastDetails />}/>
          <Route exact path="/menulunch" element={<LunchDetails/>}/>
          <Route exact path="/menusnack" element={<SnackMenu/>}/>
          <Route exact path="/menudinner" element={<DinnerMenu/>}/>
          <Route exact path="/menumoctails" element={<DrinkMenu/>}/>
          <Route exact path="/contacts" element={<Contacts />}/>
          <Route exact path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </store.Provider>
  );
}

export default App;
