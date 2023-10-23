/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
import React from "react";
import { connect } from "react-redux";
import dynamic from "next/dynamic";
import page from "@/layouts/page";
import cookie from "cookie";
import Head from "@/componentWebs/head";
import getConfig from "next/config";
import controller from "@/groupTemplate/controller";

const { publicRuntimeConfig } = getConfig();
// import 'antd/dist/antd.css';
// import { renderTemplatesCategory } from '@/GroupTemplate/templateCategory';

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

// const modifyCategoryWithTemplate = (category, checker) => {
//   const categoriesTemplateLayout = (category && category.categoriesTemplateLayout) || {};
//   const pageTemplate =
//     categoriesTemplateLayout &&
//     categoriesTemplateLayout.length > 0 &&
//     categoriesTemplateLayout.find(e => e && e.isHome === checker);
//   const modifedCategory = {
//     ...category,
//     templateLayouts: pageTemplate && pageTemplate.templateLayouts,
//   };

//   return modifedCategory;
// };
// @page
@connect(({ webs }) => ({
  webs,
}))
class Index extends React.Component {
  static async getInitialProps(ctx) {
    const { req, store, dispatch, query } = ctx;
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
    const languagesId = cookies?.languagesId;
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
    const siteFolder = dataSiteResult?.templates?.folder;

    const queryCategoryHome = {
      filter: {
        status: "1",
        languagesId:
          languagesId ||
          dataSiteResult?.siteProfiles?.find((i) => i?.isDefault === 1)
            ?.languagesId ||
          "",
        sitesId: SITEID_WEB,
      },
      sort: ["orderBy", "ASC"],
    };

    await dispatch({
      type: "webs/fetchObjectLists",
      payload: queryCategoryHome,
    });

    const {
      webs: { dataObjectLists },
    } = await store.getState();
    let dataHome = dataObjectLists?.result?.list || [];

    dataHome = await Promise.all(
      dataHome?.map(async (item) =>
        fetchAllDataCategories({ dispatch, item, siteFolder, query })
      )
    );

    return {
      query,
      cookies,
      dataHome,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      dataHome: props?.dataHome || [],
    };
  }

  render() {
    const { dataSite } = this.props;
    const { dataHome } = this.state;
    const ogImage = dataSite?.icon?.file;
    let url = dataSite?.url;
    if (typeof window !== "undefined") {
      url = window.location.href;
    }
    return (
      <React.Fragment>
        <Head
          dataSite={dataSite}
          title={dataSite?.sitesName}
          ogImage={ogImage}
          keywords={dataSite && dataSite.seoKeywords}
          description={dataSite && dataSite.seoDescriptions}
          url={url || ""}
        />
        {dataHome?.filter(i => i?.modifedCategory?.id)?.map(
          (item) => (
            <RenderTemplatesCategory
              {...this.props}
              {...item}
              data={[item?.modifedCategory]}
              dataSite={dataSite}
              key={item?.modifedCategory?.id}
            />
          )
        )}
      </React.Fragment>
    );
  }
}

export default page(Index);
