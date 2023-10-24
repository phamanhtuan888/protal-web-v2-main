import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const BreadCrumb = ({ data }) => {
  if (!data) return <></>;
  const category = data?.categories || null;
  const categoriesName = category?.categoriesName || data?.categoriesName;
  const categoryUrl = category?.url || '';
  return (
    <div className='breadcrumbs-container'>
      <div className='container'>
        <img
          src={`${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/images/home.svg`}
          alt='Home'
          className='breadcrumbs-icon'
        />
        <p className='breadcrumbs__item'>
          <a href='/'>Trang chủ</a>
          <span className='breadcrumbs-arrow'> &gt; </span>
        </p>
        {category && (
          <p className='breadcrumbs__item'>
            <a href={`/${categoryUrl}`}>{categoriesName}</a>
            <span className='breadcrumbs-arrow'> &gt; </span>
          </p>
        )}
        <p className='breadcrumbs__item'>
          <a aria-disabled='true'>{category ? data?.title : categoriesName}</a>
        </p>
      </div>
    </div>
  );
};

export default BreadCrumb;
