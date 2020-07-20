import React from "react";
import handleViewport from "react-in-viewport";

const albums = {
  1: require("../../content/albums/album_1.json"),
  2: require("../../content/albums/album_2.json"),
};

const PhotoGrid = (props) => {
  const PhotoData = albums[props.id];
  return (
    <>
      {/* <h1>Photos Data ID = {id.id}</h1> */}
      <div className="photo-grid">
        {PhotoData.map((postDetail, index) => {
          const divStyle = {
            gridColumn: postDetail.gridColumn,
            gridRow: postDetail.gridRow,
            zIndex: postDetail.zIndex,
          };
          return (
            <React.Fragment key={postDetail.id + index}>
              {/* <Image
                index={index}
                src={postDetail.img}
                alt={postDetail.title}
                style={divStyle}
              /> */}
              <ViewportBlock
                index={index}
                src={postDetail.img}
                alt={postDetail.title}
                style={divStyle}
                onEnterViewport={() => console.log("enter")}
                onLeaveViewport={() => console.log("leave")}
              />
              {/* <img
                key={index}
                src={postDetail.img}
                alt={postDetail.title}
                style={divStyle}
              ></img> */}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

const Image = (props) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? "auto" : "unset";
  const tr = inViewport ? 100 : 30;
  return (
    <img
      ref={forwardedRef}
      key={props.index}
      src={props.src}
      alt={props.alt}
      style={{ ...props.style, imageRendering: color, opacity: tr }}
    ></img>
  );
};

let options = {
  root: document.querySelector("#photo-container"),
  rootMargin: "0px",
  threshold: 1.0,
};

const ViewportBlock = handleViewport(
  Image,
  options /** options: {}, config: {} **/
);

export default PhotoGrid;
