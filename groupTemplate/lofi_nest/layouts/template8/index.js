/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import $ from "jquery";
import { useEffect } from "react";
import dynamic from "next/dynamic";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const Templates8 = ({ data, dataResult }) => {
  const { list } = dataResult;
  // console.log(list);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    990: {
      items: 3,
    },
  };
  return (
    <section class="section_blog">
      <div class="container">
        <div class="block-title">
          <h2>
            <a title="Tin tức">{data?.objectListsName}</a>
          </h2>
        </div>
        <div class="block-blog">
          <OwlCarousel
            style={{ display: "block" }}
            dots={false}
            nav={false}
            items={4}
            responsive={responsive}
          >
            <div class="owl-stage-outer">
              <div
                class="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0.25s ease 0s",
                }}
                // style="transform: translate3d(-288px, 0px, 0px); transition: all 0.25s ease 0s; width: 1444px;"
              >
                {list?.map((item, index) => (
                  <div class="item-blog owl-item" key={index}>
                    <div class="block-thumb">
                      <a
                        class="thumb"
                        href={`/tin-tuc/${item.urlSlugs}`}
                        title={item?.title}
                      >
                        <img
                          class="lazyload loaded"
                          src={getResponsiveImage(item?.images[0]?.file || "", [
                            600,
                            900,
                            1600,
                          ])}
                        />
                      </a>
                    </div>
                    <div class="block-content">
                      <h3>
                        <a
                          href={`/tin-tuc/${item.urlSlugs}`}
                          title={item?.title}
                        >
                          {item.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Templates8;
