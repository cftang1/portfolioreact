import React from "react";
import { Link, useParams } from "react-router-dom";

// import handleViewport from "react-in-viewport";
// import AlbumData from "../../content/posts.json";
import PhotoGrid from "../photography/PhotoGrid";
import AlbumData from "../../content/posts.json";
import PhotoNavLeft from "./PhotoNavLeft";
import PhotoNavRight from "./PhotoNavRight";
import GetPageTitle from "./GetPageTitle";

// Page containing article and images
function BlogPost(id) {
  let albumCurr = AlbumData.filter((album) => album.id === Number(id.id));
  return (
    <>
      {albumCurr.map((postDetail, index) => {
        return (
          <React.Fragment key={index}>
            <h1>{postDetail.title}</h1>
            <p>{postDetail.description}</p>
          </React.Fragment>
        );
      })}
    </>
  );
}

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
      <div className="photo-container">
        <div className="sidebar-container">
          <div className="photo-article">
            <h1>2019</h1>
            <p>page state is {id}</p>
            <p>
              <GetPageTitle id={nextPageNum} />
            </p>
            <BlogPost id={id} />
            <div>
              {/* {albumCurr.map((postDetail, index) => {
              return (
                <>
                  <h1>{postDetail.title}</h1>
                  <p>{postDetail.description}</p>
                  <p>read more...</p>
                </>
              );
            })} */}
            </div>
          </div>
        </div>
        <PhotoGrid id={id} />
      </div>
    </>
  );
};
export default PhotoPage;
