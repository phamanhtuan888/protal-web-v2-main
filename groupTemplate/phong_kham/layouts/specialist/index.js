import { getResponsiveImage } from "@/componentWebs/ImageNew";
import ReactPaginate from "react-paginate";
const ChuyenKhoa = ({ data, dataResult, query }) => {
  const {
    list: [...list],
    pagination,
  } = dataResult;
  const imageResize = [380, 450, 540];
  const {
    children: [topResult, ...children],
  } = data;
  // console.log(pagination);
  const handlePageChange = (e) => {
    window.location = `/${query.name}?page=${e.selected + 1}`;
  };
  return (
    <div className="bread_content">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 hidden-sm hidden-xs"
            style={{
              background: "rgb(1, 92, 156) no-repeat padding-box",
              borderRadius: "10px",
              maxWidth: "270px",
              marginRight: "12px",
            }}
          >
            <div class="background_left">
              <aside class="aside_item_collection_category">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p class="dots_dot" />
                  <h2> Tất cả chuyên khoa </h2>
                </div>
                <div class="aside_content">
                  <nav class="nav_category">
                    <ul class="nav_ul_category">
                      {children?.map((item, index) => (
                        <li
                          class="nav_item"
                          style={{ marginBottom: "12px" }}
                          key={index}
                        >
                          <p />
                          <div
                            class="nav_content"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <i
                              class="fas fa-angle-right"
                              style={{
                                color: "rgb(255, 255, 255)",
                                paddingRight: "5px",
                              }}
                            />
                            <h2>
                              <a href="/khoa-duoc">{item.categoriesName} </a>
                            </h2>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
          <div class="background_right">
            <div
              class="col-md-9 col-sm-12 col-xs-12"
              style={{
                background: "rgb(247, 249, 255)",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            >
              <div class="col-md-12">
                <div class="backgroun_right_title">
                  <h2>{topResult.categoriesName}</h2>
                  <p>{topResult.description}</p>
                </div>
                {list?.map((item, index) => (
                  <div class="col-md-4 col-sm-6 col-xs-6" key={index}>
                    <img
                      src={getResponsiveImage(
                        item.images?.[0]?.file || "",
                        imageResize
                      )}
                      alt={item.title}
                    />
                    <div class="descriptions">
                      <h3>{item.title}</h3>
                      <p>
                        <p>{item.shortDescription}</p>
                      </p>
                    </div>
                  </div>
                ))}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChuyenKhoa;
