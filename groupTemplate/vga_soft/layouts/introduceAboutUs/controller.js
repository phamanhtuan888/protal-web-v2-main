export default async ({ data, dispatch }) => {
  let dataResult;

  const query = {
    filter: {
      status: 1,
      sitesId: data?.sitesId,
      categoriesId: data?.id,
      languagesId: data?.languagesId,
    },
  };

  await dispatch({
    type: 'webs/fetchListArticle',
    payload: query,
    callback: (res) => {
      dataResult = res?.result || {};
    },
  });

  return dataResult;
};
