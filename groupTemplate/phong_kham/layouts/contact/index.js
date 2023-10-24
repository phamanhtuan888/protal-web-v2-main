import dayjs from "dayjs";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const LienHe = ({ data, dataResult, query, dataSite }) => {
  const handlePageChange = (e) => {
    window.location = `/${query.name}?page=${e.selected + 1}`;
  };

  const {
    list: [topResult, ...list],
    pagination,
  } = dataResult;
  const imageResize = [380, 450, 540];
  
  const { siteProfiles } = dataSite;
  // console.log(data);
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="title_contact">
            <h2>Bạn Muốn Tìm Giải Pháp Tối Ưu Nhất Hãy Để VGA Clinic Giúp Bạn</h2>
            <p>
            {data.description}
            </p>
          </div>
          <ul class="margin-bottom-15">
            <li>
              <div class="shadow">
                <img
                  alt="Liên hệ "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy43MzgiIGhlaWdodD0iMjQuNTE0Ij48cGF0aCBkPSJNOS40OTIgMGMuNTE3LjA5MSAxLjA0LjE1MiAxLjU0OC4yNzdhOC44OSA4Ljg5IDAgMDE2LjY0OCA3LjU5IDEwLjIgMTAuMiAwIDAxLS43MSA0LjcyOSAzMS4xMSAzMS4xMSAwIDAxLTMuNzM2IDYuODE2IDUyLjUxOCA1Mi41MTggMCAwMS0zLjY5MSA0LjczMS44MDcuODA3IDAgMDEtMS4zNiAwIDQ3LjU3MiA0Ny41NzIgMCAwMS02LjIzNi04Ljg4OCAxOC4wMzUgMTguMDM1IDAgMDEtMS43NzEtNC42M0E4Ljg1IDguODUgMCAwMTguMDg0LjAzOS45MTYuOTE2IDAgMDA4LjI0MyAwem0zLjgzOSA4Ljg3NWE0LjQ2MSA0LjQ2MSAwIDEwLTQuNDczIDQuNDcgNC40NjcgNC40NjcgMCAwMDQuNDczLTQuNDY4eiIgZmlsbD0iIzExODVjNCIvPjwvc3ZnPg=="
                />
              </div>
              <div class="address">
                <h3>
                  Office Address: <p>{siteProfiles[0].offices[0].address}</p>
                </h3>
              </div>
            </li>
            <li>
              <div class="shadow">
                <img
                  alt="Liên hệ "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS4zOTMiIGhlaWdodD0iMjEuMzQ1Ij48cGF0aCBkPSJNMCA0Ljc0NGMuMDUzLS4zNTUuMDk0LS43MTMuMTY1LTEuMDY2YTQuNjUzIDQuNjUzIDAgMDEuODc2LTEuOTg3QTEwLjE0NSAxMC4xNDUgMCAwMTIuMjI3LjQxNmExLjY2OCAxLjY2OCAwIDAxMi4yOTIuMDgzUTYuMTYgMi4xMjEgNy43ODIgMy43NjJhMS43IDEuNyAwIDAxLS4wMTQgMi40NTNjLS40ODguNTA2LS45OTEgMS0xLjQ5IDEuNDkyYTEuNTc2IDEuNTc2IDAgMDEtLjE2OS4xMzUgMTUuNjM0IDE1LjYzNCAwIDAwNy40MzUgNy40MzZsMS41ODctMS42YTEuOCAxLjggMCAwMS45NDktLjUzMyAxLjY0OSAxLjY0OSAwIDAxMS41NjYuNDhxMS4yNTYgMS4yNTMgMi41MSAyLjUwOWMuMjQ3LjI0Ny41LjQ4OS43MzguNzRhMS42OTMgMS42OTMgMCAwMS4wODMgMi4zMTMgNS44IDUuOCAwIDAxLTMuNCAyLjA4MSA2LjM2MyA2LjM2MyAwIDAxLTIuMzg0LS4wODMgMTUuNjY4IDE1LjY2OCAwIDAxLTUuODkyLTIuNTk0IDI4LjIxOSAyOC4yMTkgMCAwMS00LjgzMi00LjMxNiAyMy4xIDIzLjEgMCAwMS0yLjk1LTMuODU1QTEwLjU3MSAxMC41NzEgMCAwMS4xMDEgNi42NThjLS4wMzktLjI0Ni0uMDctLjQ5My0uMS0uNzR6IiBmaWxsPSIjMTE4NWM0Ii8+PC9zdmc+"
                />
              </div>
              <div class="address">
                <h3>
                  Phone: <p>{siteProfiles[0].hotline}</p>
                </h3>
              </div>
            </li>
            <li>
              <div class="shadow">
                <img
                  alt="Liên hệ "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi4xNjMiIGhlaWdodD0iMTUuMjM2Ij48cGF0aCBkPSJNMTQuNjkxIDcuNzMxbDcuNDcyIDQuNzIzdi05LjY0ek0wIDIuODE0djkuNjM3bDcuNDcyLTQuNzIzek0yMC43ODEgMGgtMTkuNGExLjM2OCAxLjM2OCAwIDAwLTEuMzQgMS4xNzhsMTEuMDQgNy4yNzQgMTEuMDQtNy4yNzRBMS4zNjggMS4zNjggMCAwMDIwLjc4MSAwek0xMy40MiA4LjU2OWwtMS45NTkgMS4yODVhLjcuNyAwIDAxLS43NjIgMEw4Ljc0IDguNTY4bC04LjcgNS41YTEuMzY2IDEuMzY2IDAgMDAxLjM0MSAxLjE2OWgxOS4zOTZhMS4zNjYgMS4zNjYgMCAwMDEuMzQxLTEuMTY5eiIgZmlsbD0iIzExODVjNCIvPjwvc3ZnPg=="
                />
              </div>
              <div class="address">
                <h3>
                  Office Address: <p>{siteProfiles[0].offices[0].email}</p>
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="footer_google-map">
            <iframe
              title="Liên hệ "
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDO6xwXdudsBWYD1asUmmLtT9Sj9XdXufA&amp;q=place_id:ChIJ09o9p16rNTER9VPVekNDfIA"
              allowfullscreen=""
              width="584"
              height="561"
              style={{
                border: "0px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 6px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
