import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          {/* Home screen */}
          <Route exact path="/" component={HomeScreen} />
          {/* Products screen */}
          <Route exact path="/products" component={ProductsScreen} />
          {/* Product screen */}
          <Route exact path="/product/:id" component={ProductScreen} />
          {/* Cart screen */}
          <Route exact path="/cart" component={CartScreen} />
          {/* Login page */}
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
