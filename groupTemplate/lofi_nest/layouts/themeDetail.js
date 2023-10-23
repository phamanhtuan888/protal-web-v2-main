/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/label-has-for */
import { useState } from 'react';
import { getResponsiveImage } from '@/componentWebs/ImageNew';
import RegisterForm from '@/componentWebs/RegisterForm';

const ThemeDetail = ({ data, asPath }) => {
  const { dataThemeInfo: theme, popularTemplates } = data;
  const [, category] = asPath.split('/');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   const url = window.location.href.replace(/group=([0-9]+[^a-zA-Z])/g, `group=${data?.folder}`);
  //   window.history.pushState('', '', url);
  // }, []);

  const [search, setSearch] = useState('');
  const submitSearch = () => {
    if (!/[a-zA-Z1-9 ]+/g.test(search.trim())) return;

    const { href } = window.location;
    const regexPage = /q=[a-zA-Z0-9-_% ]+/g;
    const havingPage = href.match(regexPage);
    if (havingPage) window.location = href.replace(regexPage, `q=${search}`);
    else window.location = `/mau-giao-dien-562?q=${search}`;
  };

  return (
    <>
      <section className="template">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 ">
              <p className="template-detail">Template, Giao diện mẫu</p>
              <h3 className="template-title">{theme.templatesName}</h3>
              <p className="template-sort-description">{theme.shortDescription}</p>
              <div className="template-price">{(theme.price - 0).toLocaleString('vi')}Đ</div>
              <div className="template-group-btn">
                <div className="btn btn-top" onClick={handleOpen}>
                  Đăng ký dùng thử
                </div>
                <a href={`/demo/${theme.folder}`} className="btn btn-bottom" target='_blank' rel="noopener noreferrer">
                  Xem trước giao diện
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="template-image">
                <div className="img-fluid-div">
                  <img
                    className="img-fluid-image"
                    alt={theme.templatesName}
                    src={getResponsiveImage(theme.image?.file || '', [360, 450, 540])}
                  />
                </div>
                <img src="/static/vga_soft/images/laptop.png" alt="laptop" className="img-fluid-laptop" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="template-sub-detail">
        <div className="product-menu-filter">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="menu-filter">
                  <ul className="menu-filter-list">
                    <li className="menu-filter-item">
                      <a href="/mau-giao-dien" className="menu-filter-link">
                        Tất cả
                      </a>
                    </li>
                    <li className="menu-filter-item">
                      <a href="/mau-giao-dien#list-theme" className="menu-filter-link">
                        Web bán hàng
                      </a>
                    </li>
                    <li className="menu-filter-item">
                      <a href="/mau-giao-dien#list-theme" className="menu-filter-link">
                        Website Công ty
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4" id="filter-desktop">
                <div className="menu-filter-search">
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên giao diện"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') submitSearch();
                    }}
                  />
                  <span className="search">
                    <img src="/static/vga_soft/images/search.svg" alt="search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="template-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <h2 className="template-main-left">Tính năng nổi bật</h2>
                <div dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
              <div
                className="col-lg-4 col-12"
                style={{
                  marginBottom: '30px',
                  background: 'rgb(242,247,255',
                  boxShadow: 'rgba(0,0,0,.16) 0 0 5px',
                  borderRadius: '10px',
                }}
              >
                <h3 className="template-artice-title">Các giao diện bán chạy</h3>
                <div className="row" style={{ height: 'auto' }}>
                  {popularTemplates &&
                    popularTemplates.length > 0 &&
                    popularTemplates.map((template) => (
                      <div className="col-12 product-list" style={{ background: 'unset', padding: '10px 0' }}>
                        <div className="product-item">
                          <a href={`/${category}/${template.folder}`}>
                            <div className="product-image">
                              <img
                                className="img-fluid"
                                alt={template.folder}
                                src={getResponsiveImage(template.image?.file || '', [360, 450, 540])}
                              />
                            </div>
                          </a>
                          <div className="product-price">
                            <a href={`/${category}/${template.folder}`}>{template.templatesName}</a>
                            <span>{(template.price - 0).toLocaleString('vi')}đ</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RegisterForm
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        templatesName={theme.templatesName || 'Theme chưa có tên'}
      />
    </>
  );
};

export default ThemeDetail;