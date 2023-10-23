import { getResponsiveImage } from "@/componentWebs/ImageNew";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

const Templates5 = ({ data, dataResult }) => {
  const { list } = dataResult;
  const list_view = list.slice(0, 3);
  // console.log(list_view);
 
  
  return (
    <>
      <div class="news_evens_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="new_article">
                <h2>
                  <a
                    href="https://phongkhamthaithinh.vgasoft.vn/tin-tuc-60"
                    title="Tin tức y tế mới nhất"
                  >
                    <span>{data?.objectListsName}</span>
                  </a>
                </h2>
              </div>
            </div>
            
            {list_view.map((item, index) => {
              // console.log(item);
              const resize = [80, 80, 80];
              return (
                <div class="col-md-4 col-sm-4 col-xs-6" key={index}>
                  <div class="div_new_box">
                    <a
                      class="new_box"
                      href={`/tin-tuc/${item.urlSlugs}`}
                      title={item.title}
                    >
                      <div class="box_image">
                        <img
                          class="lazyload loaded"
                          src={getResponsiveImage(item?.images[0]?.file || "", [
                            400,
                          ])}
                          style={{ maxHeight: "231px", width: "100%" }}
                          alt={item?.title}
                          data-was-processed="true"
                        />
                      </div>
                      <div class="box_header">
                        <div class="box_h_txt">
                          <div class="tg">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy4zMTgiIGhlaWdodD0iMTMuMzE4Ij48cGF0aCBkPSJNNi42NTkgMGE2LjY1OSA2LjY1OSAwIDEwNi42NTkgNi42NTlBNi42NTggNi42NTggMCAwMDYuNjU5IDB6bTAgMTIuMDI5YTUuMzcgNS4zNyAwIDExNS4zNy01LjM3IDUuMzY5IDUuMzY5IDAgMDEtNS4zNyA1LjM3em0xLjY1OS0yLjhsLTIuMjgtMS42NTdhLjMyNC4zMjQgMCAwMS0uMTMyLS4yNlYyLjlhLjMyMy4zMjMgMCAwMS4zMjItLjMyMmguODU5YS4zMjMuMzIzIDAgMDEuMzIyLjMyMnYzLjhMOS4yMDMgOGEuMzIyLjMyMiAwIDAxLjA3LjQ1MWwtLjUuN2EuMzI0LjMyNCAwIDAxLS40NTEuMDd6IiBmaWxsPSIjOTQ5NDk0Ii8+PC9zdmc+"
                              alt="12/10/2020"
                            />
                            {dayjs(item.dateUpdated).format("DD/MM/YYYY")}
                          </div>
                          <h6>{item?.title}</h6>
                        </div>
                      </div>
                      <div class="box_content">{item?.shortDescription}</div>
                    </a>
                  </div>
                </div>
              );
            })}
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="button_view_more">
                <button class="btn--view-more" type="button">
                  <a
                    style={{
                      textAlign: "left",
                      font: "normal normal 600 17px/25px Lato",
                      letterSpacing: "0px",
                      color: " #FFFFFF",
                      textTransform: "capitalize",
                      opacity: "1",
                    }}
                    href="/tin-tuc-y-te-moi-nhat"
                  >
                    Xem thêm
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Templates5;
