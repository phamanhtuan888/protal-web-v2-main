import React from "react";
import "@/static/web/css/notFound.css";

const Index = () => (
  <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h1>404</h1>
      </div>
      <h2>Oops! Không thể tìm thấy trang này</h2>
      <p>
        Xin lỗi nhưng trang bạn tìm kiếm đang bảo trì hoặc không tồn tại, đã bị
        xóa. tên đã thay đổi hoặc tạm thời không có sẵn
      </p>
      {/* <a href="#">Go To Homepage</a> */}
    </div>
  </div>
);
export default Index;
