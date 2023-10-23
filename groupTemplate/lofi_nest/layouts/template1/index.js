import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { Switch } from "antd";

const Templates1 = ({ data, dataResult }) => {
  const { list } = dataResult;
  // console.log(list);
  return (
    <section class="banner">
      <div class="banner-cover">
        <picture>
          <img
            width="1920"
            height="500"
            src={getResponsiveImage(list[0]?.images[0]?.file || "", [
              600,
              900,
              1600,
            ])}
            alt=""
            class="img-responsive lazy"
          />
        </picture>
      </div>
      <div class="banner-text">
        <div class="container">
          <div class="banner-content">
            <h3 class="title">{list[0]?.title}</h3>
            {/* <p class="sub_title">{bannerData[0]?.shortDescription}</p> */}
            <p class="desc">{list[0]?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Templates1;
