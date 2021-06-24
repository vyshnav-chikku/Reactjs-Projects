import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenre from "../../../hooks/useGenre";
import Genres from "../../Genres";
import CustomPagination from "../../pagination/CustomPagination";
import SingleContent from "../../Singlecontent/SingleContent";

const TvSeries = () => {
  const [content, setcontent] = useState([]);
  const [page, setpage] = useState(1);
  const [noOfpages, setnoOfpages] = useState(1);
  const [selectedGenre, setselectedGenre] = useState([]);
  const [Genre, setGenre] = useState([]);
  const genreforurl = useGenre(selectedGenre);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
        page +
        "&with_watch_monetization_types=flatrate&with_genres=" +
        genreforurl
    );
    console.log(data);
    setcontent(data.results);
    setnoOfpages(data.total_pages);
  };
  useEffect(() => {
    fetchSeries();
  }, [page, genreforurl]);

  return (
    <div>
      <span className="pagetitle"> Tv Series</span>
      <Genres
        type="tv"
        selectedgenre={selectedGenre}
        setselectedgenre={setselectedGenre}
        genre={Genre}
        setgenre={setGenre}
        setPage={setpage}
      />
      {/* .movies have connection with singlecontent and movie.css */}
      <div className="movies">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              media_type="tv"
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

export default TvSeries;
