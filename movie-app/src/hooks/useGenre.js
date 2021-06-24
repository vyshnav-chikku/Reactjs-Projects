import React from "react";

const useGenre = (selectedGenre) => {
  if (selectedGenre.length < 1) return "";

  const genreid = selectedGenre.map((g) => g.id);
  return genreid.reduce((prev_value, current) => prev_value + "," + current); //1,2,3
};

export default useGenre;
