import { getResponsiveImage } from '@/componentWebs/ImageNew';

const Templates3 = ({ data, dataResult }) => (
  <section
    className="solution-homepage-container aos-init aos-animate"
    data-aos="fade-up"
    data-aos-duration="1000"
    style={{ position: 'relative' }}
  >
    <img
      src="/static/vga_soft/images/A.png"
      alt="A-character"
      className="q-character lazyload"
      data-aos="fade-left"
      style={{ right: 0 }}
    />
    <div className="container solution-homepage">
      <div className="row">
        <div className="col-md-6">
          <img
            className="w-100 solution-homepage__image ls-is-cached lazyloaded"
            alt={dataResult?.list[0]?.title || ''}
            src={getResponsiveImage(dataResult?.list[0]?.images[0]?.file, [380, 450, 540])}
          />
        </div>
        <div className="col-md-6 solution-homepage__content">
          <h1 className="h1-with-animation--1 section-heading solution-homepage__heading">
            {dataResult?.list[0]?.categories.categoriesName}
          </h1>
          <p className="sw_solution">{data?.objectListsName}</p>
          <h2 className="solution-homepage__subheading--2 section-subheading--2">{dataResult?.list[0]?.title || ''}</h2>
          <p className="solution-homepage__description" style={{ whiteSpace: 'pre-wrap' }}>
            {dataResult?.list[0]?.shortDescription || ''}
          </p>
          <button className="linear-button" type="button">
            <a href={data?.url} style={{ color: '#fff' }}>
              Giải pháp chúng tôi cung cấp
            </a>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Templates3;
