/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-danger */
/* eslint-disable global-require */
import React from "react";
import cookie from "cookie";
import Media from "react-media";
import dynamic from "next/dynamic";
import getConfig from "next/config";
import { getComponentDisplayName } from "../utils/helpers";

const { publicRuntimeConfig } = getConfig();
const Control = dynamic(() => import("./ControlLayout"), {
  ssr: true,
  loading: () => null,
});


export default (ComposedComponent) => {
  
  class WebLayout extends React.Component {
    
    static displayName = `WebLayout(${getComponentDisplayName(
      ComposedComponent
    )})`;

    static async getInitialProps(context) {
      const { req, asPath, pathname, query, store, dispatch } = context;
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
      } else {
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
      if (SITEID_WEB) {
        const queryMenus = await {
          filter: {
            status: "1",
            menuPositionsId: `${publicRuntimeConfig.MENU__POSITIONID_TOP},${
              publicRuntimeConfig.MENU__POSITIONID_BOTTOM
            }`,
            languagesId:
              languagesId ||
              dataSiteResult?.siteProfiles?.find((i) => i?.isDefault === 1)
                ?.languagesId ||
              "",
            sitesId: SITEID_WEB,
          },
          sort: ["orderBy", "ASC"],
        };
        const queryAd = await {
          filter: {
            status: "1",
            sitesId: SITEID_WEB,
            languagesId:
              languagesId ||
              dataSiteResult?.siteProfiles?.find((i) => i?.isDefault === 1)
                ?.languagesId ||
              "",
          },
          range: [0, 0],
        };

        await dispatch({
          type: "webs/fetchMenus",
          payload: queryMenus,
        });
        await dispatch({
          type: "webs/fetchAllAd",
          payload: queryAd,
        });
      }
      const {
        webs: { dataAd, dataMenu },
      } = await store.getState();

      const menus = dataMenu?.list || [];
      const menuHeader =
        (menus?.length > 0 &&
          menus.filter((item) => Number(item.menuPositionsId) === 4)) ||
        [];
      const menuHeaderFilter =
        (menuHeader?.length > 0 && menuHeader.filter((item) => !item.parent)) ||
        [];
      const menuFooter =
        (menus?.length > 0 &&
          menus.filter((item) => Number(item.menuPositionsId) === 3)) ||
        [];
      const menuFooterFilter =
        (menuFooter?.length > 0 && menuFooter.filter((item) => !item.parent)) ||
        [];
      let ogImage = dataAd?.length > 0 && dataAd[0].image;
      ogImage = `${publicRuntimeConfig.IMAGE_SERVER_NEW}/${
        publicRuntimeConfig.IMAGE_PROJECT
      }${ogImage}`;

      return {
        ...(ComposedComponent.getInitialProps
          ? await ComposedComponent.getInitialProps(context)
          : {}),
        query,
        cookies,
        asPath,
        pathname,
        ogImage,
        dataSite: dataSiteResult,
        languagesId:
          languagesId ||
          dataSiteResult?.siteProfiles?.find((i) => i?.isDefault === 1)
            ?.languagesId ||
          "",
        menuHeader: menuHeaderFilter,
        menuFooter: menuFooterFilter,
        dataSlide: dataAd,
      };
    }
 
   
    render() {
      return (
        <React.Fragment>
          <Media query="(max-width: 992px)">
            {(isMobile) => (
              <Control {...this.props} isMobile={isMobile}>
                <ComposedComponent {...this.props} isMobile={isMobile} />
              </Control>
            )}
          </Media>
        </React.Fragment>
      );
    }
  }

  return WebLayout;
};
