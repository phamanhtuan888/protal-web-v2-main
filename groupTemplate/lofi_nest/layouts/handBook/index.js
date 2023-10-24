import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
const CamNang = ({ dataResult, data }) => {
  const { list } = dataResult;
  // console.log(list);
  return (
    
      <div class="layout-blog" itemscope="" itemtype="https://schema.org/Blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <div class="row">
                {list?.map((item) => (
                  <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div class="item-blog">
                      <div class="item-blog">
                        <div class="block-thumb">
                          <a
                            class="thumb"
                            href={`/cam-nang-633/${item.urlSlugs}`}
                            title={item?.title}
                          >
                            <img
                              class="lazyload loaded"
                              src={getResponsiveImage(
                                item?.images[0]?.file || "",
                                [600, 900, 1600]
                              )}
                              alt={item?.productsName}
                            />
                          </a>
                        </div>
                        <div class="block-content">
                          <h3>
                            <a
                               href={`/cam-nang-633/${item.urlSlugs}`}
                               title={item?.title}
                            >
                              {item.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default connect()(CamNang);
