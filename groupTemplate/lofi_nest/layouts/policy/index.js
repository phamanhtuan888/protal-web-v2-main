import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
const ChinhSach = ({ dataResult, data }) => {
  const { list } = dataResult;
  // console.log(list);
  return (
   
      <section class="page">
        <div class="container">
          <div class="pg_page padding-top-15">
            <div class="row">
              <div class="col-12">
                <div class="page-title category-title d-none">
                  <h1 class="title-head">{data?.description}</h1>
                </div>
                <div class="content-page rte">
                  <p>
                    <p
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                  </p>
                  {list?.map((item) => (
                    <>
                      <p>
                        <strong>{item?.title}</strong>
                      </p>
                      <p
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
  );
};

export default connect()(ChinhSach);
