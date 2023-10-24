import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function Footer(props) {
  const { menuFooter, dataSite } = props;
  const { siteProfiles } = dataSite;

  return (
    <section
      className='footer-container'
      style={{
        background: `url('${publicRuntimeConfig.DOMAIN_STATIC
          }/static/vga_soft/images/footerbg.svg') 0% 0% / cover`,
      }}
    >
      <footer className='footer'>
        <div className='container' style={{ padding: 0 }}>
          <div className='row justify-content-center align-items-start'>
            <div className='col-lg-6 col-md-6 contact-infor footer__col'>
              <div className='py-0' style={{ marginBottom: '2rem' }}>
                <a href='/' id='logo'>
                  <img
                    src={`${publicRuntimeConfig.DOMAIN_STATIC
                      }/static/vga_soft/images/log-white.svg`}
                    alt='Logo'
                    style={{ width: '256px', height: '50px' }}
                  />
                </a>
                <p>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VŨ GIA ANH</p>
              </div>
              <ul>
                <li className='contact-infor__item'>
                  <img
                    src={`${publicRuntimeConfig.DOMAIN_STATIC
                      }/static/vga_soft/images/address_ft.svg`}
                    alt='location icon'
                    className=' ls-is-cached lazyloaded'
                  />
                  <p>Số 20, Ngõ 118, ngách 8, hẻm 1 Nguyễn Khánh Toàn</p>
                </li>
                <li className='contact-infor__item'>
                  <img
                    src={`${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/images/phone_ft.svg`}
                    alt='phone icon'
                    className=' ls-is-cached lazyloaded'
                  />
                  <p> {siteProfiles[0].hotline} </p>
                </li>
                <li className='contact-infor__item'>
                  <img
                    src={`${publicRuntimeConfig.DOMAIN_STATIC}/static/vga_soft/images/email_ft.svg`}
                    alt='email icon'
                    className='bottom-mail ls-is-cached lazyloaded'
                    style={{ marginR1ight: '5px' }}
                  />
                  <p> contact@vgasoft.vn </p>
                </li>
              </ul>
            </div>
            {menuFooter.map(footeritem => (
              <div
                className='col-lg-3 col-md-3 footer__col d-flex flex-column justify-content-center'
                key={footeritem?.id}
              >
                <h3 className='margin-bottom-xsmall text-left text-white'>
                  {footeritem?.menusName}
                </h3>
                <ul>
                  {footeritem?.children.map(child => (
                    <li key={child.id}>
                      <a href={child.url}>
                        <p className='footer__link'>{child.menusName}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex_custom_footer'>
            <ul className='flex_ul' />
            <a
              href='http://online.gov.vn/Home/WebDetails/68985'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt=''
                title=''
                src={`${publicRuntimeConfig.DOMAIN_STATIC
                  }/static/vga_soft/images/dang-ky-website-thuong-mai-dien-tu-1024x388-1024x388.png`}
                style={{ width: '176px', height: '67px' }}
              />
            </a>
          </div>
          <hr style={{ background: 'rgb(255, 255, 255)' }} />
          <div className='flex_footer'>
            <span className='text-left text-white'>
              &copy; {new Date().getFullYear()} Vgasoft.vn. All Rights Reserved. Developed by &nbsp;
              <a target='_blank' rel='noopener noreferrer' href='https://vgasoft.vn'>
                VGA SOFT Design
              </a>
            </span>
            <p>MST: 0108140789 do sở KH đầu tư Hà Nội cấp ngày 22/1/2018 </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
