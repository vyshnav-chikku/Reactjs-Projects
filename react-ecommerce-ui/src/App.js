import "./App.css";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/productlist" component={ProductList} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;
