import React from "react";
import AlbumData from "../../content/posts.json";

function GetPageTitle(id) {
  let albumCurr = AlbumData.filter((album) => album.id === Number(id.id));
  return (
    <>
      {albumCurr.map((postDetail, index) => {
        return <React.Fragment key={index}>{postDetail.title}</React.Fragment>;
      })}
    </>
  );
}

export default GetPageTitle;
