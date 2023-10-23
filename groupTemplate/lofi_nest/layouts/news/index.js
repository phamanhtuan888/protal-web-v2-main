import dayjs from "dayjs";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const TinTuc = ({ data, dataResult }) => {
  const {list} = dataResult;
  

  // console.log(list);

  return (
   
      <div class="layout-blog" itemscope="" itemtype="https://schema.org/Blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12">
              <h1 class="d-none">Tin tức</h1>

              <div class="row">
                {list?.map((item, index) => (
                  <div class="col-xl-4 col-lg-4 col-md-6 col-12" key={index}>
                    <div class="item-blog">
                      <div class="item-blog">
                        <div class="block-thumb">
                          <a
                            class="thumb"
                            href={`/tin-tuc/${item.urlSlugs}`}
                            title={item?.title}
                          >
                            <img
                              class="lazyload loaded"
                              src={getResponsiveImage(
                                item?.images[0]?.file || "",
                                [600, 900, 1600]
                              )}
                            />
                          </a>
                        </div>
                        <div class="block-content">
                          <h3>
                            <a
                               href={`/tin-tuc/${item.urlSlugs}`}
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

export default TinTuc;
// import dayjs from "dayjs";
// import { useState } from "react";
// import ReactPaginate from "react-paginate";
// import { getResponsiveImage } from "@/componentWebs/ImageNew";

// const TinTuc = ({ dataResult, query }) => {
//   const handlePageChange = (e) => {
//     window.location = `/${query.name}?page=${e.selected + 1}`;
//     console.log("jfjfjf");
//   };
//   const {
//     list: [topResult, ...list],
//     pagination,
//   } = dataResult;
//   const imageResize = [380, 450, 540];
//   // console.log(pagination);

//   return (
//     <div class="body_article">
//       {list && list.length ? (
//         <div class="container">
//           <div class="row">
//             <div class="first_article">
//               <div
//                 class="col-md-4 col-md-6 col-xs-12"
//                 style={{ paddingLeft: "0px", paddingRight: "0px" }}
//               >
//                 <div class="shadow_content">
//                   <div class="box_inform">
//                     <div class="time_limit">
//                       <img src="/static/vga_soft/images/clock.svg" />
//                       {dayjs(topResult?.dateUpdated).format("DD/MM/YYYY")}
//                     </div>
//                     <h6>{topResult?.title}</h6>
//                     <p>{topResult.shortDescription}</p>
//                     <a
//                       href={`/tin-tuc/${topResult?.urlSlugs}`}
//                       title={topResult?.title}
//                     >
//                       Chi tiết
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-md-8 hidden-sm hidden-xs">
//                 <img
//                   src={getResponsiveImage(
//                     topResult?.images?.[0]?.file,
//                     imageResize
//                   )}
//                   alt={topResult?.title || ""}
//                   style={{
//                     maxHeight: "500px",
//                     width: "100%",
//                     position: "relative",
//                     right: "56px",
//                     marginBottom: "34px",
//                   }}
//                 />
//               </div>
//             </div>
//             <div
//               class="col-md-12 col-sm-12 col-xs-12"
//               style={{ display: "flex", flexWrap: "wrap" }}
//             >
//               {list?.map((article, index) => (
//                 <div class="col-md-4 col-sm-6 col-xs-6" key={index}>
//                   <div class="article_items">
//                     <img
//                       src={getResponsiveImage(
//                         article.images?.[0]?.file || "",
//                         imageResize
//                       )}
//                       alt={article.title}
//                     />
//                     <div class="article_title">
//                       <div class="time_limit">
//                         <img
//                           src="/static/vga_soft/images/clock.svg"
//                           alt="12/10/2020"
//                         />
//                         {dayjs(article.dateUpdated).format("DD/MM/YYYY")}
//                       </div>
//                       <h2>
//                         <a href={`/tin-tuc/${article.urlSlugs}`}>
//                           {article.title}
//                         </a>
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* <div className="clearfix" /> */}
//             <div className="text-xs-right">
//               <nav className="text-center">
//                 {pagination && pagination.total > pagination.pageSize && (
//                   <ReactPaginate
//                     forcePage={pagination.current - 1}
//                     breakLabel="..."
//                     nextLabel="»"
//                     previousLabel="«"
//                     pageRangeDisplayed={2}
//                     pageCount={Math.ceil(
//                       pagination.total / pagination.pageSize
//                     )}
//                     pageLinkClassName="page-link"
//                     nextLinkClassName="page-link"
//                     previousLinkClassName="page-link"
//                     pageClassName="page-item"
//                     nextClassName="page-item"
//                     prevClassName="page-item"
//                     activeClassName="page-item active disabled"
//                     disabledClassName="page-item disabled"
//                     containerClassName="pagination clearfix"
//                     onPageChange={handlePageChange}
//                   />
//                 )}
//               </nav>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <h1 style={{ margin: "50px auto 100px", textAlign: "center" }}>
//           Không tìm thấy bài viết nào.
//         </h1>
//       )}
//       {/* <div class="col-md-12 hidden-sm hidden-xs subscribe_and_socials">
//         <div
//           class="container"
//           style={{ display: "flex", alignItems: "center" }}
//         >
//           <div class="col-md-4 col-sm-3 col-xs-12 subscribe">
//             <h1>Ưu đãi hấp dẫn liên hệ Ngay</h1>
//             <h2>0589929999 - 0589929999 </h2>
//             <p>hoặc đăng ký để nhận tư vấn trực tiếp</p>
//           </div>
//           <form class="col-md-8 col-sm-8 col-xs-12 subscribe-form">
//             <input
//               class="input_subscribe_phone"
//               type="tel"
//               id="phone"
//               name="phone"
//               pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//               required=""
//               placeholder="SĐT liên hệ"
//             />
//             <input
//               class="input_subscribe_email"
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Email liên hệ"
//               required=""
//             />
//             <button type="button" class="btn_btn-subscribe" name="subscribe">
//               <span>ĐĂNG KÝ NGAY</span>
//             </button>
//           </form>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default TinTuc;
