import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Affix, Row, Col, Drawer } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  PhoneOutlined,
  MailOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

export default function BottomMenu({ asPath, menuHeader, office }) {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const contactRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setContact(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <>
      <Affix className="bottom-menu" offsetBottom={0}>
        {contact && (
          <Row
            align="center"
            style={{
              width: "100%",
              backgroundColor: "#fff",
              margin: 0,
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px 1px",
            }}
            ref={contactRef}
          >
            <Col span={12} style={{ padding: "10px" }}>
              <a href={`tel:${office.phone}`}>
                <Row gutter={8}>
                  <Col span={4}>
                    <PhoneOutlined />
                  </Col>
                  <Col span={20}>{office.phone}</Col>
                </Row>
              </a>
            </Col>
            <Col span={12} style={{ padding: "10px" }}>
              <a href={`mailto:${office.email}`}>
                <Row gutter={8}>
                  <Col span={4}>
                    <MailOutlined />
                  </Col>
                  <Col span={20}>{office.email}</Col>
                </Row>
              </a>
            </Col>
          </Row>
        )}

        <Row
          gutter={20}
          align="center"
          justify="space-around"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            margin: 0,
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px 1px",
          }}
        >
          <Col span={5}>
            <Row onClick={() => router.push("/")} className={asPath === '/' && 'active'}>
              <Col span={24}>
                <HomeOutlined className="bottom-menu-icon" />
              </Col>
              <Col span={24} className="bottom-menu-text">
                Trang chủ
              </Col>
            </Row>
          </Col>
          <Col span={5} onClick={() => router.push("/tin-tuc")}>
            <Row className={asPath === '/tin-tuc' && 'active'}>
              <Col span={24}>
                <FileSearchOutlined className="fas fa-newspaper bottom-menu-icon" />
              </Col>
              <Col span={24} className="bottom-menu-text">
                Tin tức
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Row onClick={() => setContact((prev) => !prev)}>
              <Col span={24}>
                <PhoneOutlined className="bottom-menu-icon" />
              </Col>
              <Col span={24} className="bottom-menu-text">
                Liên hệ
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Row onClick={showMenu}>
              <Col span={24}>
                <MenuOutlined className="bottom-menu-icon" />
              </Col>
              <Col span={24} className="bottom-menu-text">
                Xem thêm
              </Col>
            </Row>
          </Col>
        </Row>
      </Affix>

      <Drawer
        open={menu}
        visible={menu}
        placement="right"
        onClose={closeMenu}
        getContainer={false}
        width="100%"
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
