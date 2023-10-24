/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import $ from "jquery";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Templates7 = ({ data, dataResult }) => {
  const { list } = dataResult;
//  console.log(dataResult);
  const feed_back = list.slice(0, 3);
  // console.log(dataResult);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  return (

      <div class="section_8">
        {/* <div class="container-fuild">
          <div class="col-md-5 col-sm-4 hidden-xs-12 feedback_left">
            <div class="feed_back">
              <h2>{list[3].title}</h2>
              <p>{list[3].shortDescription}</p>
            </div>
          </div>
          <div class="col-md-7 col-sm-7 col-xs-12 feedback_right">
          <OwlCarousel
          style={{display:'block'}}
            dots={true}
            nav={false}
           items = {1}
          >
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style={{
                    // transform: "translate3d(-856px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "100%",
                  }}
                >
                  {feed_back.map((item, index) => {
                    // console.log(item);
                    // const resize = [80, 80, 80];
                    return (
                      <div class="owl-item" style={{ width: "856.2px" }}  key={index}>
                        <div class="feedback_infor">
                          <div class="feedback_user">
                            <img
                            style={{height:'80px',width:'80px'}}
                              alt={item.title}
                              src={getResponsiveImage(
                                item?.images[0]?.file || "",
                                [400]
                              )}
                            />
                            <h5>{item.title}</h5>
                            <p>{item.author}</p>
                          </div>
                          <div class="feedback-description">
                            "{item.shortDescription}"
                          </div>
                        </div>
                      </div>
                    );
                  })}

                
                </div>
              </div>
              </OwlCarousel>
          </div>
        </div> */}
      </div>
    
  );
};

export default Templates7;
