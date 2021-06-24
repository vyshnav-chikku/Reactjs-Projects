import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SimpleBottomNavigation from "./components/bottom_navigation";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import Trending from "./components/pages/Trending/Trending";
import TvSeries from "./components/pages/Tvseries/TvSeries";
import Movies from "./components/pages/movies/Movies";
import SearchBar from "./components/pages/search/search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Route path="/" exact component={Trending} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvseries" component={TvSeries} />
          <Route path="/search" component={SearchBar} />
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
