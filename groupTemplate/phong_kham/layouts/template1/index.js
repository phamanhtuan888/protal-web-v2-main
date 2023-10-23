// "use client";

/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */

import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { Switch } from "antd";


const Templates1 = ({ data }) => {
  
  return (
    <>
      <div
        class="section1_banner"
        style={{
          backgroundImage:
            "url(https://img.nhathuocgpp.com.vn/connectcare/images/20201006/NoPath_Copy__23__2x.jpg?widthImage=1920)",
        }}
        // style="background-image: url(&quot;https://img.nhathuocgpp.com.vn/connectcare/images/20201006/NoPath_Copy__23__2x.jpg?widthImage=1920&quot;);"
      >
        <div id="particles-js" />
        <div class="text_container">
          <div class="text_title">
            <h3>{data?.objectListsName}</h3>
          </div>
          <div class="text_description">
            <p>{data?.shortDescription}</p>
          </div>
          <div class="banner-content-bottom">
            <div class="mobile" />
            <div class="see_more">
              <button type="button" class="button_over center">
                Đặt lịch khámmm
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Templates1;
