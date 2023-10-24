export default async ({ data, dispatch, query }) => {
  let dataResult;
  const len = 13;
  const { page } = query;

  await dispatch({
    type: "webs/fetchListArticle",
    payload: {
      filter: {
        status: 1,
        categoriesId: data?.id,
        languagesId: data?.languagesId,
      },
      range: [(page - 1) * len, page * len - 1],
      attributes: "title,shortDescription,images,urlSlugs,dateUpdated",
    },
    callback: (res) => {
      dataResult = res.result;
    },
  });

  return dataResult;
};
