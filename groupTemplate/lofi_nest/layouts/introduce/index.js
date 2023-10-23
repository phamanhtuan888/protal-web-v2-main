import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
const GioiThieu = ({ dataResult, data }) => {
  const { list } = dataResult;
  console.log(list);
  return (
   
      <section class="page">
        <div class="container">
          <div class="pg_page padding-top-15">
            <div class="row">
              <div class="col-12">                
                <div class="content-page rte">
                  {list?.map((item) =>(
                    <>
                    <h2>{item?.title}</h2>
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

export default connect()(GioiThieu);
