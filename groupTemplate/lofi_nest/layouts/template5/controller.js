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
    type: 'webs/fetchListProduct',
    payload: query,
    callback: (res) => {
      dataResult = res?.result || {};
    },
  });
  return dataResult;
};
