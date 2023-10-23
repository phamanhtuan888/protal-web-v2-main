import dayjs from "dayjs";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const LienHe = ({ data, dataResult, query, dataSite }) => {
  const { list } = dataResult;
  // console.log(list);
  return (
      <div class="bg-home">
        <div class="layout-contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="contact">
                  <div class="logo-contact">
                    <img
                      style={{ height: "142px", width: "232px" }}
                      src={getResponsiveImage(list[1]?.images[0]?.file || "", [
                        600,
                        900,
                        1600,
                      ])}
                      alt="Lofi Nest"
                      class="img-fluid"
                    />
                  </div>
                  <div class="contact-title">{list[1]?.title}</div>
                  <div class="contact-desc">{list[1]?.shortDescription}</div>
                  <div class="time_work">
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        class="svg-inline--fa fa-map-marker-alt fa-w-12"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                          class=""
                        />
                      </svg>
                      <b>Địa chỉ:</b>
                      {dataSite?.siteProfiles[0].offices[0].address}
                    </div>
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-envelope fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                          class=""
                        />
                      </svg>
                      <b>Email:</b>{" "}
                      <a>{dataSite?.siteProfiles[0].offices[0].email}</a>
                    </div>
                    <div class="item">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="svg-inline--fa fa-phone-alt fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                          class=""
                        />
                      </svg>
                      <b>Hotline:</b>{" "}
                      <a class="fone">{dataSite?.siteProfiles[0].hotline}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-contact">
                  <div class="form-title">{list[0]?.title}</div>
                  <div class="form-desc">{list[0]?.shortDescription}</div>
                  <div id="pagelogin">
                    <form
                      method="post"
                      action="/postcontact"
                      id="contact"
                      accept-charset="UTF-8"
                    >
                      <input name="FormType" type="hidden" value="contact" />
                      <input name="utf8" type="hidden" value="true" />
                      <input
                        type="hidden"
                        id="Token-79dd054ecdb742db90b037e7e4cc2040"
                        name="Token"
                        value=""
                      />
                      <div class="group_contact">
                        <input
                          placeholder="Họ và tên"
                          type="text"
                          class="form-control  form-control-lg"
                          required=""
                          value=""
                          name="contact[Name]"
                        />
                        <input
                          placeholder="Email"
                          type="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          required=""
                          id="email1"
                          class="form-control form-control-lg"
                        />
                        <input
                          type="number"
                          placeholder="Điện thoại*"
                          class="form-control form-control-lg"
                        />
                        <textarea
                          placeholder="Nội dung"
                          id="comment"
                          class="form-control content-area form-control-lg"
                          rows="5"
                          required=""
                        />
                        <button type="submit" class="btn-lienhe">
                          Gửi thông tin
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default LienHe;
