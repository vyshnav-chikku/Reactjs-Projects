import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../pagination/CustomPagination";
import SingleContent from "../../Singlecontent/SingleContent";

const darktheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const SearchBar = () => {
  const [type, settype] = useState(0);
  const [page, setpage] = useState(1);
  const [searchtext, setsearchtext] = useState("");
  const [content, setcontent] = useState([]);
  const [noofpages, setnoofpages] = useState(1);

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US&query=${searchtext}&page=${page}&include_adult=false`
      );
      setcontent(data.results);
      setnoofpages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, newValue) => {
    settype(newValue);
    setpage(1);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <ThemeProvider theme={darktheme}>
        <div style={{ margin: "15px 0", display: "flex" }}>
          <TextField
            label="Search"
            variant="filled"
            style={{ flex: 1 }}
            className="searchbox"
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <Search />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab style={{ width: "50%" }} label="SearchMovies" />
          <Tab style={{ width: "50%" }} label="SearchSeries" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              media_type={type ? "tv" : "movie"}
              title={c.name || c.title}
              date={c.release_date || c.first_air_date}
              vote={c.vote_average}
            />
          ))}
        {searchtext &&
          !content &&
          (type ? <h2>NO Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {noofpages > 1 && (
        <CustomPagination setPage={setpage} noOfPages={noofpages} />
      )}
    </div>
  );
};

export default SearchBar;
