import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import FormatPrice from "@/utils/formatPrice";

const Templates5 = ({ data, dataResult }) => {
  
  const { list } = dataResult;

  // console.log(data);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: { items: 2 },
    768: { items: 2 },
    1030: { items: 3 },
    1200: { items: 4 },
  };
  return (
    <section class="section_product_new section_product">
      <div class="container">
        <div class="block-title">
          <h2>
            <a title="Tổ yến chưng sẵn">{data?.objectListsName}</a>
          </h2>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="block-product">
              <OwlCarousel
                style={{ display: "block" }}
                dots={false}
                nav={false}
                items={4}
                responsive={responsive}
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                    }}
                    // style="transform: translate3d(-288px, 0px, 0px); transition: all 0.25s ease 0s; width: 1444px;"
                  >
                    {list.map((item, index) => (
                      <div class="item_product_main owl-item" key={index}>
                        <form class="variants product-action ">
                          <div class="product-thumbnail">
                            <a
                              class="image_thumb scale_hover"
                              style={{ height: "247px" }}
                              href={`/to-yen-chung-san/${item?.url}`}
                            title={item?.title}
                            >
                              <img
                                class="lazyload loaded"
                                width="480"
                                height="480"
                                src={getResponsiveImage(
                                  item?.images[0]?.file || "",
                                  [600, 900, 1600]
                                )}
                                alt="Yến chưng khang phục 2"
                              />
                            </a>
                            <div class="action d-xl-block d-none">
                              <div class="actions-secondary">
                                <a
                                  title="Xem nhanh"
                                  class="quick-view btn-views"
                                >
                                  <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.7 7.99995C12.7 9.49112 11.4912 10.7 10 10.7C8.50883 10.7 7.3 9.49112 7.3 7.99995C7.3 6.50878 8.50883 5.29995 10 5.29995C11.4912 5.29995 12.7 6.50878 12.7 7.99995Z"
                                      stroke="#14181F"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M1 7.99995C2.44012 4.31233 5.80243 1.69995 10 1.69995C14.1976 1.69995 17.5599 4.31233 19 7.99995C17.5599 11.6876 14.1976 14.3 10 14.3C5.80243 14.3 2.44012 11.6876 1 7.99995Z"
                                      stroke="#14181F"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </a>
                                <a class="btn-compare js-btn-wishlist setWishlist btn-views">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                  >
                                    <path
                                      d="M1.30469 7.70401C0.413933 5.13899 1.5274 1.87444 3.97697 1.17489C5.3131 0.708524 7.09458 1.17487 7.98533 2.57397C8.87608 1.17487 10.6576 0.708524 11.9937 1.17489C14.6659 2.10763 15.5567 5.13899 14.666 7.70401C13.5525 11.6681 9.09877 14 7.98533 14C6.87189 13.7668 2.64081 11.9013 1.30469 7.70401Z"
                                      stroke="#000000"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="product-info">
                            <h3 class="product-name">
                              <a >
                                {item.productsName}
                              </a>
                            </h3>
                            {/* <div class="price-box">{item.price}₫</div> */}
                            <div class="price-box">
                              {/* <span class="price">{item.dealPrice}₫</span> */}
                              <FormatPrice price={item.dealPrice} className="price" />
                              {item.price !== '0' ? (
                                  <FormatPrice price={item.price} className="compare-price" />
                                ) : null}
                            </div>
                          </div>
                          <div class="product-btn d-none d-xl-block">
                            <div class="actions-primary btn-views">
                              <input class="hidden" type="hidden" />
                              <button
                                class="btn-cart"
                                title="Tùy chọn"
                                type="button"
                              >
                                Tùy chọn
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ))}
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Templates5;
