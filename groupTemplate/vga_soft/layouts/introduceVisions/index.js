import { useState } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const IntroduceVisions = ({ data, dataResult }) => {
  const [tab, setTab] = useState(0);
  const nextTab = () => setTab(tab + 1 >= dataResult?.list.length ? 0 : tab + 1);
  const prevTab = () =>
    setTab(tab - 1 < 0 ? dataResult?.list.length - 1 : tab - 1);

  return (
    <div className="container margin-bottom-8">
      <div className="aboutus-page-1__main-content">
        <div className="aboutus-page-1__main-content--1 row">
          <div className="aboutus-page-1__main-content--1__content__heading">
            <h1 className="h1-with-animation--1 section-heading section-intro__heading ">
              {data?.categoriesName}
            </h1>
            <div className="aboutus-intro__subheading">
              <h2 dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
          </div>
          <div
            className="row justify-content-between"
            style={{ marginRight: 0 }}
            key={tab}
          >
            <div className="aboutus-page-1__main-content--1__images col-lg-6">
              <img
                src="/static/vga_soft/images/section-intro-image-bg.png"
                alt="section-intro-bg"
                className="aboutus-page-1__main-content--1__images--1 ls-is-cached lazyloaded"
              />
              <img
                className="aboutus-page-1__main-content--1__images--2 moveInLeft ls-is-cached lazyloaded"
                src={getResponsiveImage(
                  dataResult?.list?.[tab]?.images[0]?.file || "",
                  [550, 550, 550]
                )}
                alt=""
              />
            </div>
            <div className="aboutus-page-1__main-content--1__content col-lg-5">
              <div className="aboutus-page-1__main-content--1__content__content">
                <div className="control-arrow-left" onClick={prevTab}>
                  <img
                    src="/static/vga_soft/images/arrow.png"
                    className="control-arrow-left__image ls-is-cached lazyloaded"
                    alt="control-arrow-left"
                  />
                </div>
                <div className="aboutus-page-1__main-content--1__content__content__card">
                  <div className="text-wrapper-head">
                    <h2 className="aboutus-page-1__main-content--1__content__content__card__heading moveInLeft">
                      {dataResult?.list?.[tab]?.title || ""}
                    </h2>
                  </div>
                  <div
                    className="aboutus-page-1__main-content--1__content__content__card__description text-wrapper-description moveInRight"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    <p>{dataResult?.list?.[tab]?.shortDescription || ""}</p>
                  </div>
                </div>
                <div className="control-arrow-right" onClick={nextTab}>
                  <img
                    src="/static/vga_soft/images/arrow-1.png"
                    className="control-arrow-right__image ls-is-cached lazyloaded"
                    alt="control-arrow-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceVisions;
