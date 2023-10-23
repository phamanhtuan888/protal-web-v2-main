/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { transform } from "lodash";
import dynamic from "next/dynamic";

const Templates2 = ({ data, dataResult }) => {
  const { list } = dataResult;
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: {
      items: 1,
    },
    560: {
      items: 2,
    },
    990: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };
  // console.log(list);
  return (
    <section class="section_service">
      <div class="container">
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
              {list.map((item, index) => (
                <div class="item owl-item" key={index}>
                  <div class="image" style={{display:'flex',justifyContent:'center'}}>
                    <img
                    style={{height:'150px',width:'150px'}}
                      width="150"
                      height="150"
                      class="lazyload img-responsive loading"
                      src={getResponsiveImage(item?.images[0]?.file || "", [
                        600,
                        900,
                        1600,
                      ])}
                      alt={item.title}
                    />
                  </div>
                  <div class="text">
                    <h3>{item.title}</h3>
                    <p>{item.shortDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Templates2;
