webpackHotUpdate("static\\development\\pages\\User\\Category.js",{

/***/ "./groupTemplate/lofi_nest/layouts/products/index.js":
/*!***********************************************************!*\
  !*** ./groupTemplate/lofi_nest/layouts/products/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next-server/dist/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _componentWebs_ImageNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/componentWebs/ImageNew */ \"./componentWebs/ImageNew.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/formatPrice */ \"./utils/formatPrice.js\");\n\n\n\n\n\n\n\n\nvar SanPham = function SanPham(_ref) {\n  var dataResult = _ref.dataResult,\n    data = _ref.data,\n    query = _ref.query;\n  var handlePageChange = function handlePageChange(e) {\n    window.location = \"/\".concat(query.name, \"?page=\").concat(e.selected + 1);\n  };\n  var _dataResult$list = Object(_babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataResult.list),\n    list = _dataResult$list.slice(0),\n    pagination = dataResult.pagination;\n  console.log(data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"aside\", {\n    class: \"dqdt-sidebar sidebar col-lg-3 col-12 padding-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-filter clearfix\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-hidden-mobile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"filter-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"aside\", {\n    class: \"aside-item filter-type\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    class: \"nd-svg collapsible-plus\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"10\",\n    height: \"5\",\n    viewBox: \"0 0 10 5\",\n    fill: \"none\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    d: \"M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z\",\n    fill: \"#333333\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-content filter-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    class: \"filter-type\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-yen-tinh-che\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-yen-tinh-che\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), data.categoriesName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"aside\", {\n    class: \"aside-item filter-price\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-title\"\n  }, \"Ch\\u1ECDn m\\u1EE9c gi\\xE1\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    class: \"nd-svg collapsible-plus\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"10\",\n    height: \"5\",\n    viewBox: \"0 0 10 5\",\n    fill: \"none\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    d: \"M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z\",\n    fill: \"#333333\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"aside-content filter-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-duoi-500-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-duoi-500-000d\",\n    onchange: \"toggleFilter(this);\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"D\\u01B0\\u1EDBi 500.000\\u0111\",\n    value: \"(<500000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"Gi\\xE1 d\\u01B0\\u1EDBi 500.000\\u0111\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-500-000d-1-000-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-500-000d-1-000-000d\",\n    onchange: \"toggleFilter(this)\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"500.000\\u0111 - 1.000.000\\u0111\",\n    value: \"(>500000 AND <1000000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"500.000\\u0111 - 1.000.000\\u0111\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-1-000-000d-3-000-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-1-000-000d-3-000-000d\",\n    onchange: \"toggleFilter(this)\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"1.000.000\\u0111 - 3.000.000\\u0111\",\n    value: \"(>1000000 AND <3000000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"1.000.000\\u0111 - 3.000.000\\u0111\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-3-000-000d-5-000-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-3-000-000d-5-000-000d\",\n    onchange: \"toggleFilter(this)\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"3.000.000\\u0111 - 5.000.000\\u0111\",\n    value: \"(>3000000 AND <5000000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"3.000.000\\u0111 - 5.000.000\\u0111\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-5-000-000d-7-000-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-5-000-000d-7-000-000d\",\n    onchange: \"toggleFilter(this)\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"5.000.000\\u0111 - 7.000.000\\u0111\",\n    value: \"(>5000000 AND <7000000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"5.000.000\\u0111 - 7.000.000\\u0111\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n    class: \"filter-item filter-item--check-box filter-item--green\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    for: \"filter-tren7-000-000d\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"filter-tren7-000-000d\",\n    onchange: \"toggleFilter(this)\",\n    \"data-group\": \"Kho\\u1EA3ng gi\\xE1\",\n    \"data-field\": \"price_min\",\n    \"data-text\": \"Tr\\xEAn 7.000.000\\u0111\",\n    value: \"(>7000000)\",\n    \"data-operator\": \"OR\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n    class: \"fa\"\n  }), \"Gi\\xE1 tr\\xEAn 7.000.000\\u0111\")))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"block-collection col-lg-9 col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"category-products\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"sortPagiBar clearfix\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    class: \"sort-cate clearfix\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"sort-by\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    class: \"left\"\n  }, \"S\\u1EAFp x\\u1EBFp theo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    class: \"ul_col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, \"A \\u2192 Z\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    class: \"content_ul\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('default')\"\n  }, \"M\\u1EB7c \\u0111\\u1ECBnh\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('alpha-asc')\"\n  }, \"A \\u2192 Z\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('alpha-desc')\"\n  }, \"Z \\u2192 A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('price-asc')\"\n  }, \"Gi\\xE1 t\\u0103ng d\\u1EA7n\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('price-desc')\"\n  }, \"Gi\\xE1 gi\\u1EA3m d\\u1EA7n\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('created-desc')\"\n  }, \"H\\xE0ng m\\u1EDBi nh\\u1EA5t\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n    href: \"javascript:;\",\n    onclick: \"sortby('created-asc')\"\n  }, \"H\\xE0ng c\\u0169 nh\\u1EA5t\")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"section\", {\n    class: \"products-view products-view-grid list_hover_pro\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, list.map(function (item, index) {\n    var _item$images$;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"col-6 col-xl-4 col-lg-4 col-md-4 mrb-20\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"item_product_main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n      class: \"variants product-action \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"product-thumbnail\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      class: \"image_thumb scale_hover\",\n      style: {\n        height: \"186px\"\n      },\n      href: \"/tat-c\\u1EA3-san-pham/\".concat(item === null || item === void 0 ? void 0 : item.url),\n      title: item === null || item === void 0 ? void 0 : item.title\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      class: \"lazyload loaded\",\n      width: \"480\",\n      height: \"480\",\n      src: Object(_componentWebs_ImageNew__WEBPACK_IMPORTED_MODULE_4__[\"getResponsiveImage\"])((item === null || item === void 0 ? void 0 : (_item$images$ = item.images[0]) === null || _item$images$ === void 0 ? void 0 : _item$images$.file) || \"\", [600, 900, 1600])\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"action d-xl-block d-none\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"actions-secondary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      title: \"Xem nhanh\",\n      class: \"quick-view btn-views\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n      width: \"20\",\n      height: \"16\",\n      viewBox: \"0 0 20 16\",\n      fill: \"none\",\n      xmlns: \"http://www.w3.org/2000/svg\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: \"M12.7 7.99995C12.7 9.49112 11.4912 10.7 10 10.7C8.50883 10.7 7.3 9.49112 7.3 7.99995C7.3 6.50878 8.50883 5.29995 10 5.29995C11.4912 5.29995 12.7 6.50878 12.7 7.99995Z\",\n      stroke: \"#14181F\",\n      \"stroke-width\": \"1.5\",\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: \"M1 7.99995C2.44012 4.31233 5.80243 1.69995 10 1.69995C14.1976 1.69995 17.5599 4.31233 19 7.99995C17.5599 11.6876 14.1976 14.3 10 14.3C5.80243 14.3 2.44012 11.6876 1 7.99995Z\",\n      stroke: \"#14181F\",\n      \"stroke-width\": \"1.5\",\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      class: \"btn-compare js-btn-wishlist setWishlist btn-views\",\n      title: \"Th\\xEAm v\\xE0o y\\xEAu th\\xEDch\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      width: \"16\",\n      height: \"15\",\n      viewBox: \"0 0 16 15\",\n      fill: \"none\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n      d: \"M1.30469 7.70401C0.413933 5.13899 1.5274 1.87444 3.97697 1.17489C5.3131 0.708524 7.09458 1.17487 7.98533 2.57397C8.87608 1.17487 10.6576 0.708524 11.9937 1.17489C14.6659 2.10763 15.5567 5.13899 14.666 7.70401C13.5525 11.6681 9.09877 14 7.98533 14C6.87189 13.7668 2.64081 11.9013 1.30469 7.70401Z\",\n      stroke: \"#000000\",\n      \"stroke-width\": \"1.5\",\n      \"stroke-linecap\": \"round\",\n      \"stroke-linejoin\": \"round\"\n    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"product-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h3\", {\n      class: \"product-name\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: \"/tat-c\\u1EA3-san-pham/\".concat(item === null || item === void 0 ? void 0 : item.url),\n      title: item === null || item === void 0 ? void 0 : item.title\n    }, item.productsName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"price-box\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      price: item.dealPrice,\n      className: \"price\"\n    }), item.price !== '0' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      price: item.price,\n      className: \"compare-price\"\n    }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"product-btn d-none d-xl-block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      class: \"actions-primary btn-views\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"hidden\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      class: \"btn-cart add_to_cart \",\n      title: \"Th\\xEAm v\\xE0o gi\\u1ECF h\\xE0ng\"\n    }, \"Th\\xEAm v\\xE0o gi\\u1ECF h\\xE0ng\"))))));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"pagenav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"nav\", {\n    className: \"clearfix relative nav_pagi w_100\"\n  }, pagination && pagination.total > pagination.pageSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    forcePage: pagination.current - 1,\n    breakLabel: \"...\",\n    nextLabel: \"\\xBB\",\n    previousLabel: \"\\xAB\",\n    pageRangeDisplayed: 2,\n    pageCount: Math.ceil(pagination.total / pagination.pageSize),\n    pageLinkClassName: \"page-link\",\n    nextLinkClassName: \"page-link\",\n    previousLinkClassName: \"page-link\",\n    pageClassName: \"page-item\",\n    nextClassName: \"page-item\",\n    prevClassName: \"page-item\",\n    activeClassName: \"page-item active disabled\",\n    disabledClassName: \"page-item disabled\",\n    containerClassName: \"pagination clearfix\",\n    onPageChange: handlePageChange\n  })))))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])()(SanPham));\n\n//# sourceURL=webpack:///./groupTemplate/lofi_nest/layouts/products/index.js?");

/***/ })

})