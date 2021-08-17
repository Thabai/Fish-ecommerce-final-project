import "./App.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import {SingleProductScreen} from "./screens/SingleProductScreen";
import LoginScreen from "./screens/LoginScreen";
import Profile from "./screens/Profile";
import Admin from "./screens/Admin";
import PaypalScreen from "./screens/PaypalScreen";
import { authUser } from "./utils";

// Components
import Navbar from './components/Navbar';

const App = () => {
const [user, setUser] = useState();
const [admin, setAdmin] = useState();
const [stock, setStock] = useState([]);
const [basket, setBasket] = useState([]);


useEffect(() => {
  authUser(setUser);
}, [user]);

  return (
    <Router>
      <Navbar user={user} admin={admin} />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          {/* Home screen */}
          <Route exact path="/">
            <HomeScreen stock={stock} setStock={setStock} />
          </Route>
          {/* Products screen */}
          <Route exact path="/products">
            <ProductsScreen
              stock={stock}
              setStock={setStock}
              basket={basket}
              setBasket={setBasket}
            />
          </Route>
          {/* Product screen */}
          <SingleProductScreen stock={stock} />
          {/* Cart screen */}
          <Route exact path="/cart">
            <CartScreen user={user} basket={basket} setBasket={setBasket} />
          </Route>
          {/* Login page */}
          <Route exact path="/login">
            <LoginScreen
              user={user}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
            />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route exact path="/admin">
            <Admin
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
              stock={stock}
              setStock={setStock}
            />
          </Route>
          <Route exact path="/paypal">
            <PaypalScreen />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
