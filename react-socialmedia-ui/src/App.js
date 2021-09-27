import "./App.css";
import Navbar from "./components/Navbar";
import Profileuser from "./components/Profileuser";
import Userfriends from "./components/Userfriends";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profilepage from "./pages/Profilepage";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profilepage} />
      </div>
    </Router>
  );
}

export default App;
