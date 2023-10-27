import { connect } from "react-redux";
import dynamic from "next/dynamic";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import ReactPaginate from "react-paginate";
import FormatPrice from "@/utils/formatPrice";
import React, { useEffect,useState} from 'react';
import { fetchDataWithSort } from './controller';


const SanPham = ({ dataResult, data, query }) => {
  const handlePageChange = (e) => {
    window.location = `/${query.name}?page=${e.selected + 1}`;
  };
  const {
    list: [ ...list],
    pagination,
  } = dataResult;
  // console.log(list);
  
  return (
    <div className="container">
      <div className="row">
        <aside class="dqdt-sidebar sidebar col-lg-3 col-12 padding-10">
          <div class="aside-filter clearfix">
            <div class="aside-hidden-mobile">
              <div class="filter-container">
                <aside class="aside-item filter-type">
                  <div class="aside-title">
                    
                    <span class="nd-svg collapsible-plus">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z"
                          fill="#333333"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="aside-content filter-group">
                    <ul class="filter-type">
                      <li class="filter-item filter-item--check-box filter-item--green">
                        <label for="filter-yen-tinh-che">
                          <input type="checkbox" id="filter-yen-tinh-che" />
                          <i class="fa" />
                          {data.categoriesName}
                        </label>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside class="aside-item filter-price">
                  <div class="aside-title">
                    Chọn mức giá
                    <span class="nd-svg collapsible-plus">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                      >
                        <path
                          d="M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z"
                          fill="#333333"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="aside-content filter-group">
                    <ul>
                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-duoi-500-000d">
                            <input
                              type="checkbox"
                              id="filter-duoi-500-000d"
                              onchange="toggleFilter(this);"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="Dưới 500.000đ"
                              value="(<500000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            Giá dưới 500.000đ
                          </label>
                        </span>
                      </li>

                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-500-000d-1-000-000d">
                            <input
                              type="checkbox"
                              id="filter-500-000d-1-000-000d"
                              onchange="toggleFilter(this)"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="500.000đ - 1.000.000đ"
                              value="(>500000 AND <1000000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            500.000đ - 1.000.000đ
                          </label>
                        </span>
                      </li>

                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-1-000-000d-3-000-000d">
                            <input
                              type="checkbox"
                              id="filter-1-000-000d-3-000-000d"
                              onchange="toggleFilter(this)"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="1.000.000đ - 3.000.000đ"
                              value="(>1000000 AND <3000000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            1.000.000đ - 3.000.000đ
                          </label>
                        </span>
                      </li>

                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-3-000-000d-5-000-000d">
                            <input
                              type="checkbox"
                              id="filter-3-000-000d-5-000-000d"
                              onchange="toggleFilter(this)"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="3.000.000đ - 5.000.000đ"
                              value="(>3000000 AND <5000000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            3.000.000đ - 5.000.000đ
                          </label>
                        </span>
                      </li>

                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-5-000-000d-7-000-000d">
                            <input
                              type="checkbox"
                              id="filter-5-000-000d-7-000-000d"
                              onchange="toggleFilter(this)"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="5.000.000đ - 7.000.000đ"
                              value="(>5000000 AND <7000000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            5.000.000đ - 7.000.000đ
                          </label>
                        </span>
                      </li>
                      <li class="filter-item filter-item--check-box filter-item--green">
                        <span>
                          <label for="filter-tren7-000-000d">
                            <input
                              type="checkbox"
                              id="filter-tren7-000-000d"
                              onchange="toggleFilter(this)"
                              data-group="Khoảng giá"
                              data-field="price_min"
                              data-text="Trên 7.000.000đ"
                              value="(>7000000)"
                              data-operator="OR"
                            />
                            <i class="fa" />
                            Giá trên 7.000.000đ
                          </label>
                        </span>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </aside>

        <div className="block-collection col-lg-9 col-12">
          <div className="category-products">
            <div class="sortPagiBar clearfix">
              <div class="sort-cate clearfix">
                <div id="sort-by">
                  <label class="left">Sắp xếp theo</label>
                  <ul class="ul_col">
                    <li>
                      <span>A → Z</span>
                      <ul class="content_ul">
                        <li>
                          <a >
                            Mặc định
                          </a>
                        </li>
                        <li>
                          <a >
                            A → Z
                          </a>
                        </li>
                        <li>
                          <a>
                            Z → A
                          </a>
                        </li>
                        <li>
                          <a>
                            Giá tăng dần
                          </a>
                        </li>
                        <li>
                          <a >
                            Giá giảm dần
                          </a>
                        </li>
                        <li>
                          <a
                            
                          >
                            Hàng mới nhất
                          </a>
                        </li>
                        <li>
                          <a
                           
                          >
                            Hàng cũ nhất
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <section class="products-view products-view-grid list_hover_pro">
              <div className="row">
                {list.map((item, index) => (
                  <div
                    class="col-6 col-xl-4 col-lg-4 col-md-4 mrb-20"
                    key={index}
                  >
                    <div class="item_product_main">
                      <form class="variants product-action ">
                        <div class="product-thumbnail">
                          <a
                            class="image_thumb scale_hover"
                            style={{ height: "186px" }}
                            href={`/product/${data?.url}/${item?.url}`}
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
                            />
                          </a>
                          <div class="action d-xl-block d-none">
                            <div class="actions-secondary">
                              <a title="Xem nhanh" class="quick-view btn-views">
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
                        </div>
                        <div class="product-info">
                          <h3 class="product-name">
                            <a
                               href={`/product/${data?.url}/${item?.url}`}
                              title={item?.title}
                            >
                              {item.productsName}
                            </a>
                          </h3>
                          <div class="price-box">
                            <FormatPrice price={item.dealPrice} className="price" />
                            {item.price !== '0'? (
                              <FormatPrice price={item.price} className="compare-price" />
                            ): null}
                          
                          </div>
                        </div>
                        <div class="product-btn d-none d-xl-block">
                          <div class="actions-primary btn-views">
                            <input type="hidden" />
                            <button
                              class="btn-cart add_to_cart "
                              title="Thêm vào giỏ hàng"
                            >
                              Thêm vào giỏ hàng
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <div className="pagenav">
              <nav className="clearfix relative nav_pagi w_100">
                {pagination && pagination.total > pagination.pageSize && (
                  <ReactPaginate
                    forcePage={pagination.current - 1}
                    breakLabel="..."
                    nextLabel="»"
                    previousLabel="«"
                    pageRangeDisplayed={2}
                    pageCount={Math.ceil(
                      pagination.total / pagination.pageSize
                    )}
                    pageLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    pageClassName="page-item"
                    nextClassName="page-item"
                    prevClassName="page-item"
                    activeClassName="page-item active disabled"
                    disabledClassName="page-item disabled"
                    containerClassName="pagination clearfix"
                    onPageChange={handlePageChange}
                  />
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(SanPham);
