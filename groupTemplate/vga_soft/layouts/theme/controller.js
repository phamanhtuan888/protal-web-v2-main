export default async ({ data, dispatch, query }) => {
  const dataResult = { products: "", templateGroups: "", article: "" };

  const { page, price, group, q = "" } = query;
  const len = 24;
  const num = parseInt(page, 10) || 1;
  if (group === "2" || group === 2) return;

  let payload;
  if (group) {
    payload = {
      filter: {
        status: 1,
        languagesId: data?.languagesId,
        templateGroupsId: parseInt(group, 10).toString(),
      },
      range: [(num - 1) * len, num * len - 1],
    };
  } else {
    payload = {
      filter: {
        status: 1,
        languagesId: data?.languagesId,
        notTemplateGroupsId: "2",
      },
      range: [(num - 1) * len, num * len - 1],
    };
  }
  if (parseInt(price, 10) || parseInt(price, 10) === 0)
    payload.filter.price = price;
  if (q.trim()) payload.filter.search = q;

  // console.log(payload);
  await dispatch({
    type: "webs/fetchTemplates",
    payload,
    callback: (res) => {
      dataResult.products = res?.result;
    },
  });

  // templates menu
  await dispatch({
    type: "webs/fetchTemplateGroups",
    payload: {
      filter: {
        status: 1,
        languagesId: data?.languagesId,
      },
    },
    callback: (res) => {
      // remove nhom noi bo
      dataResult.templateGroups = res?.result?.list.filter(
        (item) => item?.urlSlugs !== "nhom-noi-bo"
      );
    },
  });

  // header
  await dispatch({
    type: "webs/fetchListArticle",
    payload: {
      filter: {
        status: 1,
        categoriesId: data?.id,
        sitesId: data?.sitesId,
        languagesId: data?.languagesId,
      },
    },
    callback: (res) => {
      dataResult.article = res?.result?.list[0];
    },
  });

  return dataResult;
};
