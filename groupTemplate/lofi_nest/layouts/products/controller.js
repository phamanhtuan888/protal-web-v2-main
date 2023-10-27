export default async ({ data, dispatch,query }) => {
  const page = query.page - 1 || 0;
  const len = 12;

  let dataResult;

  await dispatch({
    type: "webs/fetchListProduct",
    payload: {
      filter: {
        status: 1,
        categoriesId: data?.id === '619' ? undefined : data?.id,
        sitesId: data?.sitesId,
        languagesId: data?.languagesId,
        // dealPrice:'2150000'
      },
      range: [page * len, (page + 1) * len - 1],
      sort:["dealPrice", "DESC"],
    },
    callback: (res) => {
      dataResult = res.result;
    },
  });

  return dataResult;
};


