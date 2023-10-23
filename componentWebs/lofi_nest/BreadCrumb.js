import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const BreadCrumb = ({ data }) => {
  const categoriesId = data?.id;
  // console.log(data);

  return (
    <div>
      {categoriesId !== undefined ? (
        <section
          class="bread-crumb"
          style={{
            background:
              "url(//bizweb.dktcdn.net/100/488/726/themes/911609/assets/breadcrumb-bg.jpg?1694161164612) center no-repeat",
          }}
        >
          <div class="container">
            <div class="title-breadcrumb">
              {data?.categoriesName || data?.title}
            </div>
            <ul class="breadcrumb">
              <li class="home">
                <a href="/">
                  <span>Trang chủ</span>
                </a>
                <span class="mr_lr">
                  &nbsp;
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    class="svg-inline--fa fa-chevron-right fa-w-10"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                      class=""
                    />
                  </svg>
                  &nbsp;
                </span>
              </li>

              <li>
                <strong>
                  <span>{data?.categoriesName || data?.title}</span>
                </strong>
              </li>
            </ul>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default BreadCrumb;
