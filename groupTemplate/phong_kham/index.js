import dynamic from 'next/dynamic';

const template1 = dynamic(() => import('./layouts/template1'), {
  ssr: true,
  loading: () => null,
});
const template2 = dynamic(() => import('./layouts/template2'), {
  ssr: true,
  loading: () => null,
});
const template3 = dynamic(() => import('./layouts/template3'), {
  ssr: true,
  loading: () => null,
});
const template4 = dynamic(() => import('./layouts/template4'), {
  ssr: true,
  loading: () => null,
});
const template5 = dynamic(() => import('./layouts/template5'), {
  ssr: true,
  loading: () => null,
});
const template6 = dynamic(() => import('./layouts/template6'), {
  ssr: true,
  loading: () => null,
});
const template7 = dynamic(() => import('./layouts/template7'), {
  ssr: true,
  loading: () => null,
});





const introduce = dynamic(() => import('./layouts/introduce'), {
  ssr: true,
  loading: () => null,
});

const contact = dynamic(() => import('./layouts/contact'), {
  ssr: true,
  loading: () => null,
});
const theme = dynamic(() => import('./layouts/theme'), {
  ssr: true,
  loading: () => null,
});
const news = dynamic(() => import('./layouts/news'), {
  ssr: true,
  loading: () => null,
});
const instruct = dynamic(() => import('./layouts/instruct'), {
  ssr: true,
  loading: () => null,
});
const specialist = dynamic(() => import('./layouts/specialist'), {
  ssr: true,
  loading: () => null,
});

const detail = dynamic(() => import('./layouts/detail'), {
  ssr: true,
  loading: () => null,
});
const themeDetail = dynamic(() => import('./layouts/themeDetail'), {
  ssr: true,
  loading: () => null,
});
const demo = dynamic(() => import('./layouts/demo'), {
  ssr: true,
  loading: () => null,
});

const folder = 'phong_kham';
export default {
  // home
  [`${folder}_template1`]: template1,
  [`${folder}_template2`]: template2,
  [`${folder}_template3`]: template3,
  [`${folder}_template4`]: template4,
  [`${folder}_template5`]: template5,
  [`${folder}_template6`]: template6,
  [`${folder}_template7`]: template7,
  

  // templates
 
  [`${folder}_contact`]: contact,
  [`${folder}_theme`]: theme,
  [`${folder}_news`]: news,
  [`${folder}_specialist`]: specialist,
  [`${folder}_instruct`]: instruct,
  [`${folder}_introduce`]: introduce,
  [`${folder}_detail`]: detail,
  [`${folder}_isTheme`]: themeDetail,
  [`${folder}_isDemo`]: demo,
};
