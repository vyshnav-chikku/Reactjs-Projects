import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenre from "../../../hooks/useGenre";
import Genres from "../../Genres";
import CustomPagination from "../../pagination/CustomPagination";
import SingleContent from "../../Singlecontent/SingleContent";
import "./Movie.css";

const Movies = () => {
  const [content, setcontent] = useState([]);
  const [page, setpage] = useState(1);
  const [noOfpages, setnoOfpages] = useState(1);
  const [selectedGenre, setselectedGenre] = useState([]);
  const [Genre, setGenre] = useState([]);
  const genreforurl = useGenre(selectedGenre);

  const fetchMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
        page +
        "&with_watch_monetization_types=flatrate&with_genres=" +
        genreforurl
    );
    console.log(data);
    setcontent(data.results);
    setnoOfpages(data.total_pages);
  };
  useEffect(() => {
    fetchMovie();
  }, [page, genreforurl]);

  return (
    <div>
      <span className="pagetitle"> Movies</span>
      <Genres
        type="movie"
        selectedgenre={selectedGenre}
        setselectedgenre={setselectedGenre}
        genre={Genre}
        setgenre={setGenre}
        setPage={setpage}
      />
      <div className="movies">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              media_type="movie"
              title={c.name || c.title}
              date={c.release_date || c.first_air_date}
              vote={c.vote_average}
            />
          ))}
      </div>
      {noOfpages > 1 && (
        <CustomPagination setPage={setpage} noOfPages={noOfpages} />
      )}
    </div>
  );
};

export default Movies;
