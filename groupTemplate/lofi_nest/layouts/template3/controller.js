// export default async ({ data, dispatch }) => {
//   let dataResult;
//   await dispatch({
//     type: 'webs/fetchListArticle',
//     payload: {
//       filter: {
//         status: 1,
//         sitesId: data?.sitesId,
//         objectListsId: data?.id,
//         languagesId: data?.languagesId,
//       },
//     },
//     callback: (res) => {
//       dataResult = res?.result || {};
//     },
//   });
//   return dataResult;
// };
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
