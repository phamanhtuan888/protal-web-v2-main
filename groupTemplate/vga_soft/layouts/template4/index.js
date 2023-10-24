/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from '@/componentWebs/ImageNew';

const Templates4 = ({ data, dataResult }) => (
  <section
    className="margin-bottom-large customer aos-init aos-animate"
    data-aos="fade-up"
    style={{ position: 'relative' }}
  >
    <img src="/static/vga_soft/images/ball.png" alt="ball" className="ball-image" />
    <div className="container text-center">
      <h1 className="custom_h1">{data?.objectListsName}</h1>
      <div className="customer-page-container justify-content-center">
        {dataResult?.list &&
          dataResult?.list.length > 0 &&
          dataResult?.list?.map((customer) => (
            <div className="customer-review__container" key={customer?.id}>
              <div className="customer-review__item">
                <div className="customer-review__card-background " />
                <div className="customer-infor">
                  <div className="customer-infor__top">
                    <div className="customer-avatar">
                      <img
                        className=" ls-is-cached lazyloaded"
                        alt={customer?.title}
                        src={getResponsiveImage(customer?.images?.[0]?.file || '', [96, 96, 96])}
                      />
                    </div>
                    <h3 className="customer--name">{customer?.title}</h3>
                  </div>
                  {customer?.shortDescription && <div className="customer-infor__bottom">{customer?.shortDescription}</div>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Templates4;
