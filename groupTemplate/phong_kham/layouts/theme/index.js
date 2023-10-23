import { useState } from "react";
import { getResponsiveImage } from "@/componentWebs/ImageNew";
import ReactPaginate from "react-paginate";

const MauGiaoDien = ({ dataResult, query }) => {
  const { products, templateGroups, article } = dataResult;
  // console.log(products, templateGroups);
  const { name: url, page = 1, group: templateGroupId, price } = query;
  const [mobile, setMobile] = useState(false);

  return (
    <div className="page-container">
      <div className="banner" id="banner-theme">
        <div className="container-fluid">
          <div className="banner-title ">
            <h1 className="title-content ">{article?.title || ""}</h1>
          </div>
          <div className="banner-detail ">
            <p className="detail-content">{article?.shortDescription || ""}</p>
          </div>
          <div className="banner-button ">
            <a href="#list-theme">
              <div className="btn button-view">Đăng kí dùng thử miễn phí</div>
            </a>
          </div>
          <div className="banner-image">
            <img
              className="img-fluid"
              alt="400+ giao diện, template website bán hàng cực đẹp"
              src={getResponsiveImage(article?.images[0]?.file || "", [
                600,
                900,
                1600,
              ])}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <section className="product-main" id="list-theme">
        <div className="product-menu-filter-mobile">
          <div
            className="filter-dropdown"
            onClick={() => setMobile((prev) => !prev)}
          >
            <span>Bộ lọc giao diện</span>
          </div>
          <div className={`mobile-filter ${mobile ? "showFilter" : ""}`}>
            <MenuFilter
              url={url}
              tempGroup={templateGroupId}
              templateGroups={templateGroups}
              price={price}
            />
            <MenuFilterSearch url={url} />
          </div>
        </div>
        <div className="product-menu-filter">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="menu-filter">
                  <MenuFilter
                    url={url}
                    templateGroupId={templateGroupId}
                    templateGroups={templateGroups}
                    price={price}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4" id="filter-desktop">
                <MenuFilterSearch url={url} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-list">
          <div className="container">
            <div className="row">
              {products && products.list && products.list.length > 0 ? (
                products.list?.map((prod) => (
                  <div
                    className="col-lg-3 col-sm-6 col-md-4 col-6"
                    title={prod.templatesName}
                  >
                    <div className="product-item">
                      <a href={`/mau-giao-dien-562/${prod.folder}`}>
                        <div className="product-image">
                          <img
                            className="img-fluid"
                            alt={prod.folder}
                            src={getResponsiveImage(prod.image.file || "", [
                              260,
                              260,
                              260,
                            ])}
                          />
                        </div>
                      </a>
                      <div className="product-price">
                        <a href={`/mau-giao-dien-562/${prod.folder}`}>
                          {prod.templatesName}
                        </a>
                        <span>
                          {`${(prod.price - 0).toLocaleString("vi")} đ`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="text_h3" style={{ padding: "20px" }}>
                  Không có giao diện nào phù hợp với từ khóa!
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="product-view-more" />
        <div className="clearfix" />
        <div className="text-xs-right">
          <nav className="text-center">
            {products &&
              products.pagination &&
              products.pagination.total > products.pagination.pageSize && (
                <ReactPaginate
                  forcePage={page - 1}
                  breakLabel="..."
                  nextLabel="»"
                  previousLabel="«"
                  pageRangeDisplayed={2}
                  pageCount={
                    Math.ceil(
                      products?.pagination.total / products?.pagination.pageSize
                    ) || 1
                  }
                  pageLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  previousLinkClassName="page-link"
                  pageClassName="page-item"
                  nextClassName="page-item"
                  prevClassName="page-item"
                  activeClassName="page-item active disabled"
                  disabledClassName="page-item disabled"
                  containerClassName="pagination clearfix"
                  onPageChange={(e) => {
                    const { href } = window.location;
                    const currentPage = e.selected + 1;
                    const regexPage = /page=[1-9]{1,3}/g;
                    const havingPage = href.match(regexPage);
                    if (havingPage)
                      window.location = href.replace(
                        regexPage,
                        `page=${currentPage}`
                      );
                    else if (href.match(/\?/g))
                      window.location += `&page=${currentPage}`;
                    else window.location += `?page=${currentPage}`;
                  }}
                />
              )}
          </nav>
        </div>
      </section>
    </div>
  );
};

export default MauGiaoDien;

//

// menu filter

function MenuFilter({ url, templateGroupId, templateGroups, price }) {
  return (
    <>
      <ul className="menu-filter-list">
        <li className={`menu-filter-item ${!templateGroupId ? "active" : ""}`}>
          <a href={`/${url}`} className="menu-filter-link">
            Tất cả
          </a>
        </li>
        <li className={`menu-filter-item ${price - 0 === 0 ? "active" : ""}`}>
          <a className="menu-filter-link" href={`/${url}?price=0`}>
            Miễn phí
          </a>
        </li>
        {templateGroups &&
          !!templateGroups.length &&
          templateGroups.map((group) => (
            <li
              className={`menu-filter-item ${group.children.find((temp) => temp.id === templateGroupId) ||
                group.id === templateGroupId
                ? "active"
                : ""
                }`}
              id={group.id}
              key={group.id}
            >
              <a
                className="menu-filter-link"
                href={`/${url}?group=${group.id}`}
              >
                {group.templateGroupsName}
                {group?.children && !!group.children.length && (
                  <ul className="menu__item--child">
                    {group.children.map((childGroup) => (
                      <li className="menu__child--item" key={childGroup.id}>
                        <a
                          className="menu__item--link"
                          href={`/${url}?group=${childGroup.id}`}
                        >
                          {childGroup.templateGroupsName}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

function MenuFilterSearch({ url }) {
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    if (!/[a-zA-Z1-9 ]+/g.test(search.trim())) return;

    const { href } = window.location;
    const regexPage = /q=[a-zA-Z0-9-_% ]+/g;
    const havingPage = href.match(regexPage);
    if (havingPage) window.location = href.replace(regexPage, `q=${search}`);
    else window.location = `/${url}?q=${search}`;
  };
  return (
    <div className="menu-filter-search">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên giao diện"
        className="ant-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitSearch();
        }}
      />
      <span className="search" onClick={submitSearch}>
        <img
          src="/static/vga_soft/images/search.svg"
          alt=""
          className="img-fluid"
        />
      </span>
    </div>
  );
}
