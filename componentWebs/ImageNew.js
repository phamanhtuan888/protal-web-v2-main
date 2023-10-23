/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import getConfig from 'next/config';
import { isBase64, checkHttpLink } from '@/utils/utils';

const { publicRuntimeConfig } = getConfig();
const { SCREEN_DESKTOP, SCREEN_TABLET, SCREEN_MOBILE } = publicRuntimeConfig;
const getResponsiveImage = (url, imageResize) => {
  // console.log("url, imageResize: ", url, imageResize);
  let responsiveWidth = 768;
  let screenWidth = 768;
  const [sm, md, lg] = imageResize;
  try {
    if (typeof window !== 'undefined') {
      screenWidth = window.innerWidth;
    }
  } catch (err) {
    console.log(err);
  }
  if (!url || url === '') return '';
  let newUrl = url;
  if (url.indexOf('/') !== 0) {
    newUrl = `/${url}`;
  }
  if (Number(screenWidth) < Number(SCREEN_MOBILE)) {
    if (imageResize && sm) responsiveWidth = sm;
    else responsiveWidth = SCREEN_MOBILE;
  } else if (Number(screenWidth) >= Number(SCREEN_MOBILE) && Number(screenWidth) < Number(SCREEN_TABLET)) {
    if (imageResize && md) responsiveWidth = md;
    else responsiveWidth = SCREEN_TABLET;
  } else if (imageResize && lg) responsiveWidth = lg;
  else responsiveWidth = SCREEN_DESKTOP;
  const typeArray = ['\\.gif', '\\.GIF', '\\.svg', '\\.SVG', '\\.ico', '\\.ICO'];
  let originImage;
  typeArray.map((item) => {
    if (typeof url === 'string' && url && url.search(item) + 1) originImage = true;
    return null;
  });
  // console.log("1: ", `${publicRuntimeConfig.IMAGE_SERVER_NEW}${publicRuntimeConfig.IMAGE_PROJECT}${newUrl}`);
  if (originImage) return `${publicRuntimeConfig.IMAGE_SERVER_NEW}${publicRuntimeConfig.IMAGE_PROJECT}${newUrl}`;
  if (isBase64(url) || checkHttpLink(url)) {
    return url;
  }
  return `${publicRuntimeConfig.IMAGE_SERVER_NEW}${publicRuntimeConfig.IMAGE_PROJECT}${newUrl}?widthImage=${Math.ceil(
    responsiveWidth,
  )}`;
};
class ImageNew extends PureComponent {
  render() {
    const { src, imageResize, className, alt } = this.props;
    return (
      <img {...this.props} src={getResponsiveImage(src, imageResize)} className={`lazyload ${className}`} alt={alt} />
    );
  }
}
export { getResponsiveImage };
export default ImageNew;
