import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../pagination/CustomPagination";
import SingleContent from "../../Singlecontent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [page, setpage] = useState(1);
  const [content, setcontent] = useState([]);
  const [noOfpages, setnoOfpages] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=2925b9db550e4cd33721231d24ad3c73&page=" +
        page
    );
    // console.log(data);
    setcontent(data.results);
    setnoOfpages(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pagetitle"> Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              media_type={c.media_type}
              title={c.name || c.title}
              date={c.release_date || c.first_air_date}
              vote={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setpage} noOfPages={noOfpages} />
    </div>
  );
};

export default Trending;
