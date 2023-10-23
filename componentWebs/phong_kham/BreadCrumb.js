import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const BreadCrumb = ({ data }) => {
  if (!data) return <></>;
  const category = data?.categories || null;
  const categoriesName = category?.categoriesName || data?.categoriesName;
  const categoryUrl = category?.url || "";
  // console.log(data);
  
  return (
    // <div className='breadcrumbs-container'>
    //   <div className='container'>
    //     <img
    //       src={`${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/images/home.svg`}
    //       alt='Home'
    //       className='breadcrumbs-icon'
    //     />
    //     <p className='breadcrumbs__item'>
    //       <a href='/'>Trang chủ</a>
    //       <span className='breadcrumbs-arrow'> &gt; </span>
    //     </p>
    //     {category && (
    //       <p className='breadcrumbs__item'>
    //         <a href={`/${categoryUrl}`}>{categoriesName}</a>
    //         <span className='breadcrumbs-arrow'> &gt; </span>
    //       </p>
    //     )}
    //     <p className='breadcrumbs__item'>
    //       <a aria-disabled='true'>{category ? data?.title : categoriesName}</a>
    //     </p>
    //   </div>
    // </div>
    <div
      class="breadcrumbs"
      style={{backgroundImage:'url("https://img.nhathuocgpp.com.vn/connectcare/images/20201005/NoPath___Copy_(33)_2x.jpg?widthImage=1440")',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundBlendMode:'multiply',backgroundColor:'rgb(1, 92, 156)',height:'260px',display:'flex',alignItems:'center'}}
    >
      <div class="container">
        <div class="inner">
          <h1 class="cat-heading">{data.categoriesName}</h1>
          <div class="breadcrumb">
            <li class="home">
              <img alt="Tin tức" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC4yMDkiIGhlaWdodD0iMTMuNTA1Ij48cGF0aCBkPSJNMTMuOTcgNi4wMDFMNy42LjE5MmEuNzI1LjcyNSAwIDAwLS45ODEgMEwuMjM5IDYuMDAxQS43MjkuNzI5IDAgMDAuNzMgNy4yNjhoMS4wMTh2NS44MmEuNDE4LjQxOCAwIDAwLjQxOC40MThINS42NmEuNDE4LjQxOCAwIDAwLjQxOC0uNDE4VjkuNTU0aDIuMDUzdjMuNTM0YS40MTguNDE4IDAgMDAuNDE4LjQxOGgzLjQ5NGEuNDE4LjQxOCAwIDAwLjQxOC0uNDE4di01LjgyaDEuMDE4YS43MjkuNzI5IDAgMDAuNDkxLTEuMjY3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />

              <a href="/">
                <strong>Trang chủ</strong>
              </a>
              <i
                class="fas fa-angle-right"
                style={{color:'rgb(255, 255, 255)'}}
               
              />
            </li>
            <li>
              <strong>{category ? data?.title : categoriesName}</strong>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
