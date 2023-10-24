import { getResponsiveImage } from "@/componentWebs/ImageNew";

const GiaiPhap = ({ data, dataResult, query }) => {
  const { list, category } = dataResult;

  return (
    <div className="page-container">
      <section className="product-page-1" style={{ position: 'relative' }}>
        <img
          className="liquid-background ls-is-cached lazyloaded"
          src="/static/vga_soft/images/liquid.svg"
          alt="liquid"
        />
        <div className="container">
          <div className="row section-intro">
            <div className="col-lg-4">
              <div className="aboutus-intro__text">
                <h1 className="h1-with-animation--1 section-heading section-intro__heading">
                  {category?.categoriesName}
                </h1>
                <div className="section-intro__description">
                  <p>{category?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-intro__images">
                <img
                  src="/static/vga_soft/images/section-intro-image-bg.png"
                  alt="section-intro-bg"
                  className="section-intro__bg ls-is-cached lazyloaded"
                  data-aos="fade-down-left"
                />
                <img
                  className="section-intro__image ls-is-cached lazyloaded"
                  alt="Sản phẩm"
                  src={getResponsiveImage(category?.image?.file || "", [
                    540,
                    600,
                    670,
                  ])}
                />
              </div>
            </div>
          </div>
          <div className="titlesbar">
            {data &&
              data?.children.length > 0 &&
              data?.children.map((item) => (
                <div
                  className={`titlesbar__item ${item?.url === (query.s || data?.children[0].url)
                    ? "titlesbar__item--active"
                    : ""
                    }`}
                  slidedata="70"
                  onClick={() => {
                    window.location = `/${data?.url}?s=${item?.url}`;
                  }}
                  key={Math.random()}
                >
                  {item?.categoriesName}
                </div>
              ))}
          </div>
          <div className="product-items margin-bottom-8">
            <div className="product-items-gallery">
              {list &&
                list.length > 0 &&
                list?.map((article, index) => {
                  if (!article) return <></>;
                  const src = getResponsiveImage(article.images[0]?.file, [
                    380,
                    450,
                    540,
                  ]);
                  return (
                    <div
                      className={`product-items-gallery--${index + 1} card-1`}
                      key={Math.random()}
                    >
                      <div className="flip flip-vertical">
                        <div
                          className="front"
                          style={{ backgroundImage: `url('${src}')` }}
                          onClick={() => {
                            window.location = `/${data?.url}/${article.urlSlugs
                              }`;
                          }}
                        />
                        <a
                          href={`/${data?.url}/${article.urlSlugs}`}
                          className="back card-2__content"
                        >
                          <div style={{ width: "100%", overflow: "hidden" }}>
                            <h3 className="card-2__title">{article.title}</h3>
                          </div>
                          <div className="card-1__description">
                            <p>{article.shortDescription}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GiaiPhap;
