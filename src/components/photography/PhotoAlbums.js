import React from "react";

import AlbumData from "../../content/posts.json";
import { Link } from "react-router-dom";

// Links to albums for Photography page
function PhotoAlbums() {
  return (
    <>
      <h1>thumbnail album test</h1>
      <div className="album-container">
        <div className="album-grid">
          {AlbumData.map((postDetail, index) => {
            return (
              <React.Fragment key={index}>
                <div className="album-card">
                  <Link to={`/photography/${postDetail.id}`}>
                    <div className="img-placeholder">
                      <img src={postDetail.img} alt={postDetail.title}></img>
                    </div>
                    <p>2019</p>

                    <h1>{postDetail.title}</h1>

                    <p>{postDetail.description}</p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default PhotoAlbums;
