/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dayjs from "dayjs";
const Product = ({ data, relateArticles, dataSite }) => {
  // const { list } = relateArticles;
  const categoriesId = data.categoriesId;
  console.log(relateArticles);
  const imageResize = [380, 450, 540];
  return (
    // <section class="blogpage">
    //   <div class="container layout-article">
    //     <div class="bg_blog">
    //       <article class="article-main">
    //         <div class="row">
    //           <div class="col-lg-12 col-12">
    //             <div class="bg-article">
    //               <div class="article-details clearfix">
    //                 <div class="posts">
    //                   <div class="time-post">
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       data-icon="user"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 448 512"
    //                       class="svg-inline--fa fa-user fa-w-14"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
    //                         class=""
    //                       />
    //                     </svg>
    //                     <span>{data?.author}</span>
    //                   </div>
    //                   <div class="time-post f">
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fal"
    //                       data-icon="clock"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 512 512"
    //                       class="svg-inline--fa fa-clock fa-w-16"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
    //                         class=""
    //                       />
    //                     </svg>
    //                     <span>Ngày</span>
    //                     {dayjs(data.dateUpdated).format("DD/MM/YYYY")}
    //                   </div>
    //                 </div>
    //                 <div class="rte">
    //                   {/* <p>{data?.description}</p>
    //                     <img
    //                       width={600}
    //                       height={400}
    //                       src={getResponsiveImage(
    //                         data?.images[0]?.file || "",
    //                         [600, 900, 1600]
    //                       )}
    //                     /> */}
    //                   <p
    //                     dangerouslySetInnerHTML={{
    //                       __html: data?.description,
    //                     }}
    //                   />
    //                 </div>
    //               </div>
    //               {categoriesId === "618" ? (
    //                 <form id="article_comments">
    //                   <div class="form-coment">
    //                     <div class="margin-top-0 margin-bottom-30 w-100">
    //                       <h5 class="title-form-coment">
    //                         Viết bình luận của bạn
    //                       </h5>
    //                     </div>
    //                     <div class="row">
    //                       <div class="col-md-6 col-12">
    //                         <fieldset class="form-group padding-0">
    //                           <input
    //                             placeholder="Họ và tên"
    //                             type="text"
    //                             class="form-control form-control-lg"
    //                           />
    //                         </fieldset>
    //                       </div>
    //                       <div class="col-md-6 col-12">
    //                         <fieldset class="form-group padding-0">
    //                           <input
    //                             placeholder="Email"
    //                             type="email"
    //                             class="form-control form-control-lg"
    //                           />
    //                         </fieldset>
    //                       </div>
    //                       <fieldset class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
    //                         <textarea
    //                           placeholder="Nội dung"
    //                           class="form-control form-control-lg"
    //                           id="comment"
    //                         />
    //                       </fieldset>
    //                       <div class="col-12">
    //                         <button
    //                           type="submit"
    //                           class="btn btn-primary button_45"
    //                         >
    //                           Gửi thông tin
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </form>
    //               ) : null}
    //             </div>
    //           </div>
    //         </div>
    //       </article>
    //     </div>
    //   </div>
    // </section>
    <div>cncjdjjdjdjdkdkdjdjdj</div>
  );
};
export default Product;