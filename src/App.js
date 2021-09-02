import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
// VIEWS
import Navbar from "./Views/Navbar";
import Footer from "./Views/Footer";
//COMPONENTS
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
// import Weather from "./Components/weather";
// CSS
import "./App.css";
// Context
export const FavoritesContext = createContext();

const App = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  return (
    <BrowserRouter>
      <FavoritesContext.Provider value={{ favoriteCities, setFavoriteCities }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
        <Footer />
      </FavoritesContext.Provider>
    </BrowserRouter>
  );
};

export default App;