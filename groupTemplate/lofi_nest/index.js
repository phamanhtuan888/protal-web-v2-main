import dynamic from "next/dynamic";

const template1 = dynamic(() => import("./layouts/template1"), {
  ssr: true,
  loading: () => null,
});
const template2 = dynamic(() => import("./layouts/template2"), {
  ssr: true,
  loading: () => null,
});
const template3 = dynamic(() => import("./layouts/template3"), {
  ssr: true,
  loading: () => null,
});
const template4 = dynamic(() => import("./layouts/template4"), {
  ssr: true,
  loading: () => null,
});
const template5 = dynamic(() => import("./layouts/template5"), {
  ssr: true,
  loading: () => null,
});
const template6 = dynamic(() => import("./layouts/template6"), {
  ssr: true,
  loading: () => null,
});
const template7 = dynamic(() => import("./layouts/template7"), {
  ssr: true,
  loading: () => null,
});
const template8 = dynamic(() => import("./layouts/template8"), {
  ssr: true,
  loading: () => null,
});



const introduce = dynamic(() => import("./layouts/introduce"), {
  ssr: true,
  loading: () => null,
});
const introduceChild = dynamic(() => import("./layouts/introduceChild"), {
  ssr: true,
  loading: () => null,
});

const contact = dynamic(() => import("./layouts/contact"), {
  ssr: true,
  loading: () => null,
});
const theme = dynamic(() => import("./layouts/theme"), {
  ssr: true,
  loading: () => null,
});
const news = dynamic(() => import("./layouts/news"), {
  ssr: true,
  loading: () => null,
});

const products = dynamic(() => import("./layouts/products"), {
  ssr: true,
  loading: () => null,
});
const policy = dynamic(() => import("./layouts/policy"), {
  ssr: true,
  loading: () => null,
});
const handBook = dynamic(() => import("./layouts/handBook"), {
  ssr: true,
  loading: () => null,
});

const detail = dynamic(() => import("./layouts/detail"), {
  ssr: true,
  loading: () => null,
});
const product = dynamic(() => import("./layouts/product"), {
  ssr: true,
  loading: () => null,
});
const DetailView = dynamic(() => import("./layouts/DetailView"), {
  ssr: true,
  loading: () => null,
});

const themeDetail = dynamic(() => import("./layouts/themeDetail"), {
  ssr: true,
  loading: () => null,
});
const demo = dynamic(() => import("./layouts/demo"), {
  ssr: true,
  loading: () => null,
});

const folder = "lofi_nest";
export default {
  // home
  [`${folder}_template1`]: template1,
  [`${folder}_template2`]: template2,
  [`${folder}_template3`]: template3,
  [`${folder}_template4`]: template4,
  [`${folder}_template5`]: template5,
  [`${folder}_template6`]: template6,
  [`${folder}_template7`]: template7,
  [`${folder}_template8`]: template8,

  // templates

  [`${folder}_policy`]: policy,
  [`${folder}_handBook`]: handBook,
  [`${folder}_contact`]: contact,
  [`${folder}_theme`]: theme,
  [`${folder}_news`]: news,
  [`${folder}_introduce`]: introduce,
  [`${folder}_introduceChild`]: introduceChild,
  [`${folder}_detail`]: detail,
  [`${folder}_product`]: product,
  [`${folder}_DetailView`]: DetailView,
  [`${folder}_isTheme`]: themeDetail,
  [`${folder}_isDemo`]: demo,
  [`${folder}_products`]: products,

};
