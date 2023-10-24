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

//

const aboutus = dynamic(() => import('./layouts/aboutus'), {
  ssr: true,
  loading: () => null,
});
const solutions = dynamic(() => import('./layouts/solutions'), {
  ssr: true,
  loading: () => null,
});
const specificSolution = dynamic(() => import('./layouts/specificSolution'), {
  ssr: true,
  loading: () => null,
});
const introduce = dynamic(() => import('./layouts/introduce'), {
  ssr: true,
  loading: () => null,
});
const introduceAboutUs = dynamic(() => import('./layouts/introduceAboutUs'), {
  ssr: true,
  loading: () => null,
});
const introduceVisions = dynamic(() => import('./layouts/introduceVisions'), {
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

const folder = 'vgasoft';
export default {
  // home
  [`${folder}_template1`]: template1,
  [`${folder}_template2`]: template2,
  [`${folder}_template3`]: template3,
  [`${folder}_template4`]: template4,
  [`${folder}_template5`]: template5,

  // templates
  [`${folder}_aboutus`]: aboutus,
  [`${folder}_solutions`]: solutions,
  [`${folder}_specificSolution`]: specificSolution,
  [`${folder}_contact`]: contact,
  [`${folder}_theme`]: theme,
  [`${folder}_news`]: news,
  [`${folder}_introduce`]: introduce,
  [`${folder}_introduceAboutUs`]: introduceAboutUs,
  [`${folder}_introduceVisions`]: introduceVisions,
  [`${folder}_detail`]: detail,
  [`${folder}_isTheme`]: themeDetail,
  [`${folder}_isDemo`]: demo,
};
