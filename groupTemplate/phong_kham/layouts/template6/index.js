/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dynamic from "next/dynamic";
import $ from "jquery";

const Templates6 = ({ data,dataResult }) => {
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: {
      items: 1, 
    },
    540: {
      items: 2, 
    },
    990: {
      items: 3, 
    },
  };
   return(
    <div class="seation_2" style={{ position: "relative", zIndex: "10" }}>
    <div class="container">
     
      <OwlCarousel
        style={{display:'block'}}
        dots={false}
        nav={false}
       items = {3}
       responsive={responsive}
      >
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transition: "all 0.5s ease 0s",
              
            }}
          >
            {dataResult?.list &&
              dataResult?.list?.map((item, index) => {
                const resize = [80, 80, 80];
                // console.log(item);
                return (
                  <div
                    class="owl-item "
                    
                    key={index}
                  >
                    <div class="blog_inner">
                      <div class="thumbnail_icon">
                        <img
                          class="blog_image"
                          style={{
                            minWidth: "67px",
                            maxWidth: "77px",
                            maxHeight: "67px",
                          }}
                          src={getResponsiveImage(
                            item?.images[0]?.file || "",
                            resize
                          )}
                        />
                      </div>
                      <div class="blog_content">
                        <h2>{item?.title}</h2>
                        <p
                          class="meta_content"
                          style={{ overflow: "hidden", maxHeight: "63px" }}
                        >
                          {item?.shortDescription}
                        </p>
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
   )
}



export default Templates6;
