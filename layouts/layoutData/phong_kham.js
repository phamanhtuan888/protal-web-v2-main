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
const Header = dynamic(() => import("@/componentWebs/phong_kham/Header"), {
  ssr: true,
  loading: () => null,
});
const Footer = dynamic(() => import("@/componentWebs/phong_kham/Footer"), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(
  () => import("@/componentWebs/phong_kham/BreadCrumb"),
  {
    ssr: true,
    loading: () => null,
  }
);
const Arcontactus = dynamic(
  () => import("@/componentWebs/phong_kham/Arcontactus"),
  {
    ssr: true,
    loading: () => null,
  }
);
const BottomMenu = dynamic(
  () => import("@/componentWebs/phong_kham/BottomMenu"),
  {
    ssr: true,
    loading: () => null,
  }
);
// const QuickMenu = dynamic(() => import('@/componentWebs/QuickMenu'), {
//   ssr: true,
//   loading: () => null,
// });

// import css
const base = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/base.css`;
const bootstrap = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/bootstrap.css`;
const copy = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/copy.css`;
const mainMin = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/main.min.css`;
const responsive = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/responsive.css`;
const owl = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/css/owl.carousel.css`;
const all = `${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/css/all.css`;
const styleQuickMenu = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/styleQuickMenu.css`;
const template = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/vga_soft/css/template.css`;
const fontaws = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/css/fontawesome5/css/all.css`;
const owl_theme = `${
  publicRuntimeConfig.DOMAIN_STATIC
}/static/web/owl.theme.default.css`;
// js
// const js = `${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/js/javascript.js`;
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
        <link rel="stylesheet" href={bootstrap} type="text/css" media="all" />

        <link rel="stylesheet" href={base} type="text/css" media="all" />

        <link rel="stylesheet" href={owl} type="text/css" media="all" />
        <link rel="stylesheet" href={all} type="text/css" media="all" />
        <link rel="stylesheet" href={copy} type="text/css" media="all" />
        <link rel="stylesheet" href={fontaws} type="text/css" media="all" />
        <link
          rel="stylesheet"
          href={styleQuickMenu}
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href={owl_theme} type="text/css" media="all" />
        <link rel="stylesheet" href={responsive} type="text/css" media="all" />
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
