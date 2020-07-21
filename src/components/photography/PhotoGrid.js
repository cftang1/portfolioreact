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
      <div
        className="photo-grid"
        style={{
          gridTemplateColumns: `repeat(${props.pageLength}, calc((100vh - 145px) / 20))`,
        }}
      >
        {PhotoData.map((postDetail, index) => {
          const divStyle = {
            gridColumn: postDetail.gridColumn,
            gridRow: postDetail.gridRow,
            zIndex: postDetail.zIndex,
            alignSelf: postDetail.alignSelf,
          };
          return (
            <React.Fragment key={postDetail.id + index}>
              <ViewportBlock
                index={index}
                src={postDetail.img}
                alt={postDetail.title}
                style={divStyle}

                // show when image leaves and enters viewport

                // onEnterViewport={() => console.log("enter")}
                // onLeaveViewport={() => console.log("leave")}
              />
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
  rootMargin: "10px",
  threshold: 0.5,
};

const ViewportBlock = handleViewport(
  Image,
  options /** options: {}, config: {} **/
);

export default PhotoGrid;
