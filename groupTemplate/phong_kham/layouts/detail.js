/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dayjs from "dayjs";
const Detail = ({ data, relateArticles, dataSite, query }) => {
  console.log(dataSite);
  const { list } = relateArticles;
  const imageResize = [380, 450, 540];
  return (
    // <div className="page-container">
    //   <main className="container content blog">
    //     <div ui-view="true">
    //       <section className="blog-main-content my-5">
    //         <section className="post blog-post">
    //           <div className="page-content">
    //             <div className="blog-content row">
    //               <div className="text-content col-lg-8">
    //                 <div
    //                   className="detail-heading-card"
    //                   style={{ marginBottom: "13px" }}
    //                 >
    //                   <div className="detail-heading-card__description">
    //                     <h1 className="detail-heading-card__heading">
    //                       {data?.title}
    //                     </h1>
    //                     <p className="detail-heading-card__content">
    //                       {data?.shortDescription}
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div
    //                   className="ck-content"
    //                   dangerouslySetInnerHTML={{
    //                     __html: `${data?.description}`,
    //                   }}
    //                 />
    //               </div>
    //               <div className="post-meta col-lg-4">
    //                 <div className="author p-3">
    //                   <p className="related-heading">Có thể bạn quan tâm</p>
    //                   {relateArticles.list &&
    //                     relateArticles.list.length > 0 &&
    //                     relateArticles.list?.map((article, index) => (
    //                       <div
    //                         className="related-item d-flex"
    //                         style={{ width: "100%" }}
    //                         key={index}
    //                       >
    //                         <a
    //                           href={`/${query?.parentName || "tin-tuc"}/${
    //                             article.urlSlugs
    //                           }`}
    //                         >
    //                           <img
    //                             className="related-item__image"
    //                             alt={article.title}
    //                             src={getResponsiveImage(
    //                               article.images[0]?.file || "",
    //                               [110, 110, 110]
    //                             )}
    //                           />
    //                         </a>
    //                         <div className="related-item__content">
    //                           <a
    //                             href={`/${query?.parentName || "tin-tuc"}/${
    //                               article.urlSlugs
    //                             }`}
    //                           >
    //                             <p className="related-item__title">
    //                               {article.title}
    //                             </p>
    //                           </a>
    //                           <p className="related-item__description">
    //                             {`${
    //                               article.shortDescription.length > 100
    //                                 ? `${article.shortDescription.slice(
    //                                     0,
    //                                     100
    //                                   )}...`
    //                                 : article.shortDescription
    //                             } `}
    //                           </p>
    //                         </div>
    //                       </div>
    //                     ))}
    //                 </div>
    //                 <div className="contact-us">
    //                   <p className="related-heading">Liên hệ với chúng tôi</p>
    //                   <div className="detail-contact-icon">
    //                     {dataSite.infoSocial.map((item) => (
    //                       <a href={item?.link} key={item?.id}>
    //                         <img
    //                           src={getResponsiveImage(item?.image || "", [
    //                             200,
    //                             200,
    //                             200,
    //                           ])}
    //                           alt={`${item?.nameSocial} icon`}
    //                         />
    //                       </a>
    //                     ))}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </section>
    //       </section>
    //     </div>
    //   </main>
    // </div>
    <div class="main container blogs" style={{ padding: "30px 0px 0px" }}>
      <div class="container">
        <div class="row">
          <div class="col-main col-md-8">
            <div class="main_title">
              <h2>{data.title}</h2>
            </div>
            <div class="main_description">
              <p dangerouslySetInnerHTML={{ __html: data.description }} />

              <figure class="image">
                <img
                  src={getResponsiveImage(
                    data.images?.[0]?.file || "",
                    imageResize
                  )}
                  alt={data.title}
                />
              </figure>
              <p style={{ textAlign: "center" }}>Ảnh minh hoạ</p>
              <p style={{ textAlign: "center" }}>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
            <div class="footer_main">
              <h2>Có thể bạn sẽ thích</h2>
              {list.slice(0, 2)?.map((article, index) => (
                <div
                  class="col-md-6 col-sm-6 col-xs-6"
                  style={{ paddingLeft: "0px" }}
                  key={index}
                >
                  <div class="article_items">
                    <img
                      src={getResponsiveImage(
                        article.images?.[0]?.file || "",
                        imageResize
                      )}
                      alt={article.title}
                    />
                    <div class="article_title">
                      <div class="time_limit">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy4zMTgiIGhlaWdodD0iMTMuMzE4Ij48cGF0aCBkPSJNNi42NTkgMGE2LjY1OSA2LjY1OSAwIDEwNi42NTkgNi42NTlBNi42NTggNi42NTggMCAwMDYuNjU5IDB6bTAgMTIuMDI5YTUuMzcgNS4zNyAwIDExNS4zNy01LjM3IDUuMzY5IDUuMzY5IDAgMDEtNS4zNyA1LjM3em0xLjY1OS0yLjhsLTIuMjgtMS42NTdhLjMyNC4zMjQgMCAwMS0uMTMyLS4yNlYyLjlhLjMyMy4zMjMgMCAwMS4zMjItLjMyMmguODU5YS4zMjMuMzIzIDAgMDEuMzIyLjMyMnYzLjhMOS4yMDMgOGEuMzIyLjMyMiAwIDAxLjA3LjQ1MWwtLjUuN2EuMzI0LjMyNCAwIDAxLS40NTEuMDd6IiBmaWxsPSIjOTQ5NDk0Ii8+PC9zdmc+" />
                        {dayjs(article.dateUpdated).format("DD/MM/YYYY")}
                      </div>
                      <h2>
                        <a
                          href={`/${query?.parentName ||
                            "tin-tuc-y-te-moi-nhat"}/${article.urlSlugs}`}
                          style={{ color: " rgb(51, 51, 51)" }}
                        >
                          {article.title}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside
            class="col-right sidebar col-md-4 col-xs-12 wow bounceInRight animated"
            style={{ padding: "0px 0px 0px 15px" }}
          >
            <div class="col-md-12 col-sm-6 hidden-xs">
              <div class="form_submit" style={{ backgroundColor: "#147BBF" }}>
                <form>
                  <div class="header_form">
                    <h4>Bạn cảm thấy không ổn ?</h4>
                    <p />
                  </div>
                  <h3>Đăng ký khám ngay giảm 30%</h3>
                  <input type="name" placeholder="Họ và tên " />
                  <input type="phone" placeholder="Số điện thoại" />
                  <input type="text" placeholder="Triệu chứng bệnh" />
                  <div class="flex_button">
                    <button type="button" class="button_submit">
                      <span>Đăng ký</span>
                    </button>
                    <a class="infor_securiy">Thông tin được bảo mật</a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-12 col-sm-6 col-xs-12">
              <div class="article_list_content">
                <a class="widget_title" href="/tin-tuc-60">
                  <h3>Tin tức liên quan</h3>
                  <p />
                </a>
                {list?.map((article, index) => (
                  <div
                    class="col-md-12 col-md-12  col-xs-12"
                    style={{ padding: "0px", margin: "20px 0px" }}
                    key={index}
                  >
                    <div class="widget_content ">
                      <img
                        src={getResponsiveImage(
                          article.images?.[0]?.file || "",
                          imageResize
                        )}
                        alt={article.title}
                        style={{
                          width: "142px",
                          height: "94px",
                          borderRadius: "5px",
                        }}
                      />
                      <div class="content_neightbor">
                        <a
                          href={`/${query?.parentName ||
                            "tin-tuc-y-te-moi-nhat"}/${article.urlSlugs}`}
                        >
                          {article.title}
                        </a>
                        <div class="time_limit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy4zMTgiIGhlaWdodD0iMTMuMzE4Ij48cGF0aCBkPSJNNi42NTkgMGE2LjY1OSA2LjY1OSAwIDEwNi42NTkgNi42NTlBNi42NTggNi42NTggMCAwMDYuNjU5IDB6bTAgMTIuMDI5YTUuMzcgNS4zNyAwIDExNS4zNy01LjM3IDUuMzY5IDUuMzY5IDAgMDEtNS4zNyA1LjM3em0xLjY1OS0yLjhsLTIuMjgtMS42NTdhLjMyNC4zMjQgMCAwMS0uMTMyLS4yNlYyLjlhLjMyMy4zMjMgMCAwMS4zMjItLjMyMmguODU5YS4zMjMuMzIzIDAgMDEuMzIyLjMyMnYzLjhMOS4yMDMgOGEuMzIyLjMyMiAwIDAxLjA3LjQ1MWwtLjUuN2EuMzI0LjMyNCAwIDAxLS40NTEuMDd6IiBmaWxsPSIjOTQ5NDk0Ii8+PC9zdmc+"
                            alt="12/10/2020"
                          />
                          {dayjs(article.dateUpdated).format("DD/MM/YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Detail;
