import React, { useState } from "react";
import RegisterForm from "@/componentWebs/RegisterForm";

const Demo = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [device, setDevice] = useState("DESKTOP");
  const DEVICE = {
    DESKTOP: {
      maxWidth: "100%",
      maxHeight: "100%",
      margin: 0,
      top: 0,
      left: 0,
    },
    MOBILE: {
      maxWidth: "375px",
      maxHeight: "568px",
      margin: "-310px 0 0 -187px",
      top: "50%",
      left: "50%",
    },
    TABLET: {
      maxWidth: "1024px",
      maxHeight: "568px",
      margin: "-310px 0 0 -512px",
      top: "50%",
      left: "50%",
    },
  };

  return (
    <>
      <div className="view-demo">
        <div className="demo-header">
          <div className="container">
            <div className="row">
              <div className="col-3 col-sm-5">
                <a
                  href={`/mau-giao-dien-562/${data?.folder}`}
                  className="view-back"
                >
                  <i className="icon-view-back" />
                  Quay về xem chi tiết
                </a>
              </div>
              <div
                className="col-5 col-sm-3 d-flex justify-content-center align-items-center view-type"
                style={{ height: "100%" }}
              >
                <a
                  className={`type-item desktop ${device === "DESKTOP" &&
                    "current"}`}
                  onClick={() => setDevice("DESKTOP")}
                >
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0H2C.897 0 0 .897 0 2v8c0 1.103.897 2 2 2h4.667v2h-2c-.552 0-1 .447-1 1 0 .553.448 1 1 1h6.667c.552 0 1-.447 1-1 0-.553-.448-1-1-1h-2v-2H14c1.104 0 2-.897 2-2V2c0-1.103-.896-2-2-2zM2 10V2h12v8H2z" />
                  </svg>
                  <span className="d-lg-inline d-none">Desktop</span>
                </a>
                <a
                  className={`type-item mobile ${device === "MOBILE" &&
                    "current"}`}
                  onClick={() => setDevice("MOBILE")}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7 0H6.3C5.6 0 5 .6 5 1.3v21.3c0 .8.6 1.4 1.3 1.4h12.3c.7 0 1.4-.587 1.4-1.287V1.3c0-.7-.6-1.3-1.3-1.3zm-6.2 22.6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm4.5-4c0 .2-.2.4-.4.4H8.4c-.2 0-.4-.2-.4-.4V3.4c0-.2.2-.4.4-.4h8.1c.3 0 .5.2.5.4v15.2z" />
                  </svg>
                  <span className="d-lg-inline d-none">Mobile</span>
                </a>
                <a
                  className={`type-item tablet ${device === "TABLET" &&
                    "current"}`}
                  onClick={() => setDevice("TABLET")}
                >
                  <svg
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37 0h-28c-2.76 0-5 2.24-5 5v38c0 2.76 2.24 5 5 5h28c2.76 0 5-2.24 5-5v-38c0-2.76-2.24-5-5-5zm-14 46c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm15-8h-30v-32h30v32z" />
                  </svg>
                  <span className="d-lg-inline d-none">Tablet</span>
                </a>
              </div>
              <div className="col-4 text-right" style={{ lineHeight: "35px" }}>
                <a
                  className=" d-md-inline-block btn-registration banner-home-registration event-Template-apply-form-open"
                  data-toggle="modal"
                  data-target="#ModalSetup"
                  onClick={handleOpen}
                >
                  Sử dụng giao diện này
                </a>
                <a
                  href={data?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-normal  d-lg-inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.116"
                    height="19.116"
                    viewBox="0 0 19.116 19.116"
                  >
                    <g
                      id="Group_4624"
                      data-name="Group 4624"
                      transform="translate(-5.75 -5.75)"
                    >
                      <line
                        id="Line_91"
                        data-name="Line 91"
                        y2="23.033"
                        transform="translate(23.452 7.165) rotate(45)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_92"
                        data-name="Line 92"
                        y1="23.033"
                        transform="translate(23.452 23.452) rotate(135)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-view">
          <div
            className="demo-container"
            style={DEVICE[device]}
            key={new Date() - 0}
          >
            <iframe src={data?.link} title={data?.templatesName} />
          </div>
        </div>
      </div>
      <RegisterForm
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        templatesName={data?.templatesName}
      />
    </>
  );
};

export default Demo;
