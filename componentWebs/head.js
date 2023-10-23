/* eslint-disable react/self-closing-comp */
/* eslint-disable react/void-dom-elements-no-children */
import NextHead from "next/head";
import { string } from "prop-types";
import getConfig from "next/config";
import AOS from "aos";
import { useEffect } from "react";

const { publicRuntimeConfig } = getConfig();
const defaultOGURL = `${publicRuntimeConfig.APP_URL}`;
const defaultOGImage = `${
  publicRuntimeConfig.APP_URL
}/static/vga_soft/images/favicon/favicon.ico`;
const defaultOGSiteName = `${publicRuntimeConfig.APP_NAME}`;
const defaultOGType = `${publicRuntimeConfig.APP_TYPE}`;
const origin = `${publicRuntimeConfig.IMAGE_SERVER_NEW}${
  publicRuntimeConfig.IMAGE_PROJECT
}`;

const Head = ({
  title,
  keywords,
  description,
  type,
  ogImage,
  dataSite,
  iconDefault,
}) => {
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  const logo =
    (dataSite?.logo?.file &&
      (dataSite?.logo?.file?.indexOf("http") === -1
        ? `${publicRuntimeConfig.IMAGE_SERVER_NEW}${
            publicRuntimeConfig.IMAGE_PROJECT
          }${dataSite?.logo?.file}`
        : dataSite?.logo?.file)) ||
    `${publicRuntimeConfig.APP_URL}/static/vga_soft/images/icon.ico`;
  const icon =
    (dataSite?.icon?.file &&
      (dataSite?.icon?.file?.indexOf("http") === -1
        ? `${publicRuntimeConfig.IMAGE_SERVER_NEW}${
            publicRuntimeConfig.IMAGE_PROJECT
          }${dataSite?.icon?.file}`
        : dataSite?.icon?.file)) ||
    `${publicRuntimeConfig.APP_URL}/static/vga_soft/images/icon.ico`;
  const nameSite = dataSite?.sitesName || publicRuntimeConfig.APP_NAME;
  const ogImageNew = ogImage || icon;
  const iconNew = iconDefault || icon;
  const titleName = title || nameSite;
  const keywordsSeo = keywords || dataSite?.seoKeywords;
  const descriptionSeo = description || dataSite?.seoDescriptions;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NextHead>
      <title>{titleName}</title>
      <meta name="keywords" content={keywordsSeo} />
      <meta name="description" content={descriptionSeo} />
      {/* Google / Search Engine Tags  */}
      <meta itemProp="name" content={titleName} />
      <meta
        itemProp="image"
        content={
          ogImageNew?.indexOf("http") === -1 &&
          ogImageNew?.indexOf("/static") === -1
            ? `${origin}${ogImageNew}`
            : ogImageNew
        }
      />

      {/* Facebook Meta Tags  */}
      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={titleName} />
      <meta name="robots" content="index,follow,all" />
      <meta property="og:site_name" content={defaultOGSiteName} />
      <meta property="og:type" content={type || defaultOGType} />
      <meta property="og:image:alt" content={titleName} />
      <meta property="og:description" content={descriptionSeo} />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={
          ogImageNew?.indexOf("http") === -1 &&
          ogImageNew?.indexOf("/static") === -1
            ? `${origin}${ogImageNew}`
            : ogImageNew
        }
      />
      <meta
        property="og:image"
        content={
          ogImageNew?.indexOf("http") === -1 &&
          ogImageNew?.indexOf("/static") === -1
            ? `${origin}${ogImageNew}`
            : ogImageNew
        }
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link rel="canonical" href={url || defaultOGURL} />
      <link rel="icon" type="image/png" sizes="32x32" href={iconNew} />
      <link rel="icon" type="image/png" sizes="96x96" href={iconNew} />
      <link rel="icon" type="image/png" sizes="16x16" href={iconNew} />
    </NextHead>
  );
};

Head.propTypes = {
  // title: string,
  description: string,
  ogImage: string,
  type: string,
  keywords: string,
};

Head.defaultProps = {
  // title: defaultTitle,
  description: "",
  ogImage: defaultOGImage,
  type: defaultOGType,
  keywords: "",
};

export default Head;
