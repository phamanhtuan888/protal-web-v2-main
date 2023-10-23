import React from "react";
import { connect } from "react-redux";
import page from "@/layouts/page";
import Head from "@/componentWebs/head";
import Exception from "@/componentWebs/Exception";
import dynamic from "next/dynamic";

const RenderTemplatesCategory = dynamic(() => import("@/groupTemplate"), {
  ssr: true,
  loading: () => null,
});

@page
@connect(({ webs }) => ({
  webs,
}))
class Detail extends React.Component {
  static async getInitialProps(ctx) {
    // console.log('ctx',ctx)
    const { store, dispatch, query } = ctx;
    let templateId;
    // get templateId for current url
    await dispatch({
      type: "webs/fetchTemplates",
      payload: {
        filter: { search: query.title },
      },
      callback: (res) => {
        templateId = res?.result?.list?.[0]?.id || null;
      },
    });
    // get template info
    if (templateId) {
      await dispatch({
        type: "webs/fetchThemeInfo",
        payload: { id: templateId },
      });
    }

    // get most popular template
    let popularTemplates;
    await dispatch({
      type: "webs/fetchTemplates",
      payload: {
        filter: {
          status: 1,
          templateGroupsId: "7",
        },
        sort: {
          price: "DESC",
        },
        range: [0, 3],
      },
      callback: (res) => {
        popularTemplates = res?.result?.list || [];
      },
    });
    const {
      webs: { dataThemeInfo: data },
    } = store.getState();
    return {
      dataThemeInfo: data,
      popularTemplates,
      query,
    };
  }

  render() {
    const {
      dataThemeInfo,
      popularTemplates,
      asPath,
      query,
      dataSite,
    } = this.props;
    if (String(dataThemeInfo?.folder) === String(query && query.title)) {
      const headTitle = `${dataThemeInfo && dataThemeInfo.templatesName}` || "";
      const { templateName: title, shortDescription } = dataThemeInfo;
      const ogImage = dataThemeInfo?.images?.[0]?.file || "";
      let url = dataSite?.url;
      if (typeof window !== "undefined") {
        url = window.location.href;
      }
      return (
        <React.Fragment>
          <Head
            title={headTitle}
            dataSite={dataSite}
            keywords={title}
            description={`${shortDescription || title}`}
            ogImage={ogImage}
            url={url || ""}
          />
          <RenderTemplatesCategory
            {...this.props}
            data={{ dataThemeInfo, popularTemplates }}
            popularTemplates={popularTemplates}
            dataSite={dataSite}
            isTheme
            asPath={asPath}
          />
        </React.Fragment>
      );
    }
    return <Exception style={{ clear: "both" }} />;
  }
}

export default Detail;
