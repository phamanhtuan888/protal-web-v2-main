import React from 'react';
import { connect } from 'react-redux';
import page from '@/layouts/page';
import Head from '@/componentWebs/head';
import Exception from '@/componentWebs/Exception';
import dynamic from 'next/dynamic';

const RenderTemplatesCategory = dynamic(() => import('@/groupTemplate'), {
  ssr: true,
  loading: () => null,
});

@page
@connect(({ webs }) => ({
  webs,
}))
class Detail extends React.Component {
  static async getInitialProps(ctx) {
    const { store, dispatch, query } = ctx;

    let themeId;
    await dispatch({
      type: 'webs/fetchTemplates',
      payload: {
        filter: { search: query.title, status: 1 },
      },
      callback: (res) => {
        if (res.result.list && res.result.list.length > 0) themeId = res.result.list[0].id;
      },
    });
    await dispatch({
      type: 'webs/fetchThemeInfo',
      payload: { id: themeId },
    });
    const {
      webs: { dataThemeInfo: data },
    } = store.getState();

    return {
      dataThemeInfo: data,
      query,
      noHeader: true,
    };
  }

  render() {
    const { dataThemeInfo, query, dataSite } = this.props;
    if (String(dataThemeInfo?.folder) === String(query && query.title)) {
      const headTitle = `${dataSite?.sitesName} -  ${dataThemeInfo && dataThemeInfo.templatesName}` || '';
      const { title, shortDescription } = dataThemeInfo;
      const ogImage = dataThemeInfo?.images?.[0]?.file || '';
      let url = dataSite?.url;
      if (typeof window !== 'undefined') {
        url = window.location.href;
      }
      return (
        <React.Fragment>
          <Head
            title={headTitle}
            dataSite={dataSite}
            keywords={title}
            description={`${dataSite?.sitesName} - ${shortDescription || title}`}
            ogImage={ogImage}
            url={url || ''}
          />
          <RenderTemplatesCategory data={dataThemeInfo} dataSite={dataSite} isDemo />
        </React.Fragment>
      );
    }
    return <Exception style={{ clear: 'both' }} />;
  }
}

export default Detail;
