/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import FormatPrice from "@/utils/formatPrice";
import { useState } from "react";

const Product = ({ data, relateProducts, dataSite }) => {
  const { list } = relateProducts;
  const categoriesId = data.categoriesId;
  // console.log(data);
  const imageResize = [380, 450, 540];

  const OwlCarousel = dynamic(() => import(`./OwlCarousel`), {
    ssr: false,
    loading: () => null,
  });
  const responsive = {
    0: { items: 2 },
    640: { items: 3 },
    990: { items: 4 },
    1200: { items: 5 },
  };
  // const Id = data.subProducts[0].id;
  const [selectedSubProductsId, setSelectedSubProductsId] = useState(null);

  const handleLabelClick = (subProductsId) => {
    if (data.subProducts.length !== 0) {
      setSelectedSubProductsId(subProductsId);
      console.log(subProductsId);
    }
  };
  function formatString(categoriesName) {
    var string = categoriesName.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return string.replace(/\s+/g, "-");
  }
  return (
    <>
      <section
        class="bread-crumb"
        style={{
          background:
            "url(//bizweb.dktcdn.net/100/488/726/themes/911609/assets/breadcrumb-bg.jpg?1694161164612) center no-repeat",
        }}
      >
        <div class="container">
          <div class="title-breadcrumb">{data?.productsName}</div>
          <ul class="breadcrumb">
            <li class="home">
              <a href="/">
                <span>Trang chủ</span>
              </a>
              <span class="mr_lr">
                &nbsp;
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="svg-inline--fa fa-chevron-right fa-w-10"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class=""
                  />
                </svg>
                &nbsp;
              </span>
            </li>

            <li>
              <a class="changeurl" href="/to-yen-tinh-che">
                <span>{data?.categories?.categoriesName}</span>
              </a>
              <span class="mr_lr">
                &nbsp;
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="svg-inline--fa fa-chevron-right fa-w-10"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class=""
                  />
                </svg>
                &nbsp;
              </span>
            </li>

            <li>
              <strong>
                <span>{data?.productsName}</span>
              </strong>
            </li>
            <li />
          </ul>
        </div>
      </section>
      <section class="product layout-product">
        <div class="container">
          <div class="details-product">
            <div class="row margin-am-10">
              <div class="product-detail-left product-images col-12 col-md-12 col-lg-6 col-left">
                <div class="product-image-block ">
                  <OwlCarousel
                    style={{ display: "block" }}
                    dots={false}
                    nav={false}
                    items={1}
                  >
                    <div class="owl-stage-outer">
                      <div
                        class="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0.25s ease 0s",
                        }}
                      >
                        {data?.images?.map((item, index) => (
                          <a class="owl-item" title="Click để xem" key={index}>
                            <img
                              height="540"
                              width="540"
                              class="img-responsive mx-auto d-block lazy"
                              src={getResponsiveImage(item?.file || "", [
                                600,
                                900,
                                1600,
                              ])}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </OwlCarousel>
                  <OwlCarousel
                    style={{ display: 'block',marginTop:'10px' }}
                    dots={false}
                    nav={false}
                    items={5}
                   
                  >
                    <div class="owl-stage-outer">
                      <div
                        class="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0.25s ease 0s",
                          
                        }}
                      >
                        {data?.images?.map((item, index) => (
                          <div
                            class="p-100 owl-item"
                            style={{ padding:'3px',border: '1px solid #ebebeb' }}
                          >
                            <img
                              class="lazy"
                              src={getResponsiveImage(item?.file || "", [
                                600,
                                900,
                                1600,
                              ])}
                            />
                          </div>
                          // </div>
                        ))}
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-6 col-right">
                <div class="details-pro">
                  <h1 class="title-product">{data?.productsName}</h1>
                  <form id="add-to-cart-form" class="form-inline">
                    <div class="price-box clearfix">
                      {data?.subProducts.length !== 0 ? (
                        selectedSubProductsId &&
                        data?.subProducts.find(
                          (subProduct) =>
                            subProduct.id === selectedSubProductsId
                        ) ? (
                          <>
                            <span class="special-price">
                              <FormatPrice
                                price={
                                  data?.subProducts.find(
                                    (subProduct) =>
                                      subProduct.id === selectedSubProductsId
                                  ).dealPrice
                                }
                                className="price"
                              />
                            </span>
                            {data?.subProducts.find(
                              (subProduct) =>
                                subProduct.id === selectedSubProductsId &&
                                subProduct.price !== "0"
                            ) ? (
                              <span
                                class="old-price"
                                style={{ marginLeft: "5px" }}
                              >
                                <FormatPrice
                                  price={
                                    data?.subProducts.find(
                                      (subProduct) =>
                                        subProduct.id === selectedSubProductsId
                                    ).price
                                  }
                                  className="price product-price-old"
                                />
                              </span>
                            ) : null}
                          </>
                        ) : null
                      ) : (
                        <>
                          <span class="special-price">
                            <FormatPrice
                              price={data?.dealPrice}
                              className="price"
                            />
                          </span>
                          {data?.price !== "0" ? (
                            <span
                              class="old-price"
                              style={{ marginLeft: "5px" }}
                            >
                              <FormatPrice
                                price={data?.price}
                                className="price product-price-old"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </div>

                    <div class="form-product">
                      <div class="select-swatch">
                        <div id="variant-swatch-0" class="swatch clearfix">
                          {data?.subProducts.length !== 0 ? (
                            <>
                              <div class="header-size">Kích thước:</div>
                              <div class="select-swap">
                                {data?.subProducts?.map((item, index) => (
                                  <div class="n-sd swatch-element " key={index}>
                                    <input class="variant-0" type="radio" />
                                    <label
                                      onClick={() =>
                                        handleLabelClick(
                                          item.subProductsProperties[0]
                                            .subProductsId
                                        )
                                      }
                                    >
                                      {item?.subProductsProperties[0]?.value}
                                      <img class="crossed-out" />
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div
                        class="product-promotion rounded-sm"
                        id="lofi-salebox"
                      >
                        <div class="product-promotion__heading">
                          <h3 class="d-inline-flex align-items-center">
                            <img
                              src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1694161164612"
                              data-src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1694161164612"
                              alt="Yến chưng khang phục 2"
                              data-image="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-product-promotion.png?1694161164612"
                              width="22"
                              height="22"
                              class="mr-2"
                            />
                            Khuyến mãi
                          </h3>
                        </div>
                        <ul class="promotion-box">
                          <li>
                            Miễn phí giao hàng cho đơn hàng từ 2.000.000 VNĐ tới
                            mọi tỉnh thành
                          </li>
                          <li>
                            Miễn phí ship nội thành trong bán kính 5km với đơn
                            hàng từ 1.000.000 VNĐ
                          </li>
                          <li>Quà tặng hấp dẫn lên tới 1.000.000 VNĐ</li>
                          <li>
                            Tiết kiệm lên tới 50% khi mua các sản phẩm combo
                          </li>
                        </ul>
                      </div>
                      <div class="clearfix form-group">
                        <div class="flex-quantity">
                          <div class="custom custom-btn-number show">
                            <label class="sl section">Số lượng:</label>
                            <div class="input_number_product form-control">
                              
                              <input
                                type="number"
                                class="form-control prd_quantity"
                              />
                             
                            </div>
                          </div>
                          <div class="btn-mua button_actions clearfix">
                            <div class="group-button">
                              <button
                                type="submit"
                                class="btn btn_base normal_button btn_add_cart add_to_cart btn-cart btn-soldout"
                              >
                                <span>Thêm vào giỏ hàng</span>
                              </button>
                              <button
                                type="button"
                                class="btn btn-lg btn-gray btn_buy btn-buyNow"
                              >
                                <span>Mua ngay</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="row margin-am-10">
              <div class="product-detail-left col-12 col-md-12 col-lg-12">
                <div class="append-product-tab">
                  <div class="product-tab e-tabs not-dqtab">
                    <ul class="tabs tabs-title clearfix">
                      <li class="tab-link active">
                        <h3 style={{ color: "#bf9f70" }}>Chi tiết sản phẩm</h3>
                      </li>
                    </ul>
                    <div class="tab-float">
                      <div
                        id="tab-1"
                        class="tab-1 tab-content content_extab current"
                      >
                        <div class="rte product_getcontent">
                          <div class="ba-text-fpt has-height">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data.description,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="productRelate">
          <div class="container">
            <div class="block-title">
              <h2>
                <a href="" title="Sản phẩm cùng loại">
                  Sản phẩm cùng loại
                </a>
              </h2>
            </div>

            <div class="margin-am">
              <OwlCarousel
                style={{ display: "block" }}
                dots={false}
                nav={false}
                items={5}
                responsive={responsive}
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                    }}
                  >
                    {list.map((item, index) => (
                      <div class="owl-item" key={index}>
                        <div class=" item_product_main">
                          <form class="variants product-action ">
                            <div class="product-thumbnail">
                              <a class="image_thumb scale_hover" href={`/product/${formatString(
                                      item?.categories?.categoriesName
                                    )}/${item?.url}`}>
                                <img
                                  class="lazyload"
                                  width="480"
                                  height="480"
                                  src={getResponsiveImage(
                                    item?.images[0]?.file || "",
                                    [600, 900, 1600]
                                  )}
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
                                <a>{item.productsName}</a>
                              </h3>
                              <div class="price-box">
                                <FormatPrice
                                  price={item?.dealPrice}
                                  className="price"
                                />
                                {item?.price !== "0" ? (
                                  <FormatPrice
                                    price={item?.price}
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
                      </div>
                    ))}
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
