export default async ({ data, dispatch }) => {
  let dataResult;
  const query = {
    filter: {
      status: '1',
      objectListsId: data?.id,
      sitesId: data?.sitesId,
    },
  };
  await dispatch({
    type: 'webs/fetchAllAd',
    payload: query,
    callback: (res) => {
      dataResult = res?.result || {};
    },
  });
  return dataResult;
};
