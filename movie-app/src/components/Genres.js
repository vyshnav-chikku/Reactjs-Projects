import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  type,
  selectedgenre,
  setselectedgenre,
  genre,
  setgenre,
  setPage,
}) => {
  const fetchGenre = async (genre) => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/" +
        type +
        "/list?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US"
    );
    setgenre(data.genres);
    console.log(data.genres);
  };
  console.log(genre);

  const handleAdd = (genr) => {
    setselectedgenre([...selectedgenre, genr]);
    setgenre(genre.filter((g) => g.id !== genr.id));
    setPage(1);
  };

  const handleRemove = (genr) => {
    setselectedgenre(selectedgenre.filter((g) => g.id !== genr.id));
    setgenre([...genre, genr]);
    setPage(1);
  };

  useEffect(() => {
    fetchGenre();

    return () => {
      setgenre({});
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedgenre.map((genr) => (
        <Chip
          style={{ margin: 2 }}
          label={genr.name}
          key={genr.id}
          color="primary"
          clickable
          onDelete={() => handleRemove(genr)}
        />
      ))}
      {genre.map((genr) => (
        <Chip
          style={{ margin: 2 }}
          label={genr.name}
          key={genr.id}
          clickable
          onClick={() => handleAdd(genr)}
        />
      ))}
    </div>
  );
};

export default Genres;
