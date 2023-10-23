import getConfig from "next/config";
import React, { useState, useEffect, useRef } from "react";
const { publicRuntimeConfig } = getConfig();

function Footer(props) {
  const { menuFooter,menuHeader, dataSite } = props;

  // console.log(menuFooter);
  // console.log(menuHeader);
  // console.log(dataSite);

  
  const [hiddenMobile1, setHiddenMobile1] = useState(true);
  const [hiddenMobile2, setHiddenMobile2] = useState(true);
  const [hiddenMobile3, setHiddenMobile3] = useState(true);

  const toggleHidden = (divNumber) => {
    if (divNumber === 1) {
      setHiddenMobile1(!hiddenMobile1);
    } else if (divNumber === 2) {
      setHiddenMobile2(!hiddenMobile2);
    }else if (divNumber === 3) {
      setHiddenMobile3(!hiddenMobile3);
    }
  };
 
  // console.log(menuHeader);
  return (
    <div>
      <div class="bg-footer">
        <img
          src="//bizweb.dktcdn.net/100/488/726/themes/911609/assets/footer-bg.png?1694161164612"
          class="img-responsion"
          alt="Lofi Nest"
        />
      </div>
      <footer class="footer">
        <div class="mid-footer">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-12 col-left">
                <div class="link-list col-footer">
                  <h4 class="title-menu">Thông tin công ty</h4>
                  <div class="desc">{dataSite.seoDescriptions}</div>
                </div>
              </div>

              <div className={`col-xl-2 col-lg-2 col-md-6 col-12 link-list col-footer`} key={1}>
                <h4 className="title-menu " >
                  VỀ CHÚNG TÔI
                  <span className='Collapsible__Plus' onClick={() => toggleHidden(1)}></span>
                </h4>
                <div className={`list-menu ${hiddenMobile1 ? 'hidden-mobile' : ''}`}>
                  {menuHeader.map((item, itemIndex) => (
                      <a key={itemIndex} title={item.menusName} href={item.url}>
                        {item.menusName}
                      </a>
                    ))}
                </div>
              </div>

              <div className={`col-xl-2 col-lg-2 col-md-6 col-12 link-list col-footer`} key={2}>
                <h4 class="title-menu">
                  CHÍNH SÁCH
                  <span className='Collapsible__Plus' onClick={() => toggleHidden(2)}></span>
                </h4>
                <div className={`list-menu ${hiddenMobile2 ? 'hidden-mobile' : ''}`}>
                  {menuFooter.map((menuItem) => (
                      <a title={menuItem.menusName} href={menuItem.url}>{menuItem.menusName}</a>
                    ))}
                </div>
              </div>
              
              <div class="col-xl-4 col-lg-4 col-md-6 col-12 link-list col-footer" key={3}>
                <h4 class="title-menu">
                  Thông tin liên hệ
                  <span className='Collapsible__Plus' onClick={() => toggleHidden(3)}></span>
                </h4>
                <div className={`list-menu ${hiddenMobile3 ? 'hidden-mobile' : ''}`}>
                  <div class="item">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.58867 13.1879C2.56119 12.5189 2.44466 9.69477 4.41012 8.86094L17.7759 3.19061C19.691 2.37814 21.6219 4.30899 20.8094 6.22409L15.1391 19.5899C14.3052 21.5553 11.4811 21.4388 10.8121 19.4113L9.26792 14.7321L4.58867 13.1879Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <a>{dataSite?.siteProfiles[0].offices[0].address}</a>
                  </div>
                  <div class="item">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.42459 3.23775C7.51203 2.76707 8.77662 3.00825 9.61449 3.84612L9.9591 4.19073C11.0636 5.29519 11.3313 6.98519 10.6223 8.37694L9.97022 9.65693C9.58386 10.4153 9.72975 11.3363 10.3316 11.9381L12.0619 13.6684C12.6637 14.2702 13.5847 14.4161 14.3431 14.0298L15.6231 13.3777C17.0148 12.6687 18.7048 12.9364 19.8093 14.0409L20.1539 14.3855C20.9918 15.2234 21.2329 16.488 20.7623 17.5754C19.4986 20.4948 16.2974 21.9789 13.6038 20.2867C11.9845 19.2694 10.0931 17.8454 8.12386 15.8761C6.15459 13.9069 4.73063 12.0155 3.71332 10.3962C2.02107 7.70255 3.50523 4.50135 6.42459 3.23775Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <a class="tel">{dataSite?.siteProfiles[0].hotline}</a>
                  </div>
                  <div class="item tel_item">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6.35418C4.73294 5.52375 5.80531 5 7 5H17C18.0144 5 18.9407 5.37764 19.6458 6M4 6.35418C3.37764 7.05931 3 7.98555 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 7.80531 20.4762 6.73294 19.6458 6M4 6.35418L12 13L19.6458 6"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <a>{dataSite?.siteProfiles[0].offices[0].email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright" class="copyright">
          <div class="container">
            <div class="wsp">
              © Bản quyền thuộc về Lofi Team
              <span class="center">|</span>
              <span class="opacity1">
                Cung cấp bởi
                <a rel="noopener" title="Sapo" target="_blank">
                  Sapo
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
