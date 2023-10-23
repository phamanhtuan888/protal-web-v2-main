import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
const XayDungNhaYenTronGoi = ({ dataResult, data }) => {
  const { list } = dataResult;
  // console.log(data);
  return (
    
      <section class="page">
        <div class="container">
          <div class="pg_page padding-top-15">
            <div class="row">
              <div class="col-12">
                <div class="page-title category-title d-none">
                  <h1 class="title-head">{data?.categoriesName}</h1>
                </div>
                <div class="content-page rte">
                  <p>
                  <p
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                  </p>
                  {list?.map((item) =>(
                    <>
                    <h3><strong>{item?.title}</strong></h3>
                    <p dangerouslySetInnerHTML={{ __html: item?.description }} />
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

export default connect()(XayDungNhaYenTronGoi);
