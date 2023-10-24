/* eslint-disable camelcase */
// import dynamic from 'next/dynamic';
import React, { Component } from "react";
import moment from "moment";
import Exception from "@/componentWebs/Exception";
import DATA_TEMPLATES from "./data";

class Index extends Component {
  render() {
    const {
      data,
      dataSite,
      isDetail,
      isProduct,
      isSearch,
      isCart,
      isCheckout,
      isUser,
      isTheme,
      isDemo,
    } = this.props;
    if (isDetail) {
      // console.log('detail', isDetail)
      try {
        const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}_detail`];
       
        if (Templates) {
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `${data?.id}_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return null;
      } catch (error) {
        return null;
      }
    }
    if (isProduct) {
      // console.log('product', isProduct)
      try {
        const Templates =
          DATA_TEMPLATES[`${dataSite.templates.folder}_product`];
        if (Templates) {
         
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `${data?.id}_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (isSearch) {
      // console.log('search',isSearch)
      try {
        const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}_search`];

        if (Templates) {
          // console.log("Templates", DATA_TEMPLATES[`template_sea_kitchen_product`])
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `key_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (isCart) {
      // console.log('cart', isCart)
      try {
        const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}_cart`];

        if (Templates) {
          // console.log("Templates", DATA_TEMPLATES[`template_sea_kitchen_product`])
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `key_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (isCheckout) {
      // console.log('checkout', isCheckout)
      try {
        const Templates =
          DATA_TEMPLATES[`${dataSite.templates.folder}_checkout`];
        // console.log('data', data)
        if (Templates) {
          // console.log("Templates", DATA_TEMPLATES[`template_sea_kitchen_product`])
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `key_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (isUser) {
      // console.log('user', isUser)
      try {
        const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}_user`];
        if (Templates) {
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `key_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        return null;
      }
    }
    if (isTheme) {
      try {
        const Templates =
          DATA_TEMPLATES[`${dataSite.templates.folder}_isTheme`];
        if (Templates) {
          // console.log("Templates", DATA_TEMPLATES[`template_sea_kitchen_product`])
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `${data?.id}_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (isDemo) {
      try {
        const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}_isDemo`];
        if (Templates) {
          return React.createElement(Templates, {
            ...this.props,
            data,
            dataSite,
            key: `${data?.id}_${moment().format("YYYYMMDDHHMMSS")}`,
          });
        }
        return <Exception style={{ clear: "both" }} />;
      } catch (error) {
        // console.log(error);
        return null;
      }
    }
    if (
      data &&
      !isDetail &&
      !isProduct &&
      !isSearch &&
      !isCart &&
      !isCheckout
    ) {
      // console.log('data', data)
      return (
        data &&
        data?.map((item) => {
          if (
            item &&
            item?.templateLayouts &&
            item?.templateLayouts.folder !== null &&
            item?.templateLayouts.folder !== ""
          ) {
            try {
              console.log(
                "folder :",
                `${dataSite.templates.folder}_${item?.templateLayouts.folder}`
              );

              const Templates =
                DATA_TEMPLATES[
                `${dataSite.templates.folder}_${item?.templateLayouts.folder}`
                ];
              if (Templates) {
                return React.createElement(Templates, {
                  ...this.props,
                  data: item,
                  dataSite,
                  key: `${item?.templateLayouts.folder}_${item?.id
                    }_${moment().format("YYYYMMDDHHMMSS")}`,
                });
              }
              return null;
            } catch (error) {
              return null;
            }
          }
          return null;
        })
      );
    }
    return <Exception style={{ clear: "both" }} />;
  }
}

export default Index;
