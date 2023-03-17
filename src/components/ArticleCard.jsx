import React from "react";

const ArticleCard = () => {
  return (
    <>
      <div className="h-80 w-60 space-y-3">
        {/* image */}
        <div className="flex items-center justify-center bg-gray-400 w-60 h-60 rounded-lg ">
          <img src="" alt="article_image" />
        </div>

        {/* content preview */}
        <div className="">
          {/* title */}
          <p className="font-bold text-lg tracking-wider">
            Art of story telling
          </p>
          {/* brief */}
          <p className="font-extralight text-sm">
            This article explores what is needed to be a story teller, written
            by a story teller.
          </p>
        </div>

        {/* author details */}
        <div className="flex items-center space-x-5">
          {/* author image */}
          <div>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_110805.png"
              alt="author_image"
              className="rounded-full w-8 h-8"
            />
          </div>
          <div>
            <p className="font-semibold">Zainab S.</p>
            <p className="font-extralight text-sm">Writer.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
