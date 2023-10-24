/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const Detail = ({ data, relateArticles, dataSite, query }) => {
  console.log(data);
  return (
    <div className="page-container">
      <main className="container content blog">
        <div ui-view="true">
          <section className="blog-main-content my-5">
            <section className="post blog-post">
              <div className="page-content">
                <div className="blog-content row">
                  <div className="text-content col-lg-8">
                    <div
                      className="detail-heading-card"
                      style={{ marginBottom: "13px" }}
                    >
                      <div className="detail-heading-card__description">
                        <h1 className="detail-heading-card__heading">
                          {data?.title}
                        </h1>
                        <p className="detail-heading-card__content">
                          {data?.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div
                      className="ck-content"
                      dangerouslySetInnerHTML={{
                        __html: `${data?.description}`,
                      }}
                    />
                  </div>
                  <div className="post-meta col-lg-4">
                    <div className="author p-3">
                      <p className="related-heading">Có thể bạn quan tâm</p>
                      {relateArticles.list &&
                        relateArticles.list.length > 0 &&
                        relateArticles.list?.map((article, index) => (
                          <div
                            className="related-item d-flex"
                            style={{ width: "100%" }}
                            key={index}
                          >
                            <a
                              href={`/${query?.parentName || "tin-tuc"}/${
                                article.urlSlugs
                              }`}
                            >
                              <img
                                className="related-item__image"
                                alt={article.title}
                                src={getResponsiveImage(
                                  article.images[0]?.file || "",
                                  [110, 110, 110]
                                )}
                              />
                            </a>
                            <div className="related-item__content">
                              <a
                                href={`/${query?.parentName || "tin-tuc"}/${
                                  article.urlSlugs
                                }`}
                              >
                                <p className="related-item__title">
                                  {article.title}
                                </p>
                              </a>
                              <p className="related-item__description">
                                {`${
                                  article.shortDescription.length > 100
                                    ? `${article.shortDescription.slice(
                                        0,
                                        100
                                      )}...`
                                    : article.shortDescription
                                } `}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="contact-us">
                      <p className="related-heading">Liên hệ với chúng tôi</p>
                      <div className="detail-contact-icon">
                        {dataSite.infoSocial.map((item) => (
                          <a href={item?.link} key={item?.id}>
                            <img
                              src={getResponsiveImage(item?.image || "", [
                                200,
                                200,
                                200,
                              ])}
                              alt={`${item?.nameSocial} icon`}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};
export default Detail;
