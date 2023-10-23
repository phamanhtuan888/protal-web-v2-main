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
    <div>
     
    </div>
  );
}
