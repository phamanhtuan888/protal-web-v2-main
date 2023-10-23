import { getResponsiveImage } from "@/componentWebs/ImageNew";
import ReactPaginate from "react-paginate";
import dynamic from "next/dynamic";
const ChuyenKhoa = ({ data, dataResult, query }) => {
  const { list } = dataResult;
  const imageResize = [380, 450, 540];
  const { children } = data;

  function togglePanel(index) {
    const panel = document.getElementById(`panel-${index}`);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: {
      items: 1, 
    },
    515: {
      items: 2, 
    },
    990: {
      items: 3, 
    },
  };
  return (
    <div className="instruct">
      <div className="section_14">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div class="content_title">
                  <h2>{children[0].categoriesName}</h2>
                  <p>{children[0].description}</p>
                </div>
              </div>
              <div
                class="col-md-12 hidden-sm hidden-xs"
                style={{ padding: "0px" }}
              >
                {list.slice(-4)?.map((item, index) => (
                  <div
                    class={`col-md-3 index_${index + 1}`}
                    style={{
                      padding: "0px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                    key={index}
                  >
                    <div class="md3_image">
                      <img
                        src={getResponsiveImage(
                          item.images?.[0]?.file || "",
                          imageResize
                        )}
                        alt={item.title}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div class="content_description">
                        <h4>{item.title}</h4>
                        <p>{item.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_15" style={{ marginBottom: "25px" }}>
        <div class="background_color">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="title_15">
              <h2>{children[1].categoriesName}</h2>
              <p>{children[0].description}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="owlcarowsel">
              <OwlCarousel
                style={{ display: "block" }}
                dots={false}
                nav={false}
                items={3}
                responsive={responsive}
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                    }}
                  >
                    {list.slice(11, 14)?.map((item, index) => (
                      <div
                        class="owl-item active"
                        style={{ marginRight: "15px" }}
                        key={index}
                      >
                        <div>
                          <div class="card_image">
                            <img
                              src={getResponsiveImage(
                                item.images?.[0]?.file || "",
                                imageResize
                              )}
                              alt={item.title}
                              style={{ width: "100%" }}
                            />
                            <div class="description">
                              <p class="text">{item.shortDescription}</p>
                            </div>
                          </div>
                          <div class="button_title">
                            <h3>{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="section_16" style={{ marginBottom: "25px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12">
              {list.slice(7, 11)?.map((item, index) => (
                <div class="col-md-6 col-sm-6 col-xs-6" key={index}>
                  <div class="icon_images">
                    <img
                      src={getResponsiveImage(
                        item.images?.[0]?.file || "",
                        imageResize
                      )}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div class="col-md-6 hidden-sm hidden-xs">
              <div class="box_choose">
                <div style={{ padding: "15px" }}>
                  {list.slice(0, 7)?.map((item, index) => (
                    <div
                      class="panel panel-default"
                      style={{
                        border: "1px solid rgb(27, 197, 209)",
                        borderRadius: "10px",
                        opacity: 1,
                        margin: "20px",
                      }}
                      key={index}
                    >
                      <div class="panel-heading">
                        <div
                          class="panel-title"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <a>
                            <div
                              style={{
                                paddingLeft: "10px",
                                color: " rgb(51, 51, 51)",
                                letterSpacing: "0.61px",
                                textTransform: "capitalize",
                                fontSize: "15px",
                                fontWeight: "600",
                              }}
                            >
                              {item.title}
                            </div>
                          </a>
                          <img
                            alt="Quy trình đặt lịch và những câu hỏi thường gặp"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMC45MTQiIGhlaWdodD0iMTAuOTE0Ij48cGF0aCBkPSJNMTAuNDg4IDUuMDMxaC00LjZWLjQyNmEuNDI2LjQyNiAwIDAwLS44NTMgMHY0LjZILjQyNmEuNDI2LjQyNiAwIDAwMCAuODUzaDQuNnY0LjZhLjQyNi40MjYgMCAwMC44NTMgMHYtNC42aDQuNmEuNDI2LjQyNiAwIDAwMC0uODUzeiIgZmlsbD0iIzAxNWM5YyIvPjwvc3ZnPg=="
                            onClick={() => togglePanel(index)}
                          />
                        </div>
                      </div>
                      <div
                        id={`panel-${index}`}
                        class="panel-collapse collapse"
                        style={{ display: "none" }}
                      >
                        <div class="panel-body">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
