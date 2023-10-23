import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
const GioiThieu = ({ dataResult, data }) => {
  const { list } = dataResult;
  const imageResize = [380, 450, 540];
  const { children } = data;
  // console.log(list);
  // console.log(children);
  function togglePanel(index) {
    const panel = document.getElementById(`panel-${index}`);
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const newSrc = getResponsiveImage(
      children[3].image?.file || "",
      imageResize
    );

    setBackgroundImage(`url("${newSrc}")`);
  }, []);
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
    <div className="introduce">
      <div className="section_11">
        <div class="container">
          <div class="row">
            <div class="col-md-5 hidden-sm hidden-xs">
              <img
                src={getResponsiveImage(
                  children[1].image?.file || "",
                  imageResize
                )}
                alt={children[1].categoriesName}
              />
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
              <div class="experience">
                <h2>{children[1].categoriesName}</h2>
                <p>{children[1].description}</p>
                {list.slice(6, 9)?.map((item, index) => (
                  <div
                    class="panel panel-default"
                    key={index}
                    style={{
                      border: "1px solid rgb(27, 197, 209)",
                      borderRadius: "10px",
                      opacity: 1,
                    }}
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
                          <div>{item.title}</div>
                        </a>
                        <img
                          alt="Chúng tôi có kinh nghiệm 25 năm trong ngành"
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
        <div class="image_special">
          <div class="container">
            <div class="row">
              <img
                alt="Chúng tôi có kinh nghiệm 25 năm trong ngành"
                src="https://img.nhathuocgpp.com.vn/connectcare/images/20200929/NoPath___Copy_(58)_2x.png?widthImage=430"
                style={{
                  width: "253px",
                  height: "279px",
                  margin: "-74px 0px 0px -189px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section_12">
        <div class="container-fluid">
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div
              class="background_blue"
              style={{ maxHeight: "458px", height: "458px" }}
            >
              <div
                class="col-md-12 col-sm-12 xol-xs-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div class="title_background">
                  <h2>{children[2].categoriesName}</h2>
                  <p
                    style={{
                      color: "rgb(255, 255, 255)",
                      textAlign: "center",
                      fontSize: "15px",
                      maxWidth: "570px",
                    }}
                  >
                    {children[2].description}
                  </p>
                  <div class="vga_infor">
                    {list.slice(3, 6)?.map((item, index) => (
                      <div class="col-md-4 col-sm-4 col-xs-4" key={index}>
                        <div class="counter_box">
                          <img
                            src={getResponsiveImage(
                              item.images?.[0]?.file || "",
                              imageResize
                            )}
                            alt={item.title}
                            style={{ maxHeight: "70px", maxWidth: "90px" }}
                          />
                          <h3>{item.shortDescription}</h3>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 hidden-sm hidden-xs" style={{ padding: "0px" }}>
            <img
              alt="Thành tựu của VGA Clinic"
              src="https://img.nhathuocgpp.com.vn/connectcare/images/20200929/O6RBXH0_2x.jpg?widthImage=1440"
              style={{ maxHeight: "524px" }}
            />
          </div>
        </div>
      </div>
      <div class="section_13">
        <div class="container">
          <div class="row">
            <div class="col-md-6 hidden-sm hidden-xs">
              <div class="new_title">
                <h4>
                  <span>{children[0].categoriesName}</span>
                </h4>
                <p>{children[1].description}</p>
              </div>
              <div class="bs_image">
                <img
                  src={getResponsiveImage(
                    children[0].image?.file || "",
                    imageResize
                  )}
                  alt={children[0].categoriesName}
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="about_bs">
                {list.slice(9, 13)?.map((item, index) => (
                  <div class="col-md-6 col-sm-6 col-xs-6" key={index}>
                    <img
                      src={getResponsiveImage(
                        item.images?.[0]?.file || "",
                        imageResize
                      )}
                      alt={item.title}
                    />
                    <div class="dr_infor">
                      <h3>{item.title}</h3>
                      <h5>{item.shortDescription}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section_10"
        style={{
          backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgb(52, 152, 219)",
          opacity: "0.82",
          height: "605px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section_10_title">
                <h2>{children[3].categoriesName}</h2>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <OwlCarousel
                style={{ display: "block" }}
                dots={false}
                nav={false}
                responsive={responsive}
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "100%",
                    }}
                  >
                    {list.slice(0, 3)?.map((item, index) => (
                      <div
                        class="owl-item active"
                        style={{ marginRight: "10px", width: "370px" }}
                        key={index}
                      >
                        <img
                          src={getResponsiveImage(
                            item.images?.[0]?.file || "",
                            imageResize
                          )}
                          alt={item.title}
                          style={{ maxHeight: "270px", maxWidth: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(GioiThieu);
