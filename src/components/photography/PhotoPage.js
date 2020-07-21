import React from "react";
import { Link, useParams } from "react-router-dom";

// import handleViewport from "react-in-viewport";
// import AlbumData from "../../content/posts.json";
import PhotoGrid from "../photography/PhotoGrid";
import AlbumData from "../../content/posts.json";
import PhotoNavLeft from "./PhotoNavLeft";
import PhotoNavRight from "./PhotoNavRight";

// Page containing article and images

const PhotoPage = () => {
  let { id } = useParams();

  let nextPageNum = Number(id) + 1;
  let prevPageNum = Number(id) - 1;

  return (
    <>
      {prevPageNum === 0 ? (
        <Link to={`/photography/`}>
          <PhotoNavLeft id={prevPageNum} />
        </Link>
      ) : (
        <Link to={`/photography/${prevPageNum}`}>
          <PhotoNavLeft id={prevPageNum} />
        </Link>
      )}
      {nextPageNum > 2 ? (
        // <Link to={`/photography/${nextPageNum}`}>
        <PhotoNavRight id={nextPageNum} />
      ) : (
        // </Link>
        <Link to={`/photography/${nextPageNum}`}>
          <PhotoNavRight id={nextPageNum} />
        </Link>
      )}
      <PhotoContainer id={id} />
    </>
  );
};

function PhotoContainer(props) {
  let albumCurr = AlbumData.filter((album) => album.id === Number(props.id));
  return (
    <>
      <div className="photo-container">
        <div className="sidebar-container">
          <div className="photo-article">
            {albumCurr.map((postDetail, index) => {
              return (
                <React.Fragment key={index}>
                  <h1>00{postDetail.id}</h1>
                  <h2>{postDetail.title}</h2>
                  <p>{postDetail.description}</p>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <PhotoGrid id={props.id} pageLength={calculatePageLength(props.id)} />
      </div>
      {calculatePageLength(1)}
    </>
  );
}

function calculatePageLength(id) {
  const albums = {
    1: require("../../content/albums/album_1.json"),
    2: require("../../content/albums/album_2.json"),
  };
  try {
    const albumData = [...albums[id]];
    const gridColumn = albumData.pop().gridColumn;
    // gridColumn = [number] / span [number]
    const regexFirst = /[-]{0,1}[\d]*[.]{0,1}[\d]+/;
    const regexLast = /[-]{0,1}[\d]*[.]{0,1}[\d]+\w+$/;
    let pageLength =
      Number(gridColumn.match(regexFirst)) +
      Number(gridColumn.match(regexLast));
    return pageLength;
  } catch (error) {
    console.error(error);
  }
}

export default PhotoPage;
