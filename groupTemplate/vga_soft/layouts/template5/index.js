/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import dayjs from "dayjs";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

require("dayjs/locale/vi");

const Templates5 = ({ data, dataResult }) => (
  <section
    className="homepage-news-1 aos-init aos-animate"
    data-aos="fade-up"
    style={{ position: "relative" }}
  >
    <img
      src="/static/vga_soft/images/ball.png"
      alt="ball"
      className="ball-image ls-is-cached lazyloaded"
      style={{ left: "20%" }}
    />
    <div className="container">
      <div className="row" style={{ overflow: "hidden" }}>
        <div className="col-md-4">
          <h1 className="h1-with-animation--1 section-heading homepage-news-1__heading">
            {data?.objectListsName}
          </h1>
          <p className="homepage-news-1__intro-description">
            {data?.shortDescription}
          </p>
          <div className="view_all_article">
            <p className="custom_bg" />
            <a href="/tin-tuc">
              Xem tất cả {data?.objectListsName.toLowerCase()}
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="homepage-news-1__main-content">
            <div className="row">
              <div className="homepage-news-1__main-content--1 col-md-6">
                <div className="flip flip-vertical" data-aos="fade-down-left">
                  <NewsItem {...dataResult?.list[0]} />
                </div>
                <div className="flip" data-aos="fade-down-right">
                  <NewsItem {...dataResult?.list[1]} />
                </div>
              </div>
              <div className="homepage-news-1__main-content--2 col-md-6">
                <div className="flip" data-aos="fade-down-right">
                  <NewsItem {...dataResult?.list[2]} />
                </div>
                <div className="flip flip-vertical" data-aos="fade-down-left">
                  <NewsItem {...dataResult?.list[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Templates5;

function NewsItem(props) {
  return (
    <>
      <a
        href={`/tin-tuc/${props.urlSlugs}`}
        className="front lazy"
        style={{
          background: `url("${getResponsiveImage(props.images[0]?.file || "", [
            360,
            360,
            360,
          ])}")`,
        }}
      />
      <div className="back card-2__content">
        <div style={{ overflow: "hidden" }}>
          <a href={`/tin-tuc/${props.urlSlugs}`}>
            <h2 className="card-2__title">{props.title}</h2>
          </a>
        </div>
        <div className="card-2__description">
          <p style={{ textTransform: "uppercase" }}>
            {dayjs(props.dateUpdated)
              .locale("vi")
              .format("MMMM DD, YYYY")
              .toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
}
