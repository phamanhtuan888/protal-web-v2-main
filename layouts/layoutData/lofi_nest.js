/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from "react";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Head from "@/componentWebs/headLayout";

const { publicRuntimeConfig } = getConfig();

// import layout global
const Header = dynamic(() => import("@/componentWebs/lofi_nest/Header"), {
  ssr: true,
  loading: () => null,
});
const Footer = dynamic(() => import("@/componentWebs/lofi_nest/Footer"), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(
  () => import("@/componentWebs/lofi_nest/BreadCrumb"),
  {
    ssr: true,
    loading: () => null,
  }
);
const Arcontactus = dynamic(
  () => import("@/componentWebs/lofi_nest/Arcontactus"),
  {
    ssr: true,
    loading: () => null,
  }
);
const BottomMenu = dynamic(
  () => import("@/componentWebs/lofi_nest/BottomMenu"),
  {
    ssr: true,
    loading: () => null,
  }
);

//import css

// const base = `${
//   publicRuntimeConfig.DOMAIN_STATIC
// }/static/vga_soft/css/base.css`;
const ajaxCart = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/ajaxcart.css`;
const bootstrap = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/bootstrap-4-3-min.css`;
const index = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/index.css`;
const main = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/main.css`;
const quickviewPopup = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/quickview-popup-cart.css`;
const swiper = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/swiper.css`;
const owl = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/css/owl.carousel.css`;
const owl_theme = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/owl.theme.default.css`;
const breadcrumb = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/breadcrumb.css`;
const contact = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/contact.css`;
const page = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/page.css`;
const news = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/new.css`;
const products = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/products.css`;
const article = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/article.css`;
const product = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/lofi_nest/css/product.css`;
//import js
export const particlesjs = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/js/particles.min.js`;
const fbChat = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/js/fbCustomerChat.js`;
const owljs = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/js/owl.carousel.js`;
// lazy load
const lazyLoadimg = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/js/lazysizes.min.js`;

export default function vga_soft(props) {
  const {
    asPath,
    modifedCategory,
    dataSite,
    menuFooter,
    menuHeader,
    children,
    noHeader,
  } = props;

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href={ajaxCart} type="text/css" media="all" />
        <link rel="stylesheet" href={bootstrap} type="text/css" media="all" />
        <link rel="stylesheet" href={index} type="text/css" media="all" />
        <link rel="stylesheet" href={contact} type="text/css" media="all" />
        <link rel="stylesheet" href={page} type="text/css" media="all" />
        <link rel="stylesheet" href={news} type="text/css" media="all" />
        <link rel="stylesheet" href={products} type="text/css" media="all" />
        <link rel="stylesheet" href={product} type="text/css" media="all" />
        <link rel="stylesheet" href={article} type="text/css" media="all" />
        <link rel="stylesheet" href={breadcrumb} type="text/css" media="all" />
        <link rel="stylesheet" href={main} type="text/css" media="all" />
        <link
          rel="stylesheet"
          href={quickviewPopup}
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href={swiper} type="text/css" media="all" />
        <link rel="stylesheet" href={owl} type="text/css" media="all" />
        <link rel="stylesheet" href={owl_theme} type="text/css" media="all" />
        <script async defer src={lazyLoadimg} />
        <script async defer src={particlesjs} />
        <script async defer src={owljs} />
      </Head>
      {noHeader || (
        <Header menuHeader={menuHeader} dataSite={dataSite} asPath={asPath} />
      )}
      <BreadCrumb data={props.modifedCategory || props.datainfoArticle} />
      {children}
      <Arcontactus />
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <script>
        {`var chatbox = document.getElementById('fb-customer-chat'); 
        chatbox.setAttribute("page_id", ${
          publicRuntimeConfig.FACEBOOK_PAGE_ID
        }); 
        chatbox.setAttribute("attribution", "biz_inbox"); `}
      </script>
      <script>
        {`window.fbAsyncInit = function() { 
          FB.init({ xfbml : true, version : 'API-VERSION' }); 
        }; 
        (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));  `}
      </script>
      <script async defer src={fbChat} />
      {/* <QuickMenu asPath={asPath} data={props.dataHome} /> */}
      <Footer
        menuFooter={menuFooter}
        menuHeader={menuHeader}
        dataSite={dataSite}
      />
      <BottomMenu
        {...props}
        menuHeader={menuHeader}
        office={dataSite.siteProfiles[0].offices[0]}
      />
    </React.Fragment>
  );
}
