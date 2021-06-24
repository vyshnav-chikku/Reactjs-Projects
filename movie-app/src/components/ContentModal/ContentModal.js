import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import { Button } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import "./ConentModal.css";
import Carousel from "../Carousel/Carousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#6f6fbb",
    border: "2px solid #fff",
    borderRadius: 10,
    color: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ContentModal({ children, mediatype, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setcontent] = useState([]);
  const [video, setvideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchModal = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US`
    );
    setcontent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediatype}/${id}/videos?api_key=2925b9db550e4cd33721231d24ad3c73&language=en-US`
    );
    setvideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchModal();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="media" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="Modal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="contentModal_about">
                  <span className="contentModal_title">
                    {content.name || content.title}(
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="contentModal_description">
                    {content.overview}
                  </span>
                  <div className="content_carousel">
                    <Carousel id={id} media_typee={mediatype} />
                  </div>
                  {/* <div className="simple_image_carousel">
                    <SimpleImageCarousel id={id} media_type={mediatype} />
                  </div> */}
                  <Button
                    startIcon={<YouTube />}
                    variant="contained"
                    color="secondary"
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                    className="button_youtube"
                  >
                    Watch The Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
