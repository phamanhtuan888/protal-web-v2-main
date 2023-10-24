import { stringify } from "qs";
import request from "@/utils/request";
import CONFIG from "@/utils/config";
// import log from '@/utils/log';

// user
// eslint-disable-next-line import/prefer-default-export
export async function queryMenus(params) {
  const { filter, sort, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["name", "ASC"]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/menus/find/all/parent-child?${stringify(query)}`)
  return request(
    `${CONFIG.API_SERVER_WEB}/menus/find/all/parent-child?${stringify(query)}`
  );
}

export async function queryCategoryInfo(id, languagesId) {
  // console.log(`${CONFIG.API_SERVER_WEB}/categories/${id}`)

  return request(
    `${CONFIG.API_SERVER_WEB}/categories/${id}?languagesId=${languagesId}`
  );
}
export async function queryCategoryInfoByName(name, sitesId, languagesId) {
  const query = {
    filter: JSON.stringify({ sitesId, status: "1" }),
  };
  // console.log(`${CONFIG.API_SERVER_WEB}/categories/${name}?${stringify(query)}&languagesId=${languagesId}`)
  return request(
    `${CONFIG.API_SERVER_WEB}/categories/${name}?${stringify(
      query
    )}&languagesId=${languagesId}`
  );
}

export async function queryObjectLists(params) {
  const { filter, sort } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["orderBy", "DESC"]),
    // attributes: 'id,name,urlSlugs,image,isHome,descriptions,orderBy,orderHome,typesId'
  };
  // console.log(`CONFIG.API_SERVER_WEB}/categories?${stringify(query)}`);
  return request(`${CONFIG.API_SERVER_WEB}/objectLists?${stringify(query)}`);
}

export async function queryArticleList(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/articles?${stringify(query)}`)
  return request(`${CONFIG.API_SERVER_WEB}/articles?${stringify(query)}`);
}

export async function queryAd(params) {
  const { filter, attributes, range } = params;
  const query = {
    filter: JSON.stringify(filter),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/ads?${stringify(query)}`)
  return request(`${CONFIG.API_SERVER_WEB}/ads?${stringify(query)}`);
}

export async function queryArticleInfoByName(name, sitesId) {
  const query = {
    filter: JSON.stringify({ sitesId, status: "1" }),
  };
  return request(
    `${CONFIG.API_SERVER_WEB}/articles/${name}?${stringify(query)}`
  );
}
export async function queryArticleInfoById(id) {
  // console.log(`${CONFIG.API_SERVER_WEB}/articles/${name}${attributes || ''}`)
  return request(`${CONFIG.API_SERVER_WEB}/articles/${id}`);
}

export async function queryChildrenCategoryAll(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["name", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/categories/find/list/parent-child?${stringify(query)}`);

  return request(
    `${CONFIG.API_SERVER_WEB}/categories/find/list/parent-child?${stringify(
      query
    )}`
  );
}
export async function queryTreeCategoryById(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["name", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  return request(
    // console.log(`${CONFIG.API_SERVER_WEB}/categories/find/getbycategories/parent-child?${stringify(query)}`)
    `${CONFIG.API_SERVER_WEB
    }/categories/find/getbycategories/parent-child?${stringify(query)}`
  );
}
export async function queryDataSiteUrl(url) {
  return request(`${CONFIG.API_SERVER_WEB}/sites/${url}`);
}

export async function queryProductList(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/products?${stringify(query)}`);
  return request(`${CONFIG.API_SERVER_WEB}/products?${stringify(query)}`);
}

export async function queryProductInfo(payload) {
  const { url } = payload;
  return request(`${CONFIG.API_SERVER_WEB}/products/${url}`);
}
export async function queryTemplates(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  // console.log(`${CONFIG.API_SERVER_WEB}/templates?${stringify(query)}`);
  return request(`${CONFIG.API_SERVER_WEB}/templates?${stringify(query)}`);
}

export async function queryThemeInfo(payload) {
  const { id } = payload;
  // console.log(`${CONFIG.API_SERVER_WEB}/templates/${id}`);
  return request(`${CONFIG.API_SERVER_WEB}/templates/${id}`);
}

export async function queryTemplateGroups(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  return request(
    `${CONFIG.API_SERVER_WEB}/templateGroups/find/list/parent-child?${stringify(
      query
    )}`
  );
}

export async function queryProductVACAll(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  return request(`${CONFIG.API_SERVER_WEB}/productsVAC?${stringify(query)}`);
}

export async function queryProductVACInfo(id) {
  return request(`${CONFIG.API_SERVER_WEB}/productsVAC/${id}`);
}

export async function createProductVAC(params) {
  return request(`${CONFIG.API_SERVER_WEB}/productsVAC`, {
    body: { ...params },
    method: "POST",
  });
}

export async function updateProductVAC({ id, ...params }) {
  return request(`${CONFIG.API_SERVER_WEB}/productsVAC/${id}`, {
    body: { ...params },
    method: "PUT",
  });
}

export async function queryOrdersAll(params) {
  const { filter, sort, range, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
    sort: JSON.stringify(sort || ["dateCreated", "DESC"]),
    range: JSON.stringify(range || [0, 49]),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  return request(`${CONFIG.API_SERVER_WEB}/orders?${stringify(query)}`);
}

export async function queryOrdersInfo(id) {
  return request(`${CONFIG.API_SERVER_WEB}/orders/${id}`);
}

export async function queryOrderByToken(query) {
  return request(
    `${CONFIG.API_SERVER_WEB}/orders/getOrder?${stringify(query)}`
  );
}

export async function createOrders(params) {
  return request(`${CONFIG.API_SERVER_WEB}/orders`, {
    body: { ...params },
    method: "POST",
  });
}

export async function updateOrders({ id, ...params }) {
  return request(`${CONFIG.API_SERVER_WEB}/orders/${id}`, {
    body: { ...params },
    method: "PUT",
  });
}

export async function getListBrands(params) {
  // console.log("asfaF")
  const { filter, attributes } = params;
  const query = {
    filter: JSON.stringify(filter),
  };
  if (attributes) {
    query.attributes = attributes;
  }
  return request(`${CONFIG.API_SERVER_WEB}/brands?${stringify(query)}`);
}

export async function insertContact(params) {
  // console.log(`${CONFIG.API_SERVER_WEB}/contacts`, {
  //   method: 'POST',
  //   body: { ...params },
  // });
  return request(`${CONFIG.API_SERVER_WEB}/contacts?`, {
    method: "POST",
    body: { ...params },
  });
}
export async function Login({ params, token }) {
  return request(`${CONFIG.API_ENDPOINT}/web/c/users/loginWithSocial`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
    headers: {
      "x-token": token,
    },
  });
}

export async function fakeAccountLogin(params) {
  return request(`${CONFIG.API_ENDPOINT}/authenticate`, {
    method: "POST",
    body: params,
  });
}
export async function register(params) {
  return request(`${CONFIG.API_ENDPOINT}/web/c/users/register`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
  });
}

export async function loginSocial({ params, token }) {
  return request(`${CONFIG.API_ENDPOINT}/web/c/users/loginWithSocial`, {
    method: "POST",
    body: {
      ...params,
      method: "post",
    },
    headers: {
      "x-token": token,
    },
  });
}
