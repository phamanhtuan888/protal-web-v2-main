import { connect } from 'react-redux';
import { getResponsiveImage } from '@/componentWebs/ImageNew';

const IntroduceAboutUs = ({ dataResult, data }) => {
  const list = dataResult?.list[0];
  return (
    <div className="container  margin-bottom-8">
      <div className="row section-intro">
        <div className="col-lg-4">
          <div className="aboutus-intro__text">
            <h1 className="h1-with-animation--1 section-heading section-intro__heading">
              {data?.categoriesName || ''}
            </h1>
            <h2>{list?.title || ''}</h2>
            <div className="text-wrapper">
              <p className="section-intro__description">{list?.shortDescription || ''}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="aboutus-intro__images">
            <img
              src="/static/vga_soft/images/section-intro-image-bg.png"
              alt="section-intro-bg"
              className="section-intro__bg ls-is-cached lazyloaded"
            />
            <img
              className="section-intro__image ls-is-cached lazyloaded"
              alt={list?.title || ''}
              src={getResponsiveImage(list?.images[0]?.file || '', [450, 540, 650])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(IntroduceAboutUs);
