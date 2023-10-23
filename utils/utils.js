/* eslint-disable import/extensions */
/* eslint-disable no-cond-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-bitwise */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import moment from 'moment';
import React from 'react';
import nzh from 'nzh/cn';
import cookie from 'js-cookie';
import $ from 'jquery';
import { saveAs } from 'file-saver';
import { parse, stringify } from 'qs';
import pathToRegexp from 'path-to-regexp';
import getConfig from 'next/config';
import _ from 'lodash';
import EncodeUrl, { converFolder } from '@/utils/encode';

export const isMobileDetect = {
  Android(text) {
    return text.match(/Android/i);
  },
  BlackBerry(text) {
    return text.match(/BlackBerry/i);
  },
  iOS(text) {
    return text.match(/iPhone|iPad|iPod/i);
  },
  Opera(text) {
    return text.match(/Opera Mini/i);
  },
  Windows(text) {
    return text.match(/IEMobile/i) || text.match(/WPDesktop/i);
  },
  any(text) {
    return (
      isMobileDetect.Android(text) ||
      isMobileDetect.BlackBerry(text) ||
      isMobileDetect.iOS(text) ||
      isMobileDetect.Opera(text) ||
      isMobileDetect.Windows(text)
    );
  },
};

const { publicRuntimeConfig } = getConfig();

export const backToTop = () => $('html, body').animate({ scrollTop: 0 }, '300');

// Xuất file excel vs exceljs
export const exportExcelJs = (workbook, nameFile) =>
  new Promise(resolve => {
    workbook.xlsx.writeBuffer().then(s => {
      const byteCharacters = atob(s.toString('base64'));
      const byteNumbers = new Array(byteCharacters.length);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/octet-stream' });
      saveAs(blob, nameFile);
      resolve();
    });
  });

export const isJsonString = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
export const generateUrl = (names, parentName, parent, id) => {
  let url = '';
  if (names && parseInt(parent) === 0 && parentName === '') {
    url = `/${EncodeUrl(names)}`;
  }
  if (names && parent && parseInt(parent) !== 0 && parentName !== '') {
    url = `/${EncodeUrl(parentName)}/${EncodeUrl(names)}_${parent}`;
  }
  if (id) {
    if (parseInt(parent) === 0) {
      url = `/${EncodeUrl(names)}-${id}`;
    } else {
      url = `/${EncodeUrl(parentName)}/${EncodeUrl(names)}_${parent}_${id}`;
    }
  }
  return url;
};

