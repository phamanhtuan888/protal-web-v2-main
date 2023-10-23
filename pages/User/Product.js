// import React from "react";
// import { connect } from "react-redux";
// import page from "@/layouts/page";
// import cookie from "cookie";
// import Head from "@/componentWebs/head";
// import Exception from "@/componentWebs/Exception";
// import dynamic from "next/dynamic";
// import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();

// const RenderTemplatesCategory = dynamic(() => import("@/groupTemplate"), {
//   ssr: true,
//   loading: () => null,
// });

// @page
// @connect(({ webs }) => ({
//   webs,
// }))
// class Detail extends React.Component {
//   static async getInitialProps(ctx) {
//     // console.log('ctx',ctx)
//     const { store, dispatch, query, req } = ctx;
//     let cookies;
//     let host = "";
//     if (req) {
//       // eslint-disable-next-line prefer-destructuring
//       cookies = req.cookies;
//       host =
//         req.headers.host === "localhost:8834"
//           ? publicRuntimeConfig.SITE_NAME
//           : req.headers.host;
//       // host = publicRuntimeConfig.SITE_NAME;
//     }
//     else {
//       const documentCookie = document.cookie;
//       cookies = cookie.parse(documentCookie);
//       host =
//         window.location.host === "localhost:8834"
//           ? publicRuntimeConfig.SITE_NAME
//           : window.location.host;
//     }
//     if (host.indexOf("www") === 0) {
//       host = host.slice(4);
//     }
//     let dataSite1;
//     if (!cookies?.sitesId) {
//       await dispatch({
//         type: "webs/fetchSiteUrl",
//         payload: { url: host },
//         callback: (res) => {
//           dataSite1 = res;
//         },
//       });
//     }

//     const {
//       webs: { dataSite },
//     } = store.getState();
//     const dataSiteResult = dataSite || dataSite1;
//     const SITEID_WEB = dataSiteResult?.id;
//     await dispatch({
//       type: "webs/fetchArticleInfoByName",
//       payload: { name: query.title, sitesId: SITEID_WEB, status: "1" },
//     });
//     const {
//       webs: { datainfoArticle: data },
//     } = store.getState();

//     let relateArticles;
//     if (data?.id) {
//       await dispatch({
//         type: "webs/fetchListArticle",
//         payload: {
//           filter: {
//             status: "1",
//             sitesId: data?.categories?.sitesId,
//             categoriesId: data?.categoriesId,
//             languagesId: data?.languagesId,
//           },
//           range: [0, 3],
//         },
//         callback: (res) => {
//           relateArticles = res.result;
//         },
//       });
//     }

//     return {
//       datainfoArticle: data,
//       query,
//       relateArticles,
//     };
//   }

//   render() {
//     const { datainfoArticle, relateArticles, query, dataSite } = this.props;
//     if (
//       Number(dataSite.id) === Number(datainfoArticle?.categories?.sitesId)
//       && datainfoArticle?.status === 1
//     ) {
//       const headTitle =
//         `${dataSite?.sitesName} -  ${datainfoArticle &&
//         datainfoArticle.title}` || "";
//       const { title, shortDescription } = datainfoArticle;
//       const ogImage = datainfoArticle?.images?.[0]?.file || "";
//       let url = dataSite?.url;
//       if (typeof window !== "undefined") {
//         url = window.location.href;
//       }
//       return (
//         <React.Fragment>
//           <Head
//             title={headTitle}
//             dataSite={dataSite}
//             keywords={title}
//             description={`${shortDescription || title}`}
//             ogImage={ogImage}
//             url={url || ""}
//           />
//           <RenderTemplatesCategory
//             {...this.props}
//             data={datainfoArticle}
//             dataSite={dataSite}
//             isDetail
//             relateArticles={relateArticles}
//             query={query}
//           />
//         </React.Fragment>
//       );
//     }
//     return <Exception style={{ clear: "both" }} />;
//   }
// }

// export default Detail;
