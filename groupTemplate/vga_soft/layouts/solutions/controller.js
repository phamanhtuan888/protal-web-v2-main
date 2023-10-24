const getCategoryItem = async ({ data, dispatch }) => {
  let dataResult;
  await dispatch({
    type: 'webs/fetchListArticle',
    payload: {
      filter: {
        status: 1,
        categoriesId: data?.id,
        sitesId: data?.sitesId,
        languagesId: data?.languagesId,
      },
    },
    callback: (res) => {
      dataResult = res.result;
    },
  });

  return dataResult;
};

export default async ({ data, dispatch, query }) => {
  const category = data?.children.find((item) => item?.url === query.s) || data?.children[0];
  const dataResult = await getCategoryItem({ data: category, dispatch });
  return { ...dataResult, category };
};
