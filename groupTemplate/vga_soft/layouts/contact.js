import { connect } from "react-redux";

const LienHe = (props) => {
  const { dataSite } = props;
  const office = dataSite.siteProfiles[0].offices[0];

  return (
    <div className="page-container">
      <section className="contact-page-1">
        <img
          className="liquid-background ls-is-cached lazyloaded"
          src="/static/vga_soft/images/liquid.svg"
          alt="liquid"
        />
        <div className="container">
          <div className="row section-intro">
            <div className="col-md-4">
              <h1 className="h1-with-animation--1 section-heading section-intro__heading">
                Liên hệ với chúng tôi
              </h1>
              <div className="contact-intro__subheading">
                <h2
                  className="section-subheading--1"
                  style={{ marginRight: "5px" }}
                >
                  Bạn muốn tìm giải pháp tối ưu
                </h2>
                <h2 className="section-subheading--2">
                  Hãy để VgaSoft giúp bạn
                </h2>
              </div>
              <div className="d-flex contactPage-infor__item">
                <div>
                  <img
                    src="/static/vga_soft/images/phone.svg "
                    className=" ls-is-cached lazyloaded"
                    alt=""
                  />
                </div>
                <div className="contactPage-infor">
                  <h2>Điện thoại</h2>
                  <p>
                    <a href={`tel:${office.phone}`}>{office.phone}</a>
                  </p>
                </div>
              </div>
              <div className="d-flex contactPage-infor__item">
                <div>
                  <img
                    src="/static/vga_soft/images/map.svg"
                    className=" ls-is-cached lazyloaded"
                    alt=""
                  />
                </div>
                <div className="contactPage-infor ">
                  <h2>Địa chỉ</h2>
                  <p>{office.address}</p>
                </div>
              </div>
              <div className="d-flex contactPage-infor__item">
                <div>
                  <img
                    src="/static/vga_soft/images/mail.svg"
                    alt=""
                    className=" ls-is-cached lazyloaded"
                  />
                </div>
                <div className="contactPage-infor ">
                  <h2> Mail </h2>
                  <p>
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="news-intro__images">
                <img
                  src="/static/vga_soft/images/section-intro-image-bg.png"
                  alt="section-intro-bg"
                  className="section-intro__bg ls-is-cached lazyloaded"
                />
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDO6xwXdudsBWYD1asUmmLtT9Sj9XdXufA&amp;q=place_id:ChIJ09o9p16rNTER9VPVekNDfIA"
                  width="654"
                  height="492"
                  className="contactPage-map section-intro__image"
                  title="map"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect()(LienHe);
