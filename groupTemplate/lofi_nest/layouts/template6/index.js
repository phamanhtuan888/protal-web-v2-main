/* eslint-disable jsx-a11y/alt-text */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import FormatPrice from "@/utils/formatPrice";

const Templates6 = ({ data, dataResult }) => {
  const { list } = dataResult;
  console.log(dataResult);

  // console.log(list);
  const [selectedCategoryId, setSelectedCategoryId] = useState("620");

  const handleTabClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    // console.log(categoryId);
  };

  const OwlCarousel = dynamic(() => import(`../OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: {
      items: 1,
    },
    560: {
      items: 2,
    },
    990: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };
  function formatString(categoriesName) {
    var string = categoriesName.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return string.replace(/\s+/g, "-");
  }
  return (
    <section class="section_product_tab">
      <div class="container">
        <div class="e-tabs not-dqtab ajax-tab-1">
          <div class="content">
            <div class="block-title">
              <h2>{data?.objectListsName}</h2>
              <ul
                class="tabs tabs-title tab-desktop ajax clearfix"
                style={{ paddingBottom: "5px" }}
              >
                <li
                  className={`tab-link has-content ${
                    selectedCategoryId === "620" ? "current" : ""
                  }`}
                  onClick={() => handleTabClick("620")}
                >
                  <span title="Tổ yến tinh chế">Tổ yến tinh chế</span>
                </li>

                <li
                  className={`tab-link has-content ${
                    selectedCategoryId === "621" ? "current" : ""
                  }`}
                  onClick={() => handleTabClick("621")}
                >
                  <span title="Tổ yến tinh chế">Tổ yến thô</span>
                </li>

                <li
                  className={`tab-link has-content ${
                    selectedCategoryId === "622" ? "current" : ""
                  }`}
                  onClick={() => handleTabClick("622")}
                >
                  <span title="Tổ yến tinh chế">Tổ yến chưng sẵn</span>
                </li>

                <li
                  className={`tab-link has-content ${
                    selectedCategoryId === "623" ? "current" : ""
                  }`}
                  onClick={() => handleTabClick("623")}
                >
                  <span title="Tổ yến tinh chế">Món Soup</span>
                </li>

                <li
                  className={`tab-link has-content ${
                    selectedCategoryId === "624" ? "current" : ""
                  }`}
                  onClick={() => handleTabClick("624")}
                >
                  <span title="Tổ yến tinh chế">Nước yến</span>
                </li>
              </ul>
            </div>

            <div class="tab-1 tab-content current">
              <div class="contentfill">
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
                    >
                      {list.map((item, index) => {
                        if (selectedCategoryId === item.categoriesId) {
                          return (
                            <div class="item_product_main owl-item" key={index}>
                              <form class="variants product-action ">
                                <div class="product-thumbnail">
                                  <a
                                    class="image_thumb scale_hover"
                                    style={{ height: "263px" }}
                                    href={`/product/${formatString(
                                      item?.categories?.categoriesName
                                    )}/${item?.url}`}
                                  >
                                    <img
                                      class="lazyload loaded"
                                      width="480"
                                      height="480"
                                      src={getResponsiveImage(
                                        item?.images[0]?.file || "",
                                        [600, 900, 1600]
                                      )}
                                    />
                                  </a>
                                  {item.price !== "0" ? (
                                    <span class="smart">
                                      - {Math.round(((item.price - item.dealPrice) / item.price) * 100 )} %
                                    </span>
                                  ) : null}
                                  <div class="action d-xl-block d-none">
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
                                    <a
                                      class="btn-compare js-btn-wishlist setWishlist btn-views"
                                      title="Thêm vào yêu thích"
                                    >
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
                                <div class="product-info">
                                  <h3 class="product-name">
                                    <a title="Tổ yến tinh chế loại 1">
                                      {item.productsName}
                                    </a>
                                  </h3>
                                  <div class="price-box">
                                    <FormatPrice
                                      price={item.dealPrice}
                                      className="price"
                                    />
                                    {item.price !== "0" ? (
                                      <FormatPrice
                                        price={item.price}
                                        className="compare-price"
                                      />
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
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates6;