export const compare = (array1, array2) => {
  // if the other array is a falsy value, return
  if (!array1) return false;

  // compare lengths - can save a lot of time
  if (array2.length !== array1.length) return false;

  for (let i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (array2[i] instanceof Array && array1[i] instanceof Array) {
      // recurse into the nested arrays
      if (!compare(array1, array2)) return false;
    } else if (array2[i] !== array1[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};

export const generateUrlSlug = names => {
  let url = '';
  if (names) {
    url = `${EncodeUrl(names)}`;
  }
  return url;
};

export const generateUrlSlugFolder = names => {
  let url = '';
  if (names) {
    url = `${converFolder(names)}`;
  }
  return url;
};

export const formatNumber = value => {
  // eslint-disable-next-line no-param-reassign
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

export const formatNumberWithDot = value => {
  // eslint-disable-next-line no-param-reassign
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `.${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  const year = now.getFullYear();
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function digitUppercase(n) {
  return nzh.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    // console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

/**
 * find route in router.config.js
 *
 * @param {*} routeData
 * @param {*} pathname
 */
export const findRouter = (routeData, pathname) => {
  // log("pathname %o, routeData %o", pathname, routeData)
  if (routeData && routeData.length === 1) {
    return routeData[0];
  }
  let routeAuthority = {};
  const getAuthority = (key, routes) => {
    routes.map(route => {
      if (route && route.path && route.component && pathToRegexp(route.path).test(key)) {
        routeAuthority = route;
      } else if (route && route.routes) {
        routeAuthority = getAuthority(key, route.routes);
      }
      return route;
    });
    return routeAuthority;
  };
  return getAuthority(pathname, routeData);
};

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export function formatWan(val) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntdPro() {
  if (typeof window !== 'undefined') return window.location.hostname === 'preview.pro.ant.design';
  return '';
}

export const fnKhongDau = str => {
  let str1 = str;
  str1 = str1.toLowerCase();
  str1 = str1.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str1 = str1.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str1 = str1.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str1 = str1.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str1 = str1.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str1 = str1.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str1 = str1.replace(/đ/g, 'd');
  // str = str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "-");
  // str = str.replace(/-+-/g, " ");
  // str = str.replace(/^\-+|\-+$/g, "");
  // str = str.replace('-', ' ');
  return str1;
};

export const baseUrl = (url, name) => {
  if (!url || !name || name === '') {
    return url;
  }

  const arrUrl = url.split('/');
  const length = arrUrl && arrUrl.length;
  if (name === 'create') {
    return arrUrl.slice(0, length - 2).join('/');
  }
  return arrUrl.slice(0, length - 3).join('/');
};

/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
export const getQueryString = (field, url) => {
  const href = url || window.location.href;
  const reg1 = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
  const string = reg1.exec(href);
  return string ? string[1] : null;
};

export const scrollToTop = () => {
  // console.log(topScroll)
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export const scrollToTopCustom = () => {
  // console.log(topScroll)
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 70,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export const isFileImage = file => {
  const acceptedImageTypes = ['gif', 'png', 'jpg', 'svg', 'ico', 'jpeg', 'TIFF'];
  const acceptedImageTypes2 = ['scontent'];
  return (
    (file &&
      acceptedImageTypes.includes(
        fnKhongDau(file.slice(file.lastIndexOf('.') - file.length + 1))
      )) ||
    acceptedImageTypes2.includes(file.slice(8, 16))
  );
};

export const checkMp4File = file => {
  const allowedExtensions = /(\.mp4)$/i;
  if (!allowedExtensions.exec(file)) {
    return false;
  }
  return true;
};
export const checkMp4Link = file => {
  const allowedExtensions = /(http:\/\/|https:\/\/)/;
  if (!allowedExtensions.exec(file)) {
    return false;
  }
  return true;
};

export const getIdYoutube = url => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const checkYoutube = url => {
  let check = false;
  if (url) {
    const patternYoutube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    check = patternYoutube.test(url);
  }
  return check;
};

export const getSrcFrameYoutube = videoId => {
  let srcIframe = '';
  if (videoId) {
    srcIframe = `//www.youtube.com/embed/${videoId}`;
  }
  return srcIframe;
};

export function ConvertDDToDMS(dd) {
  const deg = dd | 0; // truncate dd to get degrees
  const frac = Math.abs(dd - deg); // get fractional part
  const min = (frac * 60) | 0; // multiply fraction by 60 and truncate
  const sec = Math.round((frac * 3600 - min * 60) * 100) / 100;
  return `${deg}° ${min}' ${sec}"`;
}
export function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  let dd = Number(degrees) + Number(minutes) / 60 + Number(seconds) / (60 * 60);

  if (direction === 'S' || direction === 'W') {
    dd *= -1;
  } // Don't do anything for N or E
  return dd;
}

export function HaversineInKM(lat1, long1, lat2, long2) {
  const _eQuatorialEarthRadius = 6378.137;
  const _d2r = Math.PI / 180.0;
  const dlong = (long2 - long1) * _d2r;
  const dlat = (lat2 - lat1) * _d2r;
  // eslint-disable-next-line no-restricted-properties
  const a =
    Math.pow(Math.sin(dlat / 2.0), 2.0) +
    Math.cos(lat1 * _d2r) * Math.cos(lat2 * _d2r) * Math.pow(Math.sin(dlong / 2.0), 2.0);
  const c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
  const d = _eQuatorialEarthRadius * c;

  return d;
}

export function HaversineInM(lat1, long1, lat2, long2) {
  return 1000.0 * HaversineInKM(lat1, long1, lat2, long2);
}

export const checkImage = str => {
  let str1 = false;
  if (
    str &&
    (fnKhongDau(str) === 'jpg' ||
      fnKhongDau(str) === 'webp' ||
      fnKhongDau(str) === 'svg' ||
      fnKhongDau(str) === 'jpeg' ||
      fnKhongDau(str) === 'gif' ||
      fnKhongDau(str) === 'apng' ||
      fnKhongDau(str) === 'avif' ||
      fnKhongDau(str) === 'png')
  ) {
    str1 = true;
  }
  return str1;
};

export const checkVideo = str => {
  let str1 = false;
  if (
    str &&
    (fnKhongDau(str) === 'mp4' ||
      fnKhongDau(str) === 'mov' ||
      fnKhongDau(str) === 'flv' ||
      fnKhongDau(str) === 'avi' ||
      fnKhongDau(str) === 'wmv' ||
      fnKhongDau(str) === 'mpeg' ||
      fnKhongDau(str) === 'fla' ||
      fnKhongDau(str) === 'wav' ||
      fnKhongDau(str) === 'mpc' ||
      fnKhongDau(str) === 'mpg' ||
      fnKhongDau(str) === 'wma')
  ) {
    str1 = true;
  }
  return str1;
};

export const checkdoc = str => {
  let str1 = false;
  if (
    fnKhongDau(str) === 'doc' ||
    fnKhongDau(str) === 'docm' ||
    fnKhongDau(str) === 'docx	' ||
    fnKhongDau(str) === 'dot'
  ) {
    str1 = true;
  }
  return str1;
};

export const checkexcel = str => {
  let str1 = false;
  if (
    fnKhongDau(str) === 'xlsx' ||
    fnKhongDau(str) === 'xlsm' ||
    fnKhongDau(str) === 'xlsb	' ||
    fnKhongDau(str) === 'xltm' ||
    fnKhongDau(str) === 'xls	' ||
    fnKhongDau(str) === 'xlt' ||
    fnKhongDau(str) === 'xls	' ||
    fnKhongDau(str) === 'xltx'
  ) {
    str1 = true;
  }
  return str1;
};
export const viewImage = str =>
  str && str.indexOf('http') === -1
    ? str.indexOf('//') === 0
      ? `http:${str}`
      : str.indexOf('data:') === 0
      ? str
      : `${publicRuntimeConfig.IMAGE_SERVER_NEW}${publicRuntimeConfig.IMAGE_PROJECT}${str}`
    : str;

export const viewImageFacebook = str =>
  str && str.indexOf('http') === -1
    ? str.indexOf('//') === 0
      ? `http:${str}`
      : str.indexOf('data:') === 0
      ? str
      : `${publicRuntimeConfig.IMAGE_SERVER_NEW}${publicRuntimeConfig.IMAGE_PROJECT}${str}`
    : str;

export const getIndicesOf = (searchStr, str, caseSensitive) => {
  const searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0;
  let index;
  const indices = [];

  let newStr = str;
  let newSearchStr = searchStr;

  if (!caseSensitive) {
    newStr = str.toLowerCase();
    newSearchStr = searchStr.toLowerCase();
  }
  while ((index = newStr.indexOf(newSearchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
};

// export const encodeFontTimeNewsRoman = () => ""

export const isObject = item => typeof item === 'object' && !Array.isArray(item) && item !== null;

// So sánh 2 array ko quan tâm đến thứ tự
export const compareArrayNoOrder = (newArr, oldArr) => {
  if (newArr.length !== oldArr.length) return false;
  let newArr2 = [...newArr];
  let lengthSame = 0;

  oldArr.forEach(item => {
    if (Array.isArray(item)) {
      const ind = newArr.findIndex(x => compareArrayNoOrder(x, item));
      if (ind !== -1) {
        lengthSame += 1;
        newArr2 = newArr2.filter((x, inx) => inx !== ind);
      }
    } else if (isObject(item)) {
      const ind = newArr.findIndex(x => _.isEqual(x, item));
      if (ind !== -1) {
        lengthSame += 1;
        newArr2 = newArr2.filter((x, inx) => inx !== ind);
      }
    } else {
      const ind = newArr.findIndex(x => x === item);
      if (ind !== -1) {
        lengthSame += 1;
        newArr2 = newArr2.filter((x, inx) => inx !== ind);
      }
    }
  });
  if (lengthSame !== oldArr.length) return false;
  return true;
};

// Input: 2 obj new va old
// Output: obj gom cac key thay doi
// Khi truyền order === 'order' thì sẽ so sánh thứ tự của các phần tử array
// Nếu ko thì chỉ quan tâm đến giá trị của các array
export const checkOnChange = (newData, oldData, order) => {
  const keyOldData = Object.keys(newData);
  const changeKeysArr = [];
  keyOldData.forEach(key => {
    const oldItem = oldData[key];
    const newItem = newData[key];
    // if (typeof oldItem === 'string' && oldItem.trim()!==  newItem.trim() ) changeKeysArr.push(key);
    if (Array.isArray(oldItem)) {
      if (order === 'order') {
        const compar = _.isEqual(oldItem, newItem);
        if (!compar) changeKeysArr.push(key);
      } else {
        const compar = compareArrayNoOrder(oldItem, newItem);
        if (!compar) changeKeysArr.push(key);
      }
    } else if (isObject(oldItem)) {
      const compar = _.isEqual(oldItem, newItem);
      if (!compar) changeKeysArr.push(key);
    } else if (moment.isMoment(oldItem)) {
      changeKeysArr.push(key);
    } else if (oldItem !== newItem) changeKeysArr.push(key);
  });
  const datas = {};
  changeKeysArr.forEach(x => {
    datas[x] = newData[x];
  });
  return datas;
};

export const renderTime = time => {
  let value = '';
  if (moment() - moment(time) > 0) {
    value =
      moment() - moment(time) > 3600000 * 48
        ? moment(time).format('HH:mm DD/MM/YYYY')
        : Math.floor((moment() - moment(time)) / 3600000) === 0
        ? `${Math.floor((moment() - moment(time)) / 60000)} ${
            (cookie.get('languagesId') || '1') === '1' ? 'phút trước' : 'minutes ago'
          }`
        : `${Math.floor((moment() - moment(time)) / 3600000)} ${
            (cookie.get('languagesId') || '1') === '1' ? 'giờ trước' : 'hours ago'
          }`;
  } else {
    value =
      moment(time) - moment() > 3600000 * 720
        ? moment(time).format('HH:mm DD/MM/YYYY')
        : Math.floor((moment(time) - moment()) / 3600000) === 0
        ? `${
            (cookie.get('languagesId') || '1') === '1'
              ? `Còn ${Math.floor((moment(time) - moment()) / 60000)} phút`
              : `${Math.floor((moment(time) - moment()) / 60000)} minutes left`
          }`
        : Math.floor((moment(time) - moment()) / (3600000 * 24)) === 0
        ? `${
            (cookie.get('languagesId') || '1') === '1'
              ? `Còn ${Math.floor((moment(time) - moment()) / 3600000)} giờ`
              : `${Math.floor((moment(time) - moment()) / 3600000)} hours left`
          }`
        : `${
            (cookie.get('languagesId') || '1') === '1'
              ? `Còn ${Math.floor((moment(time) - moment()) / (3600000 * 24))} ngày`
              : `${Math.floor((moment(time) - moment()) / (3600000 * 24))} days left`
          }`;
  }
  return value;
};

export const getPriceCourse = data => {
  let min = 0;
  let max = 0;
  if (!data) {
    return null;
  }
  if (data.courseGroupsPackages?.length > 0) {
    const arr = data.courseGroupsPackages.map(item => item.money || 0);
    min = Math.min(...arr);
    max = Math.max(...arr);
    return `${formatNumber(min)}${max > min ? ` - ${formatNumber(max)}` : ''}`;
  }
  if (data.money) {
    return formatNumber(data.money);
  }
  return null;
};

export const durationToStr = ms => {
  const h = moment.duration(ms).hours();
  const m = moment.duration(ms).minutes();
  const s = moment.duration(ms).seconds();

  let hStr = '';
  if (h !== 0) {
    hStr = `${h}: `;
  }

  let mStr = '2';
  mStr = m < 10 ? `0${m}` : m;

  let sStr = '';
  sStr = s < 10 ? `0${s}` : s;

  return `${hStr}${mStr}:${sStr}`;
};

export const formatTimeFromSecond = ms => {
  const h = moment.duration(ms).hours();
  const m = moment.duration(ms).minutes();

  let hStr = '';
  if (h !== 0) {
    hStr = `${h} giờ `;
  }

  let mStr = '2';
  mStr = m < 10 ? `0${m}` : m;

  return `${hStr}${mStr} phút`;
};

export const getIdVideoYoutube = url => {
  if (!url) {
    return '';
  }
  const urlsplit = url.split(
    /^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/
  );

  return urlsplit[3];
};

export const checkPuchasedAndExpired = data =>
  (data?.purchased?.expiredDate && moment().isBefore(moment(data?.purchased?.expiredDate))) || // chưa hết hạn
  (data?.purchased?.status === 1 && data?.purchased?.expiredDate === null) || // vĩnh viễn
  data?.type === 0; // miễn phí

export function validateYouTubeUrl(urlToParse) {
  if (urlToParse) {
    const regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (urlToParse.match(regExp)) {
      return true;
    }
  }
  return false;
}

export const checkHttpLink = file => {
  const allowedExtensions = /(http:\/\/|https:\/\/)/;
  if (!allowedExtensions.exec(file)) {
    return false;
  }
  return true;
};
export const isBase64 = str => {
  const check = str?.match(/data:/);
  const rex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;
  if (check || rex.test(str)) {
    return true;
  }
  return false;
};
