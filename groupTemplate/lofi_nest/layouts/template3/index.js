import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import $ from "jquery";
import FormatPrice from "@/utils/formatPrice";

const Templates3 = ({ data, dataResult }) => {
  const { list } = dataResult;
  // console.log(data);
  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    768: { items: 4 },
    995: { items: 5 },
  };
  function formatString(categoriesName) {
    var string = categoriesName.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return string.replace(/\s+/g, "-");
  }

  return (
    <div class="section_flash_sale">
      <div class="container">
        <div class="block-wraper">
          <div class="block-title">
            <h2>
              <a title="Giảm giá sốc">
                <img
                  class="img-responsive"
                  width="47"
                  height="51"
                  src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/flash-left.png?1694161164612"
                  alt="Giảm giá sốc"
                />
                GIẢM GIÁ SỐC
                <img
                  class="img-responsive"
                  width="63"
                  height="44"
                  src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/flash-right.png?1694161164612"
                  alt="Giảm giá sốc"
                />
              </a>
            </h2>
          </div>
          <div class="block-content">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-12">
                <OwlCarousel
                  style={{ display: "block" }}
                  dots={false}
                  nav={false}
                  items={4}
                  responsive={responsive}
                  margin={30}
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
                                href={`/product/${formatString(
                                  item?.categories?.categoriesName
                                )}/${item?.url}`}
                                class="image_thumb scale_hover"
                                // style={{ height: "181px" }}
                              >
                                <img
                                  class="lazyload loaded"
                                  width="480"
                                  height="480"
                                  src={getResponsiveImage(
                                    item?.images[0]?.file || "",
                                    [600, 900, 1600]
                                  )}
                                  alt={item?.productsName}
                                />
                              </a>
                              <span class="smart">- 10%</span>
                              <div class="action d-xl-block d-none">
                                <div class="actions-secondary">
                                  <a class="quick-view btn-views">
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
                                <a title="Tổ yến tinh chế loại 2">
                                  {item.productsName}
                                </a>
                              </h3>
                              <div class="price-box">
                                <FormatPrice
                                  price={item.dealPrice}
                                  className="price"
                                />
                                <FormatPrice
                                  price={item.price}
                                  className="compare-price"
                                />
                              </div>
                            </div>
                            <div class="product-btn d-none d-xl-block">
                              <div class="actions-primary btn-views">
                                <input
                                  class="hidden"
                                  type="hidden"
                                  name="variantId"
                                />
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
      </div>
    </div>
  );
};

export default Templates3;
