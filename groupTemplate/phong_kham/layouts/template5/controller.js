export default async ({ data, dispatch }) => {
  let dataResult;
  await dispatch({
    type: 'webs/fetchListArticle',
    payload: {
      filter: {
        status: 1,
        sitesId: data?.sitesId,
        objectListsId: data?.id,
        languagesId: data?.languagesId,
      },
      range: [0, 3],
    },
    callback: (res) => {
      dataResult = res?.result || {};
    },
  });
  return dataResult;
};
