/* eslint-disable react/no-array-index-key */
import { getResponsiveImage } from "@/componentWebs/ImageNew";

const Templates2 = ({ data, dataResult }) => (
  <div class="section_3" style={{ marginTop: "40px" }}>
    <div class="container-fuild">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12" style={{ padding: "0px"}}>
          <div class="about_image">
            {dataResult?.list &&
              dataResult?.list?.map((item, index) => {
                const resize = [80, 80, 80];
                // console.log(data);
                return (
                  <div
                    class="col-md-6 col-sm-6 col-xs-6"
                    style={{ width: 'max-content',maxWidth:'50%'}}
                  >
                    <img
                    // style={{ width: "50%", maxWidth: "100%" }}
                      alt={item?.title}
                      src={getResponsiveImage(
                        item?.images[0]?.file || "",
                        [400]
                      )}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12" style={{ padding: "0px" }}>
          <div
            class="about_content"
            style={{
              backgroundImage:
                "url(https://img.nhathuocgpp.com.vn/connectcare/images/20201006/NoPath___Copy_(57)_2x.png?widthImage=1440)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div class="about_descriptions" style={{paddingLeft:'10px'}}>
              <h2>{data?.objectListsName}</h2>
              <h5>{data?.shortDescription}</h5>
              <ul>
                {dataResult?.list &&
                  dataResult?.list?.map((item, index) => {
                    const resize = [80, 80, 80];
                    // console.log(item);
                    return (
                      <li>
                        <img
                          alt="Giới thiệu "
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS43NTIiIGhlaWdodD0iNi40NjgiPjxwYXRoIGQ9Ik0xMS45MzcuNDMzbC4zMjktLjMyOWEuMzU0LjM1NCAwIDAxLjUgMGwyLjg4MSAyLjg3OGEuMzU0LjM1NCAwIDAxMCAuNWwtMi44NzkgMi44ODZhLjM1NC4zNTQgMCAwMS0uNSAwbC0uMzI5LS4zMjlhLjM1Ni4zNTYgMCAwMS4wMDYtLjUwOGwxLjc4NS0xLjdILjM1NUEuMzU1LjM1NSAwIDAxMCAzLjQ2OHYtLjQ3YS4zNTUuMzU1IDAgMDEuMzU1LS4zNTVoMTMuMzczbC0xLjc4NS0xLjdhLjM1My4zNTMgMCAwMS0uMDA2LS41MDh6IiBmaWxsPSIjMDE1YzljIi8+PC9zdmc+"
                        />
                        <h6>
                        {item?.title}
                        </h6>
                      </li>
                    );
                  })}
              </ul>
              <a>
                Tất cả dịch vụ
                <img
                  alt="Giới thiệu "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS43NTIiIGhlaWdodD0iNi40NjgiPjxwYXRoIGQ9Ik0xMS45MzcuNDMzbC4zMjktLjMyOWEuMzU0LjM1NCAwIDAxLjUgMGwyLjg4MSAyLjg3OGEuMzU0LjM1NCAwIDAxMCAuNWwtMi44NzkgMi44ODZhLjM1NC4zNTQgMCAwMS0uNSAwbC0uMzI5LS4zMjlhLjM1Ni4zNTYgMCAwMS4wMDYtLjUwOGwxLjc4NS0xLjdILjM1NUEuMzU1LjM1NSAwIDAxMCAzLjQ2OHYtLjQ3YS4zNTUuMzU1IDAgMDEuMzU1LS4zNTVoMTMuMzczbC0xLjc4NS0xLjdhLjM1My4zNTMgMCAwMS0uMDA2LS41MDh6IiBmaWxsPSIjMDE1YzljIi8+PC9zdmc+"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Templates2;
