import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, img_500, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({ id, title, poster, media_type, date, vote }) => {
  return (
    <ContentModal mediatype={media_type} id={id}>
      <Badge badgeContent={vote} color={vote > 6 ? "primary" : "secondary"} />
      <img
        className="poster"
        src={poster ? img_300 + "/" + poster : unavailable}
      />
      <b className="title">{title}</b>
      <div className="subtitle">
        <span className="type">
          {media_type === "tv" ? "Tv Series" : "Movie"}
        </span>
        <span className="date">{date}</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
