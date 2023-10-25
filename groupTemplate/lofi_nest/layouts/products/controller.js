// export default async ({ data, dispatch, query }) => {
//   const page = query.page - 1 || 0;
//   const len = 13;

//   let dataResult;

//   await dispatch({
//     type: "webs/fetchListProduct",
//     payload: {
//       filter: {
//         status: 1,
//         categoriesId: data?.id,
//         sitesId: data?.sitesId,
//         languagesId: data?.languagesId,
//       },
//       // filter: {
//       //   status: "1",
//       //   objectListsId: data?.id,
//       //   sitesId: data?.sitesId,
//       // },
//       range: [page * len, (page + 1) * len - 1],
//     },
//     callback: (res) => {
//       dataResult = res.result;
//     },
//   });

//   return dataResult;
// };
// export default async ({ data, dispatch }) => {
//   let dataResult;
//   const query = {
//     filter: {
//       status: '1',
//       objectListsId: data?.id,
//       sitesId: data?.sitesId,
//     },
//   };
//   await dispatch({
//     type: 'webs/fetchListProduct',
//     payload: query,
//     callback: (res) => {
//       dataResult = res?.result || {};
//     },
//   });
//   return dataResult;
// };
export default async ({ data, dispatch,query }) => {
  const page = query.page - 1 || 0;
  const len = 12;

  let dataResult;

  await dispatch({
    type: "webs/fetchListProduct",
    payload: {
      filter: {
        status: 1,
        categoriesId: data?.id,
        sitesId: data?.sitesId,
        languagesId: data?.languagesId,
      },
      range: [page * len, (page + 1) * len - 1],
      // sort:["dateCreated", "DESC"],
    },
    callback: (res) => {
      dataResult = res.result;
    },
  });

  return dataResult;
};




