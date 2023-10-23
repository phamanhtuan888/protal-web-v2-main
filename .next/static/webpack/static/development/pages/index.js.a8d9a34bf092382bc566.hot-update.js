webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./groupTemplate/lofi_nest/layouts/news/index.js":
/*!*******************************************************!*\
  !*** ./groupTemplate/lofi_nest/layouts/news/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _componentWebs_ImageNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentWebs/ImageNew */ \"./componentWebs/ImageNew.js\");\n\n\n\n\n\nvar TinTuc = function TinTuc(_ref) {\n  var data = _ref.data,\n    dataResult = _ref.dataResult;\n  var list = dataResult.list;\n\n  // console.log(list);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"layout-blog\",\n    itemscope: \"\",\n    itemtype: \"https://schema.org/Blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"col-lg-12 col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    class: \"d-none\"\n  }, \"Tin t\\u1EE9c\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    class: \"row\"\n  }, list === null || list === void 0 ? void 0 : list.map(function (item, index) {\n    var _item$images$;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      class: \"col-xl-4 col-lg-4 col-md-6 col-12\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      class: \"item-blog\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      class: \"item-blog\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      class: \"block-thumb\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      class: \"thumb\",\n      href: \"/tin-tuc/\".concat(item.urlSlugs),\n      title: item === null || item === void 0 ? void 0 : item.title\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      class: \"lazyload loaded\",\n      src: Object(_componentWebs_ImageNew__WEBPACK_IMPORTED_MODULE_3__[\"getResponsiveImage\"])((item === null || item === void 0 ? void 0 : (_item$images$ = item.images[0]) === null || _item$images$ === void 0 ? void 0 : _item$images$.file) || \"\", [600, 900, 1600])\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      class: \"block-content\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"/tin-tuc/\".concat(item.urlSlugs),\n      title: item === null || item === void 0 ? void 0 : item.title\n    }, item.title))))));\n  }))))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TinTuc);\n// import dayjs from \"dayjs\";\n// import { useState } from \"react\";\n// import ReactPaginate from \"react-paginate\";\n// import { getResponsiveImage } from \"@/componentWebs/ImageNew\";\n\n// const TinTuc = ({ dataResult, query }) => {\n//   const handlePageChange = (e) => {\n//     window.location = `/${query.name}?page=${e.selected + 1}`;\n//     console.log(\"jfjfjf\");\n//   };\n//   const {\n//     list: [topResult, ...list],\n//     pagination,\n//   } = dataResult;\n//   const imageResize = [380, 450, 540];\n//   // console.log(pagination);\n\n//   return (\n//     <div class=\"body_article\">\n//       {list && list.length ? (\n//         <div class=\"container\">\n//           <div class=\"row\">\n//             <div class=\"first_article\">\n//               <div\n//                 class=\"col-md-4 col-md-6 col-xs-12\"\n//                 style={{ paddingLeft: \"0px\", paddingRight: \"0px\" }}\n//               >\n//                 <div class=\"shadow_content\">\n//                   <div class=\"box_inform\">\n//                     <div class=\"time_limit\">\n//                       <img src=\"/static/vga_soft/images/clock.svg\" />\n//                       {dayjs(topResult?.dateUpdated).format(\"DD/MM/YYYY\")}\n//                     </div>\n//                     <h6>{topResult?.title}</h6>\n//                     <p>{topResult.shortDescription}</p>\n//                     <a\n//                       href={`/tin-tuc/${topResult?.urlSlugs}`}\n//                       title={topResult?.title}\n//                     >\n//                       Chi tiết\n//                     </a>\n//                   </div>\n//                 </div>\n//               </div>\n//               <div class=\"col-md-8 hidden-sm hidden-xs\">\n//                 <img\n//                   src={getResponsiveImage(\n//                     topResult?.images?.[0]?.file,\n//                     imageResize\n//                   )}\n//                   alt={topResult?.title || \"\"}\n//                   style={{\n//                     maxHeight: \"500px\",\n//                     width: \"100%\",\n//                     position: \"relative\",\n//                     right: \"56px\",\n//                     marginBottom: \"34px\",\n//                   }}\n//                 />\n//               </div>\n//             </div>\n//             <div\n//               class=\"col-md-12 col-sm-12 col-xs-12\"\n//               style={{ display: \"flex\", flexWrap: \"wrap\" }}\n//             >\n//               {list?.map((article, index) => (\n//                 <div class=\"col-md-4 col-sm-6 col-xs-6\" key={index}>\n//                   <div class=\"article_items\">\n//                     <img\n//                       src={getResponsiveImage(\n//                         article.images?.[0]?.file || \"\",\n//                         imageResize\n//                       )}\n//                       alt={article.title}\n//                     />\n//                     <div class=\"article_title\">\n//                       <div class=\"time_limit\">\n//                         <img\n//                           src=\"/static/vga_soft/images/clock.svg\"\n//                           alt=\"12/10/2020\"\n//                         />\n//                         {dayjs(article.dateUpdated).format(\"DD/MM/YYYY\")}\n//                       </div>\n//                       <h2>\n//                         <a href={`/tin-tuc/${article.urlSlugs}`}>\n//                           {article.title}\n//                         </a>\n//                       </h2>\n//                     </div>\n//                   </div>\n//                 </div>\n//               ))}\n//             </div>\n//             {/* <div className=\"clearfix\" /> */}\n//             <div className=\"text-xs-right\">\n//               <nav className=\"text-center\">\n//                 {pagination && pagination.total > pagination.pageSize && (\n//                   <ReactPaginate\n//                     forcePage={pagination.current - 1}\n//                     breakLabel=\"...\"\n//                     nextLabel=\"»\"\n//                     previousLabel=\"«\"\n//                     pageRangeDisplayed={2}\n//                     pageCount={Math.ceil(\n//                       pagination.total / pagination.pageSize\n//                     )}\n//                     pageLinkClassName=\"page-link\"\n//                     nextLinkClassName=\"page-link\"\n//                     previousLinkClassName=\"page-link\"\n//                     pageClassName=\"page-item\"\n//                     nextClassName=\"page-item\"\n//                     prevClassName=\"page-item\"\n//                     activeClassName=\"page-item active disabled\"\n//                     disabledClassName=\"page-item disabled\"\n//                     containerClassName=\"pagination clearfix\"\n//                     onPageChange={handlePageChange}\n//                   />\n//                 )}\n//               </nav>\n//             </div>\n//           </div>\n//         </div>\n//       ) : (\n//         <h1 style={{ margin: \"50px auto 100px\", textAlign: \"center\" }}>\n//           Không tìm thấy bài viết nào.\n//         </h1>\n//       )}\n//       {/* <div class=\"col-md-12 hidden-sm hidden-xs subscribe_and_socials\">\n//         <div\n//           class=\"container\"\n//           style={{ display: \"flex\", alignItems: \"center\" }}\n//         >\n//           <div class=\"col-md-4 col-sm-3 col-xs-12 subscribe\">\n//             <h1>Ưu đãi hấp dẫn liên hệ Ngay</h1>\n//             <h2>0589929999 - 0589929999 </h2>\n//             <p>hoặc đăng ký để nhận tư vấn trực tiếp</p>\n//           </div>\n//           <form class=\"col-md-8 col-sm-8 col-xs-12 subscribe-form\">\n//             <input\n//               class=\"input_subscribe_phone\"\n//               type=\"tel\"\n//               id=\"phone\"\n//               name=\"phone\"\n//               pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{3}\"\n//               required=\"\"\n//               placeholder=\"SĐT liên hệ\"\n//             />\n//             <input\n//               class=\"input_subscribe_email\"\n//               id=\"email\"\n//               type=\"email\"\n//               name=\"email\"\n//               placeholder=\"Email liên hệ\"\n//               required=\"\"\n//             />\n//             <button type=\"button\" class=\"btn_btn-subscribe\" name=\"subscribe\">\n//               <span>ĐĂNG KÝ NGAY</span>\n//             </button>\n//           </form>\n//         </div>\n//       </div> */}\n//     </div>\n//   );\n// };\n\n// export default TinTuc;\n\n//# sourceURL=webpack:///./groupTemplate/lofi_nest/layouts/news/index.js?");

/***/ })

})