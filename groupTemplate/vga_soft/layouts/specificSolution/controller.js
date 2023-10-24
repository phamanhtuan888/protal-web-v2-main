export default async ({ data, dispatch }) => {
  let dataResult;
  await dispatch({
    type: "webs/fetchListArticle",
    payload: {
      filter: {
        status: "1",
        categoriesId: data?.id,
        languagesId: data?.languagesId,
      },
      range: [0, 3],
      attributes: "title,shortDescription,images,urlSlugs,dateUpdated",
    },
    callback: (res) => {
      dataResult = res?.result || {};
    },
  });

  return dataResult;
};
