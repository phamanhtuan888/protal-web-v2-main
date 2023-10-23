/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import $ from "jquery";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Templates4 = ({ data, dataResult }) => {
  const { list } = dataResult;

  const feed_back = list.slice(0, 3);
  // console.log(dataResult);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  return (
 
      <section
        class="section_7"
        style={{
          backgroundImage:
            "url(https://img.nhathuocgpp.com.vn/connectcare/images/20200929/NoPath___Copy_(32)_2x.png?widthImage=1440)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "43px",
        }}
      >
        <div class="container">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <form class="form_deal">
              <h2>{data?.objectListsName}</h2>
              <div class="form_check">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required=""
                  placeholder="SĐT liên hệ"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email liên hệ"
                  required=""
                />
                <button type="button" class="btn--view-more">
                  Đăng ký ngay
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-6 col-sm-6 hidden-xs">
            <img
              src="https://img.nhathuocgpp.com.vn/connectcare/images/20200929/NoPath___Copy_(74)_2x.png?widthImage=543"
              alt="Đăng ký nhận tư vấn ngay Giảm giá 30% tất cả gói khám"
            />
          </div>
        </div>

      </section>
      
  
  );
};

export default Templates4;
