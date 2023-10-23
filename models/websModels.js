/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* import { routerRedux } from 'dva/router';
import { message } from 'antd'; */
// import log from '@/utils/log';
import { login } from "@/utils/auth";
import {
  queryMenus,
  queryCategoryInfo,
  queryObjectLists,
  queryArticleList,
  queryArticleInfoByName,
  queryArticleInfoById,
  queryAd,
  queryCategoryInfoByName,
  queryChildrenCategoryAll,
  queryTreeCategoryById,
  queryDataSiteUrl,
  queryProductList,
  queryProductInfo,
  getListBrands,
  queryOrderByToken,
  createOrders,
  queryProductVACAll,
  queryProductVACInfo,
  createProductVAC,
  insertContact,
  queryThemeInfo,
  queryTemplates,
  queryTemplateGroups,
  loginSocial,
  register,
  fakeAccountLogin,
} from "@/services/websRedux";

export default {
  namespace: "webs",

  state: {
    dataAll: [],
    dataAdd: [],
    dataMenu: {},
    info: {},
    query: {},
    filter: {},
    dataCategoryInfo: {},

    sts: [],
    datainfoArticle: {},
    dataAd: [],
    dataSite: {},
    dataProductInfo: {},
    dataCheckout: {},
    dataThemeInfo: {},
  },
  effects: {
    *fetchMenus({ payload, callback }, { call, put }) {
      const response = yield call(queryMenus, payload);
      // console.log("servie model fetch response: %o ", response)
      if (response) {
        yield put({
          type: "save",
          payload: response || {},
        });
      }
      if (callback) callback(response);
    },
    *fetchObjectLists({ payload, callback }, { call, put }) {
      // console.log('payload', payload);
      const response = yield call(queryObjectLists, payload);
      // const page = yield select(state => state.users.page);
      // console.log('response', response);
      if (response) {
        yield put({ type: "saveObjectLists", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchListArticle({ payload, callback }, { call }) {
      const response = yield call(queryArticleList, payload);
      if (callback) callback(response);
    },
    *fetchAllAd({ payload, callback }, { call }) {
      const response = yield call(queryAd, payload);
      // const page = yield select(state => state.users.page);
      // console.log("dsasad", response)
      // if (response) {
      //   yield put({ type: 'saveAd', payload: response || {} });
      // }
      if (callback) callback(response);
    },
    // *fetchArticleInfoByName({ payload, callback }, { call, put }) {
    //   const response = yield call(queryArticleInfoByName, payload);
    //   // const page = yield select(state => state.users.page);
    //   // console.log("dsasad", response)
    //   if (response) {
    //     yield put({ type: 'saveArticleInfo', payload: response || {} });
    //   }
    //   if (callback) callback(response);
    // },
    *fetchArticleInfoByName(
      {
        payload: { name, sitesId, noRedux },
        callback,
      },
      { call, put }
    ) {
      const response = yield call(queryArticleInfoByName, name, sitesId);
      // const page = yield select(state => state.users.page);
      // console.log("dsasad", response)
      if (response && !noRedux) {
        yield put({ type: "saveArticleInfo", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchArticleInfoById({ payload, callback }, { call, put }) {
      const response = yield call(queryArticleInfoById, payload.id);
      if (response) {
        yield put({ type: "saveArticleInfo", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchCategoryInfoByName(
      {
        payload: { name, sitesId, languagesId },
        callback,
      },
      { call, put }
    ) {
      const response = yield call(
        queryCategoryInfoByName,
        name,
        sitesId,
        languagesId
      );
      // const page = yield select(state => state.users.page);
      // console.log("dsasad", response)
      if (response) {
        yield put({ type: "saveCategoryInfo", payload: response || {} });
        // yield put({ type: 'saveLangid', payload: response || {} });
      }
      if (callback) callback(response);
    },

    *fetchAllChildrenCategory({ payload, callback }, { call }) {
      const response = yield call(queryChildrenCategoryAll, payload);
      // const page = yield select(state => state.users.page);
      // console.log('dsasad', response);
      if (callback) callback(response);
    },
    *fetchTreeCategory({ payload, callback }, { call }) {
      const response = yield call(queryTreeCategoryById, payload);
      if (callback) callback(response);
    },
    *fetchSiteUrl(
      {
        payload: { url },
        callback,
      },
      { call, put }
    ) {
      const response = yield call(queryDataSiteUrl, url);
      if (response) {
        yield put({ type: "saveDataSiteUrl", payload: response || {} });
      }
      // console.log('====================================');
      // console.log(response);
      // console.log('====================================');
      if (callback) callback(response);
    },
    *fetchListProduct({ payload, callback }, { call }) {
      const response = yield call(queryProductList, payload);
      if (response) {
        // yield put({ type: 'saveProduct', payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchProductInfo({ payload, callback }, { call, put }) {
      const response = yield call(queryProductInfo, payload);
      if (response) {
        yield put({ type: "saveProductInfo", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchTemplates({ payload, callback }, { call }) {
      const response = yield call(queryTemplates, payload);
      if (callback) callback(response);
    },
    *fetchTemplateGroups({ payload, callback }, { call, put }) {
      const response = yield call(queryTemplateGroups, payload);
      if (response) {
        yield put({ type: "saveTemplateCategories", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchThemeInfo({ payload, callback }, { call, put }) {
      const response = yield call(queryThemeInfo, payload);
      if (response) {
        yield put({ type: "saveThemeInfo", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *fetchProducers({ payload, callback }, { call }) {
      // console.log("asdaf")
      const response = yield call(getListBrands, payload);
      if (callback) callback(response);
    },
    *fetchOrderByToken({ payload, callback }, { call, put }) {
      const response = yield call(queryOrderByToken, payload);
      if (response) {
        yield put({ type: "saveCheckout", payload: response || {} });
      }
      if (callback) callback(response);
    },
    *postCreateOrder({ payload, callback }, { call }) {
      const response = yield call(createOrders, payload);
      if (callback) callback(response);
    },
    *postProductVAC({ payload, callback }, { call }) {
      const response = yield call(createProductVAC, payload);
      if (response) {
        if (callback) callback(response);
      }
    },
    *fetchProductVAC({ payload, callback }, { call }) {
      const response = yield call(queryProductVACAll, payload);
      if (response) {
        if (callback) callback(response);
      }
    },
    *fetchProductVACInfo({ payload, callback }, { call }) {
      const response = yield call(queryProductVACInfo, payload);
      if (response) {
        if (callback) callback(response);
      }
    },
    *fetchCategoryInfoById(
      {
        payload: { id, languagesId },
        callback,
      },
      { call }
    ) {
      const response = yield call(queryCategoryInfo, id, languagesId);
      if (callback) callback(response);
    },
    *postContact({ payload, callback }, { call }) {
      const response = yield call(insertContact, payload);
      if (callback) callback(response);
    },
    *login({ payload, callback }, { call, put }) {
      // console.log("model login payload: %o", payload);
      // console.log("login", payload)
      const response = yield call(fakeAccountLogin, payload);
      if (response) {
        yield put({
          type: "changeLoginStatus",
          payload: response,
        });
        // Login successfully
        if (response.status === "ok") {
          // console.log(response);
          const typeLogin =
            (response?.userGroupsId !== "18" &&
              payload?.type === "sale" &&
              "18") ||
            response?.userGroupsId;
          login({ token: response.token || "", response, typeLogin });
        } else if (callback) callback({ ...response });
      }
    },

    *register({ payload, callback }, { call }) {
      const response = yield call(register, payload);
      if (callback) callback(response);
    },
    *loginSocial({ payload, callback }, { call }) {
      const response = yield call(loginSocial, payload);
      if (response) {
        // Login successfully
        if (callback) callback({ ...response });
      }
    },
  },

  reducers: {
    saveAd(state, action) {
      return { ...state, dataAd: action.payload.result };
    },
    save(state, action) {
      return { ...state, dataMenu: action.payload.result };
    },
    saveArticleInfo(state, action) {
      return { ...state, datainfoArticle: action.payload };
    },
    saveCategoryInfo(state, action) {
      return { ...state, dataCategoryInfo: action.payload };
    },
    saveObjectLists(state, action) {
      // console.log(action.payload);
      return { ...state, dataObjectLists: action.payload };
    },
    saveDataSiteUrl(state, action) {
      return {
        ...state,
        dataSite: action.payload && action.payload.result,
      };
    },
    saveProductInfo(state, action) {
      return { ...state, dataProductInfo: action.payload };
    },
    saveThemeInfo(state, action) {
      return { ...state, dataThemeInfo: action.payload };
    },
    saveTemplateCategories(state, action) {
      return { ...state, dataTemplateGroups: action.payload };
    },
    saveCheckout(state, action) {
      return { ...state, dataCheckout: action.payload };
    },
  },
};
