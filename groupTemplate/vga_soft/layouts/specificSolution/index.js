import { getResponsiveImage } from "@/componentWebs/ImageNew";

const Solution = ({ data, dataResult }) => {
  const { list } = dataResult;
  return (
    <div className="page-container">
      <section className="product-page-1" style={{ position: 'relative' }}>
        <img
          className="liquid-background ls-is-cached lazyloaded"
          src="/static/vga_soft/images/liquid.svg"
          alt="liquid"
        />
        <div className="container">
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

export default Solution;
