import React from "react";

import AlbumData from "../content/posts.json";
import { Link } from "react-router-dom";

// All the images from album
function PhotoAlbums() {
  return (
    <>
      <h1>thumbnail album test</h1>
      <div className="album-grid">
        {AlbumData.map((postDetail, index) => {
          return (
            <React.Fragment key={index}>
              <Link to={`/photography/${postDetail.id}`}>
                <div className="album-card">
                  <h1>{postDetail.title}</h1>
                  <p>{postDetail.description}</p>

                  <div className="img-placeholder">
                    <img src={postDetail.img} alt={postDetail.title}></img>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
export default PhotoAlbums;
