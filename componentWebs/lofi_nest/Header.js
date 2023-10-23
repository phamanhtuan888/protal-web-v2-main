"use client";

/* eslint-disable no-unused-vars */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import { Drawer, Affix, Button } from "antd";
import { Close } from "@ant-design/icons";

function Header(props) {
  const { menuHeader, dataSite } = props;
  // console.log(menuHeader);
  const { siteProfiles } = dataSite;
  // console.log(dataSite);
 
  const [isCurrent, setIsCurrent] = useState(false);
  // const [isActive, setIsActive] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  //ẩn hiện nav mobile
  const handleMenuClick = () => {
    setIsCurrent(!isCurrent);
    event.stopPropagation();
  };
  const handleBodyMenuClick = (event) => {
    if (isCurrent && !event.target.closest(".header-nav")) {
      setIsCurrent(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleBodyMenuClick);
    return () => {
      document.body.removeEventListener("click", handleBodyMenuClick);
    };
  }, [isCurrent]);
  
  //ẩn hiện menuChild
  const toggleMenu = (index) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(null);
    } else {
      setActiveMenuIndex(index);
    }
  };

  return (
    <>
      <div class="topbar">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4 top-bar-left">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>{dataSite?.siteProfiles[0].hotline}</span>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span>{dataSite?.siteProfiles[0].offices[0].email}</span>
              </a>
            </div>
            <div class="col-12 col-lg-8 top-bar-right">
              <ul>
                <li>
                  <a href="/account/login" title="Đăng nhập">
                    Đăng nhập
                  </a>
                </li>
                <li>
                  <a href="/account/register" title="Đăng ký">
                    Đăng ký
                  </a>
                </li>
                <li>
                  <a href="/he-thong-cua-hang" title="Hệ thống cửa hàng">
                    Hệ thống cửa hàng
                  </a>
                </li>
                <li>
                  <a href="/san-pham-yeu-thich" title="Sản phẩm yêu thích">
                    Sản phẩm yêu thích
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className={`opacity_menu ${isCurrent ? "current" : ""}`}/>
        <div className="container">
          <div className="row row-header align-items-center">
            <div className="col-xl-2 col-lg-3 col-sm-9 col-7">
              <a className="logo" title="Logo">
                <img
                  src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/logo.png?1694161164612"
                  alt="Lofi Nest"
                  className="img-fluid"
                  width="93"
                  height="55"
                  href='/'
                />
              </a>
            </div>
            <div className="col-xl-9 col-lg-7 col-sm-12 col-12 header-menu">
              <div className="header-menu-des">
                <nav className={`header-nav ${isCurrent ? "current" : ""}`}>
                  <div className="user-menu d-lg-none">
                    <div className="user-icon">
                      <img
                        src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/icon-user.png?1694161164612"
                        alt="Lofi Nest"
                      />
                    </div>
                    <div className="user-account">
                      <a className="btnx">Đăng nhập</a>
                      <small>
                        <a>Đăng ký</a>
                      </small>
                    </div>
                  </div>
                  <ul className="item_big">
                    {menuHeader &&
                      menuHeader?.map((menuItem, index) => (
                        <li
                          key={index}
                          
                          className={`nav-item ${
                            activeMenuIndex === index ? "current" : ""
                          }`}
                        >
                          <a className="a-img" href={menuItem.url} title={menuItem.menusName}>
                            {menuItem.menusName}
                          </a>
                          {menuItem.children.length > 0 ? (
                              <i
                                style={{ cursor: "pointer" }}
                                className="fa fa-caret-down"
                                id="caret-icon1"
                                onClick={() => toggleMenu(index)}
                              />
                            ) : null}
                          {menuItem.children.length > 0 && (
                            <ul className="item_small">
                              {menuItem.children.map(
                                (childItem, childIndex) => (
                                  <li key={childIndex}>
                                    <a className="" title={childItem.menusName} href={childItem.url}>
                                      {childItem.menusName}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    <li className="d-lg-none d-block item-mb">
                      <a title="Hệ thống cửa hàng">Hệ thống cửa hàng</a>
                      <a title="Sản phẩm Yêu thích">Sản phẩm yêu thích</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-1 col-lg-2 col-sm-3 col-5 header-control">
              <div className="ul-control">
                <div className="header-search">
                  <a
                    className="icon button-search"
                
                  >
                    <svg
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
                <div className="header-cart block-cart">
                  <a className="icon" aria-label="Giỏ hàng" title="Giỏ hàng">
                    <img
                      src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/shopping-cart.svg?1694161164612"
                      alt="Lofi Nest"
                      width="24"
                      height="24"
                    />
                    <span className="count_item_pr hidden-count">0</span>
                  </a>
                  <div className="top-cart-content">
                    <div className="CartHeaderContainer">
                      <div className="cart--empty-message">
                        <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`menu-bar d-lg-none d-block ${
                    isCurrent ? "current" : ""
                  }`}
                  onClick={handleMenuClick}
                  style={{ display: "flex !important", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      id="TabBar-Icons"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g fill="#fff" id="Hamburger-Round">
                        <path
                          d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z"
                          id="Hamburger"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-wrap-popup">
          <div class="container">
            <div class="search-header">
              <form class="search-form">
                <input
                  type="text"
                  name="query"
                  class="search-auto form-control"
                  placeholder="Tìm kiếm sản phẩm"
                
                />
                <input type="hidden" name="type" />
                <button
                  class="btn btn-default"
                  type="submit"
                  aria-label="Tìm kiếm"
                >
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-search"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    width="22.468"
                    height="22.4"
                  >
                    <defs>
                      <symbol id="icon-search" viewBox="0 0 22.468 22.4">
                        <path
                          id="search"
                          d="M21.7,20.405l-5.464-5.464a9.169,9.169,0,1,0-1.294,1.294L20.405,21.7A.915.915,0,1,0,21.7,20.405ZM9.152,16.475a7.324,7.324,0,1,1,7.324-7.324A7.324,7.324,0,0,1,9.152,16.475Z"
                          transform="translate(0.232 0.232)"
                          strokeWidth="0.4px"
                        />
                      </symbol>
                    </defs>
                    <use href="#icon-search" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          {/* <ul style={{position:'absolute',top:'65px',backgroundColor:'#eceeee',width:'350px',height:'auto',overflow:'auto'}}>
       {searchResults && searchResults.map((product) => (
         <li style={{padding:'5px 20px',cursor:'pointer'}} key={product.prId}>{product.productName}</li>
       ))}
     </ul> */}
          {/* {isActive && searchResults.length > 0 && (
            <ul className="list-search-results">
              {searchResults.map((product) => (
                <li key={product.prId}>{product.productName}</li>
              ))}
            </ul>
          )} */}
        </div>
        <div
          className="backdrop__body-backdrop___1rvky"
        />
      </header>
    </>
  );
}

export default Header;
