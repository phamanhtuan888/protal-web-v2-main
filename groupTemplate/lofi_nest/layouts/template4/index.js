/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import $ from "jquery";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Templates4 = ({ data }) => {
  // const { list } = dataResult;

  // const feed_back = list.slice(0, 3);
  // console.log(data);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  return (
    <section class="section_mission">
      <div class="container">
        <div class="block-title">
          <h2>{data?.objectListsName}</h2>
        </div>
        <div class="block-content">
          <div class="mission-desc">
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
          <div class="mission-image">
            <img
              class="lazyload loaded"
              width="1170"
              height="515"
              src={getResponsiveImage(data?.images[0]?.file || "", [
                600,
                900,
                1600,
              ])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates4;
