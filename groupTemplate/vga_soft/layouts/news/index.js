import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const TinTuc = ({ dataResult, query }) => {
  const handlePageChange = (e) => {
    window.location = `/${query.name}?page=${e.selected + 1}`;
  };

  const {
    list: [topResult, ...list],
    pagination,
  } = dataResult;
  const imageResize = [380, 450, 540];

  return (
    <div className="page-container">
      {list && list.length ? (
        <section className="section-13 news-list">
          <section className="container news-container">
            <div className="row first-news">
              <div className="col-md-4 col-sm-12 first-news-content">
                <div className=" news-content">
                  <div className="news-time">
                    <img
                      src="/static/vga_soft/images/clock.svg"
                      alt="clock"
                      style={{ marginRight: "5px" }}
                    />
                    {dayjs(topResult?.dateUpdated).format("DD/MM/YYYY")}
                  </div>
                  <div className="news-title">
                    <a
                      href={`/tin-tuc/${topResult?.urlSlugs}`}
                      title={topResult?.title}
                    >
                      {topResult?.title}
                    </a>
                  </div>
                  <div className="news-shortDescription">
                    {topResult?.shortDescription}
                  </div>
                  <div className="news-see-more">
                    <a
                      href={`/tin-tuc/${topResult?.urlSlugs}`}
                      title="Xem chi tiết"
                    >
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="news-image">
                  <a
                    href={`/tin-tuc/${topResult?.urlSlugs}`}
                    title={topResult?.title}
                  >
                    <img
                      src={getResponsiveImage(
                        topResult?.images?.[0]?.file,
                        imageResize
                      )}
                      alt={topResult?.title || ""}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row news-list">
              {list?.map((article) => (
                <div
                  className="col-md-4 col-sm-12 news-item"
                  key={Math.random()}
                >
                  <div className="news-images">
                    <a
                      href={`/tin-tuc/${article.urlSlugs}`}
                      title={article.title}
                    >
                      <img
                        src={getResponsiveImage(
                          article.images?.[0]?.file || "",
                          imageResize
                        )}
                        alt={article.title}
                      />
                    </a>
                  </div>
                  <div className="news-content">
                    <div className="custom_news-time">
                      <img
                        src="/static/vga_soft/images/clock.svg"
                        alt="clock"
                        style={{ marginRight: "5px" }}
                      />
                      {dayjs(article.dateUpdated).format("DD/MM/YYYY")}
                    </div>
                    <div className="custom_news-title">
                      <a
                        href={`/tin-tuc/${article.urlSlugs}`}
                        title={article.title}
                      >
                        {article.title}
                      </a>
                    </div>
                    <div className="news-shortDescription">
                      {article.shortDescription}
                    </div>
                    <div className="news-see-more">
                      <a
                        href={`/tin-tuc/${article.urlSlugs}`}
                        title="Xem chi tiết"
                      >
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="clearfix" />
            <div className="text-xs-right">
              <nav className="text-center">
                {pagination && pagination.total > pagination.pageSize && (
                  <ReactPaginate
                    forcePage={pagination.current - 1}
                    breakLabel="..."
                    nextLabel="»"
                    previousLabel="«"
                    pageRangeDisplayed={2}
                    pageCount={Math.ceil(
                      pagination.total / pagination.pageSize
                    )}
                    pageLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    pageClassName="page-item"
                    nextClassName="page-item"
                    prevClassName="page-item"
                    activeClassName="page-item active disabled"
                    disabledClassName="page-item disabled"
                    containerClassName="pagination clearfix"
                    onPageChange={handlePageChange}
                  />
                )}
              </nav>
            </div>
          </section>
        </section>
      ) : (
        <h1 style={{ margin: "50px auto 100px", textAlign: "center" }}>
          Không tìm thấy bài viết nào.
        </h1>
      )}
    </div>
  );
};

export default TinTuc;
