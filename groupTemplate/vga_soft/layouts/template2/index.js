/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from '@/componentWebs/ImageNew';

const Templates2 = ({ data, dataResult }) => (
  <section className="aboutus-homepage" style={{ position: 'relative' }}>
    <img
      src="/static/vga_soft/images/G.png"
      alt="G-character"
      data-aos="fade-right"
      className="a-character ls-is-cached lazyloaded aos-init aos-animate"
      style={{ left: 0 }}
    />
    <div className="container">
      <h1 className="h1-with-animation--1 section-heading">{data?.objectListsName}</h1>
      <div className="row">
        <div className="col-md-6 aboutus-homepage-cards">
          {dataResult?.list &&
            dataResult?.list?.map((item, index) => {
              const resize = [80, 80, 80];
              return (
                <div className="aboutus-homepage-card" key={index}>
                  <div className="aboutus-homepage-card__image">
                    <img
                      className="img-fit ls-is-cached lazyloaded"
                      alt={item?.title}
                      src={getResponsiveImage(item?.images[0]?.file || '', resize)}
                    />
                  </div>
                  <div className="aboutus-homepage-card__content">
                    <div className="aboutus-homepage-card__heading">
                      <h3>{item?.title}</h3>
                    </div>
                    <div className="aboutus-homepage-card__description">
                      <p>{item?.shortDescription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="col-md-6 aos-init aos-animate" data-aos="fade-left">
          <div>
            {data?.images &&
              data?.images.map((img) => {
                const resize = [540, 450, 380];
                return (
                  <img
                    className="aboutus-homepage-img ls-is-cached lazyloaded"
                    key={Math.random()}
                    src={getResponsiveImage(img?.file || '', resize)}
                    alt=""
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Templates2;
