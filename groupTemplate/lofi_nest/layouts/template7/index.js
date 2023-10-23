/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import $ from "jquery";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Templates7 = ({ data, dataResult }) => {
  // console.log(data);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  return (
    <section class="section_product_special">
      <div class="container">
        <div class="block-title">
          <h2>
            <a title="Sản phẩm đặc biệt">{data?.objectListsName}</a>
          </h2>
        </div>
        <div class="block-content">
          <div class="special-desc">
          <p dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
          <div class="special-image">
            <img
              class="lazyload loaded"
              width="758"
              height="491"
              src={getResponsiveImage(data?.images[0]?.file || "", [
                600,
                900,
                1600,
              ])}
              alt="Lofi Nest"
              data-was-processed="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates7;
