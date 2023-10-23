export default async ({ data, dispatch, query }) => {
    // const page = query.page - 1 || 0;
    // const len = 4;
  
    let dataResult;
  
    await dispatch({
      type: "webs/fetchListArticle",
      payload: {
        filter: {
          status: 1,
          categoriesId: data?.id,
          sitesId: data?.sitesId,
          languagesId: data?.languagesId,
        },
        // range: [page * len, (page + 1) * len - 1],
      },
      callback: (res) => {
        dataResult = res.result;
      },
    });
  
    return dataResult;
  };