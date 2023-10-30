import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import FormatPrice from "@/utils/formatPrice";
import { useDispatch } from "react-redux";

const DetailView = ({ product, closeDetail }) => {
 // console.log(product);

    // useEffect(() => {}, [product]);

  useEffect(
    () => {
      const fetchProductDetails = async () => {
        if (product && product.productsName) {
          try {
            dispatch({
              type: "webs/fetchProductInfo",
              payload: { url: product.url },
            });
            
          } catch (error) {
            console.error("Error dispatching fetchProductInfo: ", error);
          }
        }
      };

      fetchProductDetails();
    },
    [ product]
  );

  console.log(product);

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


  return (
    <div id="quick-view-product" class="quickview-product">
      {product ? (
        <>
          <div class="quickview-overlay fancybox-overlay fancybox-overlay-fixed" />
          <div class="quick-view-product">
            <div class="block-quickview primary_block details-product">
              <div class="row">
                <div class="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
                  <div class="image-block large-image col_large_default">
                    <span class="view_full_size">
                      <a class="img-product" title="" href="javascript:;">
                        <img
                          src={getResponsiveImage(
                            product?.images[0].file || "",
                            [600, 900, 1600]
                          )}
                          class="img-responsive product-featured-image-quickview"
                          alt="quickview"
                        />
                      </a>
                    </span>
                  </div>
                  {/* <div class="more-view-wrapper clearfix">
                    <div
                      class="thumbs_quickview owl_nav_custome1 swiper-container thumbs_list_quickview swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                      id="thumbs_list_quickview"
                    > */}
                  <OwlCarousel
                    style={{ display: "block" }}
                    dots={false}
                    nav={false}
                    items={4}
                  >
                    <div class="owl-stage-outer"  style={{marginTop:'15px'}}s>
                      <ul
                        class="product-photo-thumbs quickview-more-views-owlslider not-thuongdq owl-stage"
                        id="thumblist_quickview"
                      >
                        {product.images.map((item, index) => (
                          <li
                            class="owl-item"
                            style={{ width: "97.5px", marginRight: "15px" }}
                          >
                            <a>
                              <img
                                src={getResponsiveImage(item?.file || "", [
                                  600,
                                  900,
                                  1600,
                                ])}
                                alt="Zomart"
                                style={{
                                  maxWidth: "120px",
                                  maxHeight: "120px",
                                }}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </OwlCarousel>
                </div>
                <div class="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border">
                  <div class="head-qv group-status">
                    <h3 class="qwp-name title-product">
                      <a class="text2line">{product?.productsName}</a>
                    </h3>
                    <div class="vend-qv group-status">
                      <div class="left_vend">
                        <div class="first_status ">
                          Thương hiệu:
                          {product?.brands !== null ? (
                            <span class="vendor_ status_name">
                            {product?.brands}
                          </span>
                          ):(
                            <span class="vendor_ status_name" style={{marginLeft:'5px'}}>Đang cập nhật</span>
                          )}
                          
                        </div>
                        <span class="line_tt">|</span>
                        <div class="top_sku first_status">
                          Mã sản phẩm:
                          <span class="sku_ status_name" style={{marginLeft:'5px'}}>
                            {product?.productsCode}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="quickview-info">
                    <span class="prices price-box">
                      <FormatPrice
                        price={product?.dealPrice}
                        className="price product-price sale-price on-sale"
                      />
                      <FormatPrice
                        price={product?.price}
                        className="price product-price-old old-price"
                      />
                    </span>
                  </div>

                  <div class="product-description product-summary" />

                  <form
                    class="quick_option variants form-ajaxtocart form-product"
                    id="product-actions-32030705"
                  >
                    <span class="price-product-detail d-none">
                      <span class="" />
                    </span>
                    <div class="selector-wrapper">
                      <label>Kích thước</label>
                      <select class="single-option-selector">
                        <option value="50gram">50gram</option>
                        <option value="100gram">100gram</option>
                      </select>
                    </div>
                    <select class="d-none" style={{ display: "none" }}>
                      <option value="94469554">50gram</option>
                      <option value="94469555">100gram</option>
                    </select>
                    <div class="swatch clearfix">
                      <div style={{ marginBottom: "10px" }}>Kích thước: </div>
                      <div class="swatch-element 50gram available ">
                        <input id="swatch-0-50gram" type="radio" />
                        <label>50gram</label>
                      </div>
                      <div class="swatch-element 100gram available ">
                        <input type="radio" />
                        <label for="swatch-0-100gram">100gram</label>
                      </div>
                    </div>
                    <div class="form_product_content">
                      <div class="count_btn_style quantity_wanted_p">
                        <div class="soluong1 clearfix">
                          <span class="soluong_h">Số lượng:</span>
                          <div class="sssssscustom input_number_product">
                            <input
                              type="number"
                              id="quantity-detail"
                              class="form-control prd_quantity"
                            />
                          </div>
                        </div>
                        <div class="button_actions clearfix">
                          <button
                            type="submit"
                            class="btn_cool btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail"
                          >
                            <span class="btn-content text_1">
                              Thêm vào giỏ hàng
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <input type="hidden" name="id" value="32030705" />
                  </form>
                </div>
              </div>
            </div>
            <a class="quickview-close close-window" onClick={closeDetail}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                class="svg-inline--fa fa-times fa-w-10"
              >
                <path
                  fill="currentColor"
                  d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                  class=""
                />
              </svg>
            </a>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailView;
