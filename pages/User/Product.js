import React from "react";
import { connect } from "react-redux";
import page from "@/layouts/page";
import cookie from "cookie";
import Head from "@/componentWebs/head";
import Exception from "@/componentWebs/Exception";
import dynamic from "next/dynamic";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const RenderTemplatesCategory = dynamic(() => import("@/groupTemplate"), {
  ssr: true,
  loading: () => null,
});

@page
@connect(({ webs }) => ({
  webs,
}))
class Product extends React.Component {
  static async getInitialProps(ctx) {

    // console.log('ctx',ctx)

    const { store, dispatch, query, req } = ctx;
    let cookies;
    let host = "";
    if (req) {
      // eslint-disable-next-line prefer-destructuring
      cookies = req.cookies;
      host =
        req.headers.host === "localhost:8834"
          ? publicRuntimeConfig.SITE_NAME
          : req.headers.host;
      // host = publicRuntimeConfig.SITE_NAME;
    }
    else {
      const documentCookie = document.cookie;
      cookies = cookie.parse(documentCookie);
      host =
        window.location.host === "localhost:8834"
          ? publicRuntimeConfig.SITE_NAME
          : window.location.host;
    }
    if (host.indexOf("www") === 0) {
      host = host.slice(4);
    }
    let dataSite1;
    if (!cookies?.sitesId) {
      await dispatch({
        type: "webs/fetchSiteUrl",
        payload: { url: host },
        callback: (res) => {
          dataSite1 = res;
        },
      });
    }

    const {
      webs: { dataSite },
    } = store.getState();
    const dataSiteResult = dataSite || dataSite1;
    const SITEID_WEB = dataSiteResult?.id;
    await dispatch({
      type: "webs/fetchProductInfo",
      payload: {url: query.productsName},
      
    });
    const {
      webs: { dataProductInfo: data },
    } = store.getState();

    // console.log(data);

    let relateProducts;
    if (data?.id) {
      await dispatch({
        type: "webs/fetchListProduct",
        payload: { 
          filter: {
            status: "1",
            sitesId: data?.categories?.sitesId,
            categoriesId: data?.categoriesId,
            languagesId: data?.languagesId,
          },
        },
        callback: (res) => {
          relateProducts = res.result;
        },
      });
    }
    // console.log(relateProducts);

    return {
      dataProductInfo: data,
      query,
      relateProducts,
    };
  }

  render() {
    const { dataProductInfo, relateProducts, query, dataSite } = this.props;
    // console.log(dataSite);
    if (
      Number(dataSite.id) === Number(dataProductInfo?.categories?.sites?.id)
      && dataProductInfo?.status === 1
    ) {
      const headTitle =
        `${dataSite?.sitesName} -  ${dataProductInfo &&
          dataProductInfo.productsName}` || "";
      const { productsName, shortDescription } = dataProductInfo;
      const ogImage = dataProductInfo?.images?.[0]?.file || "";
      let url = dataSite?.url;
      if (typeof window !== "undefined") {
        url = window.location.href;
      }
      return (
        <React.Fragment>
          <Head
            title={headTitle}
            dataSite={dataSite}
            keywords={productsName}
            description={`${shortDescription || productsName}`}
            ogImage={ogImage}
            url={url || ""}
          />
          <RenderTemplatesCategory
            {...this.props}
            data={dataProductInfo}
            dataSite={dataSite}
            
            isProduct
            relateProducts={relateProducts}
            query={query}
          />
        </React.Fragment>
      );
    }
    return <Exception style={{ clear: "both", backgroundColor:'black'  }} />;
  }
}

export default Product;
