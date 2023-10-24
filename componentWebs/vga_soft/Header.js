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
  const router = useRouter();
  const logoRef = useRef();

  const [logoId, setLogoId] = useState(router.pathname === "/" ? 0 : 1);
  const [src, setSrc] = useState("");

  // drawer's state
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen((prev) => !prev);
  };
  const onClose = () => {
    setOpen(false);
  };

  // change logo url base on scroll
  useEffect(
    () => {
      const logo = dataSite?.logo?.[logoId]?.file || "";
      const imageResize = [240, 240, 300];
      setSrc(getResponsiveImage(logo, imageResize));
    },
    [logoId]
  );

  return (
    <>
      <div id="header">
        <div aria-hidden="true" style={{ width: "874.4px", height: 0 }} />
        <Affix
          className={router.pathname === "/" ? "" : "ant-affix"}
          offsetTop={0}
          onChange={(fixed) => setLogoId(fixed ? 1 : 0)}
        >
          <div
            className="border border-bottom-dark"
            style={{ background: "rgb(255, 255, 255)" }}
          >
            <div className="container d-flex flex-row justify-content-between align-items-center">
              <a className="logo" href="/">
                <img src={src} alt="" ref={logoRef} />
              </a>
              <div className="header-links">
                <ul className="header-nav">
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
                </ul>
              </div>
              <div className="header-mobile-menu" onClick={showDrawer}>
                <span
                  id="site-menu-handle"
                  className="hamburger-menu"
                  aria-hidden="true"
                >
                  <span className="bar" />
                </span>
              </div>
            </div>
          </div>
        </Affix>
      </div>
      <Drawer
        open={open}
        visible={open}
        placement="right"
        onClose={onClose}
        getContainer={false}
      >
        <div className="nav-item header-nav__item">
          {menuHeader.map((menuItem) => (
            <a
              className="header-nav__link nav-link"
              href={menuItem?.url}
              key={menuItem?.id}
            >
              <p style={{ cursor: "pointer", padding: "5px 0" }}>
                {menuItem?.menusName}
              </p>
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default Header;
