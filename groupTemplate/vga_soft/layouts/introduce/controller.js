const fetchDataCategory = async ({ data, dispatch }) => {
  let dataResult;

  await dispatch({
    type: 'webs/fetchCategoryInfoById',
    payload: {
      id: data?.id,
      languagesId: data?.languagesId,
    },
    callback: (res) => {
      dataResult = res;
    },
  });

  return dataResult;
};

export default async ({ data, dispatch }) => {
  const dataResult = await Promise.all(
    data?.children?.map(async (item) => fetchDataCategory({ data: item, dispatch })),
  );

  return { dataResult, typeApi: 'children' };
};
