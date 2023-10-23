/* eslint-disable camelcase */
// import dynamic from 'next/dynamic';
import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';

const lofi_nest = dynamic(() => import('./layoutData/lofi_nest'), {
  ssr: true,
  loading: () => null,
});
const phong_kham = dynamic(() => import('./layoutData/phong_kham'), {
  ssr: true,
  loading: () => null,
});

const DATA_TEMPLATES = {
  lofi_nest,phong_kham
};

const PageNotFound = dynamic(() => import('@/componentWebs/NoFindPage'), {
  ssr: true,
  loading: () => null,
});

class Control extends PureComponent {
  render() {
    const { dataSite } = this.props;
    // console.log(dataSite);
    // console.log(DATA_TEMPLATES);
    try {
      const Templates = DATA_TEMPLATES[`${dataSite.templates.folder}`];
      // console.log(Templates);
      if (Templates) {
        return React.createElement(Templates, {
          ...this.props,
        });
      
      }
      return <PageNotFound />;
    } catch (error) {
      return <PageNotFound />;
    }
  }
}

export default Control;
