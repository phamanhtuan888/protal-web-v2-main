import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";

const Templates3 = ({ data, dataResult }) => {
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
    }
  };
  return (
  <>
    <section
      class="section_4"
      // className="solution-homepage-container aos-init aos-animate"
      // data-aos="fade-up"
      // data-aos-duration="1000"
      style={{
        position: "relative",
        backgroundImage:
          "url(https://img.nhathuocgpp.com.vn/connectcare/images/20200928/slide_img1_2x.jpg?widthImage=1440)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgb(52,152,219)",
        opacity: "0.82",
        height: "649px",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 padding_container">
            <h2>{data?.objectListsName}</h2>
            <OwlCarousel
            style={{display:'block'}}
            dots={false}
            nav={false}
            items = {4}
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
                  {dataResult?.list &&
                    dataResult?.list?.map((item, index) => {
                      // console.log(dataResult);
                      const resize = [80, 80, 80];
                      return (
                        <div class="owl-item" style={{display:'flex',justifyContent:'center'}} key={index}>
                          <div class="center_banner">
                            <img
                              className="img-fit ls-is-cached lazyloaded"
                              alt={item?.title}
                              src={getResponsiveImage(
                                item?.images[0]?.file || "",
                                [400]
                              )}
                            />
                            <div class="dr_infor">
                              <h3>{item?.title}</h3>
                              <h5>{item?.shortDescription}</h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  </>
);
}

export default Templates3;
