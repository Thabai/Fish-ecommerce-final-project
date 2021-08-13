import "./App.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import LoginScreen from "./screens/LoginScreen";
import Profile from "./screens/Profile";
import Admin from "./screens/Admin";
import { authUser } from "./utils";

// Components
import Navbar from './components/Navbar';

const App = () => {
const [user, setUser] = useState();
const [admin, setAdmin] = useState();
const [stock, setStock] = useState([]);

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
            <ProductsScreen user={user} setUser={setUser} />
          </Route>
          {/* Product screen */}
          <Route exact path="/product/:id">
            <SingleProductScreen user={user} setUser={setUser} />
          </Route>
          {/* Cart screen */}
          <Route exact path="/cart">
            <CartScreen user={user} setUser={setUser} />
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
        </Switch>
      </main>
    </Router>
  );
}

export default App;
