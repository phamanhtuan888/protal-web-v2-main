import React from "react";
import { connect } from "react-redux";
// import getConfig from 'next/config';
import dynamic from "next/dynamic";
// import router from 'next/router';
import Exception from "@/componentWebs/Exception";
import page from "@/layouts/page";
import Head from "@/componentWebs/head";
import getConfig from "next/config";
import controller from "@/groupTemplate/controller";

const { publicRuntimeConfig } = getConfig();
// import { modifyCategoryWithTemplate } from '@/componentWebs/BaseConverter/BaseConverter';
const RenderTemplatesCategory = dynamic(() => import("@/groupTemplate"), {
  ssr: true,
  loading: () => null,
});

const fetchAllDataCategories = async ({
  dispatch,
  item,
  siteFolder,
  query,
}) => {
  // fetchCategoryInfoById

  let dataChildrenAll;

  const fun = controller[siteFolder]?.[item?.templateLayouts?.folder];

  let dataResult;
  if (fun) {
    dataResult = await fun({ data: item, dispatch, query });
  }

  if (dataResult?.typeApi === "children") {
    if (dataResult?.dataResult?.length > 0) {
      dataChildrenAll = await Promise.all(
        dataResult?.dataResult?.map(async (item2) =>
          fetchAllDataCategories({ dispatch, item: item2, siteFolder, query })
        )
      );
    }
  }

  return {
    modifedCategory: item,
    dataResult: { ...dataResult, children: dataChildrenAll },
  };
};

@page
@connect(({ webs }) => ({
  webs,
}))
class Index extends React.Component {
  static async getInitialProps(ctx) {
    const { req, store, dispatch, query } = ctx;
    let cookies;
    let host = "";
    if (req) {
      // console.log('headers', req.headers);
      // console.log('SITE_NAME', publicRuntimeConfig.SITE_NAME);
      // eslint-disable-next-line prefer-destructuring
      cookies = req.cookies;
      host =
        req.headers.host === "localhost:8834"
          ? publicRuntimeConfig.SITE_NAME
          : req.headers.host;
    }

    if (host.indexOf("www") === 0) {
      host = host.slice(4);
    }
    let dataSiteId = cookies?.sitesId;

    const languagesId = cookies?.languagesId;
    // console.log(cookies)
    // console.log('aaaaa', languagesId)
    let dataSite1;
    if (!dataSiteId) {
      await dispatch({
        type: "webs/fetchSiteUrl",
        payload: { url: host },
        callback: (res) => {
          dataSiteId = res?.id;
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
      type: "webs/fetchCategoryInfoByName",
      payload: {
        name: query.name,
        status: "1",
        sitesId: SITEID_WEB,
        languagesId:
          languagesId ||
          dataSiteResult?.siteProfiles?.find((i) => i?.isDefault === 1)
            ?.languagesId ||
          "",
      },
    });
    const {
      webs: { dataCategoryInfo },
    } = store.getState();


    const siteFolder = dataSiteResult?.templates?.folder;

    const fun =
      controller[siteFolder]?.[dataCategoryInfo?.templateLayouts?.folder];

    let dataResult;
    if (fun) {
      dataResult = await fun({ data: dataCategoryInfo, dispatch, query });
    }
    let dataChildrenAll;
    // console.log('dataResult', dataResult);

    if (dataResult?.typeApi === "children") {
      if (dataResult?.dataResult?.length > 0) {
        dataChildrenAll = await Promise.all(
          dataResult?.dataResult?.map(async (item) =>
            fetchAllDataCategories({ dispatch, item, siteFolder, query })
          )
        );
      }
    }

    // const {languagesId} = dataCategoryInfo
    // console.log('dataCategoryInfo', dataCategoryInfo);

    const modifedCategory = dataCategoryInfo;

    return {
      modifedCategory,
      query,
      dataResult: { ...dataResult, children: dataChildrenAll },
    };
  }

  render() {
    const { modifedCategory, dataSite, languagesId } = this.props;
    // console.log("dataSite", dataSite);
    const ogImage = modifedCategory?.images?.[0]?.file || "";
    // console.log("query", query)
    let headTitle;
    if (!modifedCategory?.id || !modifedCategory?.templateLayouts?.folder) return <Exception style={{ clear: "both" }} />;
    if (languagesId !== modifedCategory.languagesId)
      return <Exception style={{ clear: "both" }} />;
    if (dataSite.id !== modifedCategory.sitesId)
      return <Exception style={{ clear: "both" }} />;
    const { seoKeywords, seoDescriptions, categoriesName } = modifedCategory;
    if (categoriesName !== undefined && categoriesName !== null) {
      headTitle = `${dataSite?.sitesName} - ${categoriesName}`;
    }
    // console.log("fsfssag");
    // const ogImage = dataSite && dataSite.logo && dataSite.logo.split(',')[0]
    let url = dataSite?.url;
    if (typeof window !== "undefined") {
      url = window.location.href;
    }

    return (
      <React.Fragment>
        <Head
          title={headTitle}
          dataSite={dataSite}
          keywords={seoKeywords || categoriesName}
          description={seoDescriptions || categoriesName}
          url={url || ""}
          ogImage={ogImage}
        />
        <RenderTemplatesCategory
          {...this.props}
          data={[modifedCategory]}
          dataSite={dataSite}
        />
      </React.Fragment>
    );
  }
}

export default Index;
