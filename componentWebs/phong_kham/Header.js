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
  const { siteProfiles } = dataSite;
  const router = useRouter();
  const logoRef = useRef();
  console.log(dataSite);
  const [logoId, setLogoId] = useState(0);
  const [src, setSrc] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);
  // drawer's state
  // const [open, setOpen] = useState(false);
  // const showDrawer = () => {
  //   setOpen((prev) => !prev);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };

  // change logo url base on scroll
  // useEffect(
  //   () => {
  //     const logo = dataSite?.logo?.[logoId]?.file || "";
  //     const imageResize = [240, 240, 300];
  //     setSrc(getResponsiveImage(logo, imageResize));
  //   },
  //   [logoId]
  // );
  useEffect(
    () => {
      const logo = dataSite?.logo?.[logoId]?.file || "";
      const imageResize = [240, 240, 300];
      setSrc(getResponsiveImage(logo, imageResize));

      // Logic to handle menu visibility
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [logoId, dataSite]
  );

  return (
    <>
      <header>
        <div class="top_bar border_none position_fixed">
          <div
            class="flex_container justify_content_center"
            style={{ padding: "20px 0px" }}
          >
            <a class="logo_header" href="http://localhost:8834/">
              <img style={{ height: "54px" }} src={src} alt="" ref={logoRef} />
            </a>
            {/* <nav class={`nav_menu_hidden ${isNavVisible ? "show" : ""}`}>
              <ul style={{ marginBottom: 0 }}>
                {menuHeader.map((menuItem) => (
                  <li
                    className="nav-item header-nav__item"
                    key={menuItem?.id}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <a
                      className="header-nav__link nav-link"
                      href={menuItem?.url}
                    >
                      <p>{menuItem?.menusName}</p>
                    </a>
                  </li>
                ))}
                <form class="search_bar_hidden " action="/search">
                  <input
                    name="title"
                    id="search_hidden"
                    class="search_text_hidden"
                  />
                  <button type="button" class="search_button_hidden " />{" "}
                </form>
              </ul>
            </nav> */}
            <span class="hidden-md hidden-sm col-sm-6 title_navbar">
              <i class="fa fa-bars" />
            </span>
            <div class="header_information hidden-sm hidden-xs">
              <ul class="list_infor">
                <li
                  class="address"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    class="address_plus"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS40NTUiIGhlaWdodD0iMjEuOTk0Ij48cGF0aCBkPSJNMTYuNjA2IDIuODQ5YTkuNzI4IDkuNzI4IDAgMTAtOC45NDkgMTYuMzg0bDIuMDcxIDIuNzYxIDIuMDcyLTIuNzYxYTkuNzI4IDkuNzI4IDAgMDA0LjgwNi0xNi4zODR6bS02Ljg3OC0uMzFhNy4xNDUgNy4xNDUgMCAxMS03LjE0NSA3LjE0NSA3LjE1MyA3LjE1MyAwIDAxNy4xNDQtNy4xNDV6IiBmaWxsPSIjMWJjNWQxIi8+PHBhdGggZD0iTTkuODI0IDYuNDU3djYuNDI4bTMuMjE0LTMuMjE0SDYuNjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFiYzVkMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                    style={{ height: "19px" }}
                    alt="Phòng khám "
                  />
                  <h1>{siteProfiles[0].offices[0].address}</h1>
                </li>
                <li
                  class="phone"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    class="telephone"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41OCIgaGVpZ2h0PSIxOC41OCI+PHBhdGggZD0iTTkuMjkuMTVhOS4xNCA5LjE0IDAgMTA5LjE0IDkuMTRBOS4xMzkgOS4xMzkgMCAwMDkuMjkuMTV6bTAgMTYuNTExYTcuMzcxIDcuMzcxIDAgMTE3LjM3MS03LjM3MSA3LjM2OSA3LjM2OSAwIDAxLTcuMzcxIDcuMzcxem0yLjI3OC0zLjg0OEw4LjQzOSAxMC41NGEuNDQ1LjQ0NSAwIDAxLS4xODEtLjM1OFY0LjEzYS40NDQuNDQ0IDAgMDEuNDQyLS40NDJoMS4xOGEuNDQ0LjQ0NCAwIDAxLjQ0Mi40NDJ2NS4yMmwyLjQ2MiAxLjc5MWEuNDQyLjQ0MiAwIDAxLjEuNjE5bC0uNjkzLjk1NWEuNDQ1LjQ0NSAwIDAxLS42MjMuMDk5eiIgZmlsbD0iIzFiYzVkMSIgc3Ryb2tlPSIjMWJjNWQxIiBzdHJva2Utd2lkdGg9Ii4zIi8+PC9zdmc+"
                    style={{ height: "19px" }}
                    alt="Phòng khám "
                  />
                  <h1>SĐT liên hệ: {siteProfiles[0].hotline}</h1>
                </li>
                <li
                  class="time_working"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    class="clock"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41OCIgaGVpZ2h0PSIxOC41OCI+PHBhdGggZD0iTTkuMjkuMTVhOS4xNCA5LjE0IDAgMTA5LjE0IDkuMTRBOS4xMzkgOS4xMzkgMCAwMDkuMjkuMTV6bTAgMTYuNTExYTcuMzcxIDcuMzcxIDAgMTE3LjM3MS03LjM3MSA3LjM2OSA3LjM2OSAwIDAxLTcuMzcxIDcuMzcxem0yLjI3OC0zLjg0OEw4LjQzOSAxMC41NGEuNDQ1LjQ0NSAwIDAxLS4xODEtLjM1OFY0LjEzYS40NDQuNDQ0IDAgMDEuNDQyLS40NDJoMS4xOGEuNDQ0LjQ0NCAwIDAxLjQ0Mi40NDJ2NS4yMmwyLjQ2MiAxLjc5MWEuNDQyLjQ0MiAwIDAxLjEuNjE5bC0uNjkzLjk1NWEuNDQ1LjQ0NSAwIDAxLS42MjMuMDk5eiIgZmlsbD0iIzFiYzVkMSIgc3Ryb2tlPSIjMWJjNWQxIiBzdHJva2Utd2lkdGg9Ii4zIi8+PC9zdmc+"
                    style={{ height: "19px" }}
                    alt="Phòng khám "
                  />
                  <h1> {siteProfiles[0].workTime}</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav class="main_menu hidden-sm hidden-xs">
          <div class="container">
            <div class="menu-bar button-menu hidden-lg">
              <a>
                <i class="fa fa-align-justify" />
              </a>
            </div>
            <div class="menu_header">
              <span class="title">
                <i class="fa fa-bars" />
              </span>
              <ul class="show menu_children" />
            </div>
            <ul class="nav_container">
              {menuHeader.map((menuItem) => (
                <li
                  className="nav_link"
                  key={menuItem?.id}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <a className="nav_item" href={menuItem?.url}>
                    {menuItem?.menusName}
                  </a>
                </li>
              ))}
            </ul>
            <div class="menu_search_button_form">
              <form action="/search" class="search_bar">
                <input
                  type="text"
                  name="title"
                  class="search_text"
                  maxlength="70"
                  id="search"
                  placeholder="Bạn muốn tìm gì ? "
                />
                <button class="search_button" type="button">
                  <img alt="" src="" />
                </button>
              </form>
              <div class="make_appointment">
                <button type="button" class="button_over">
                  Đặt lịch khám
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className={`nav_menu_hidden ${isNavVisible ? "show" : ""}`}>
          <div className="container">
            <div className="row">
              <div class="header_topbar">
                <div
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12 center_logo"
                  style={{ padding: "0px" }}
                >
                  <div class="logo_header">
                    <a href="/">
                      <img
                        style={{ height: "53px" }}
                        src={src}
                        alt=""
                        ref={logoRef}
                      />
                    </a>
                  </div>
                  <span class="hidden-md title_navbar_block">
                    <i class="fa fa-bars" />
                  </span>
                </div>
                <div
                  class="col-md-6 hidden-sm  hidden-xs menu_desktop"
                  style={{ padding: "0px" }}
                >
                  <ul class="header_items" style={{ marginBottom: "0px" }}>
                    {menuHeader.map((menuItem) => (
                      <li
                        class="list_item"
                        key={menuItem?.id}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <a href={menuItem?.url}>
                          <p style={{ margin: "0px" }}>{menuItem?.menusName}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  class="col-md-3 hidden-sm hidden-xs form_xs"
                  style={{ padding: "0px" }}
                >
                  <div class="search_form_button">
                    <form class="search_bar-button" action="/search">
                      <button class="button_search" type="button">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi4yMiIgaGVpZ2h0PSIxNi4yMiI+PHBhdGggZD0iTTE1Ljg5MSAxNC45NjFsLTQuNTg2LTQuNTg2YTYuMjYyIDYuMjYyIDAgMTAtLjkzLjkzbDQuNTg2IDQuNTg2YS4zMjkuMzI5IDAgMDAuNDY1IDBsLjQ2NS0uNDY1YS4zMjkuMzI5IDAgMDAwLS40NjV6bS05LjQ0Mi0zLjU3OGE0LjkzNCA0LjkzNCAwIDExNC45MzQtNC45MzQgNC45MzkgNC45MzkgMCAwMS00LjkzNCA0LjkzNHoiIGZpbGw9IiMwMTVjOWMiIHN0cm9rZT0iIzAxNWM5YyIgc3Ryb2tlLXdpZHRoPSIuNCIvPjwvc3ZnPg=="
                          alt="button"
                        />
                      </button>
                    </form>
                    <div class="make_appointment">
                      <button type="button" class="button_overflow">
                        Đặt lịch khám
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="menu_mobile max_991 hidden-md hidden-lg"
        style={{display:''}}
      >
        <ul class="ul_collections">
          <li class="level0 level-top parent">
            <a href="/chuyen-khoa">Chuyên khoa</a>
          </li>
          <li class="level0 level-top parent">
            <a href="/gioi-thieu-40">Giới thiệu </a>
          </li>
          <li class="level0 level-top parent">
            <a href="/huong-dan">Hướng dẫn </a>
          </li>
          <li class="level0 level-top parent">
            <a href="/tin-tuc-60">Tin tức</a>
          </li>
          <li class="level0 level-top parent">
            <a href="/lien-he-48">Liên hệ </a>
          </li>
        </ul>
      </div>
      <div class="backdrop__body-backdrop___1rvky "></div>
    </>
  );
}

export default Header;
