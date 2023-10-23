/* eslint-disable jsx-a11y/label-has-for */
import { useState, useRef } from 'react';
import { Spin, Button } from 'antd';

// eslint-disable-next-line no-unused-vars
const RegisterForm = ({ open, onClose, onOpen, templatesName = '' }) => {
  const [spin, setSpin] = useState(false);
  const [business, setBusiness] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [store, setStore] = useState('');

  const validateText = (text) => new RegExp(`[A-Za-z1-9 ]{2,}`, 'g').test(text);
  const validatePhoneNum = (num = phoneNum) => new RegExp(`0[0-9]{9}`, 'g').test(num);
  const validateEmail = (mail = email) => new RegExp(`[a-zA-z1-9_]+[@][a-zA-Z0-9]+[.][a-z]+`, 'g').test(mail);

  const containerRef = useRef(null);
  const businessRef = useRef(null);
  const storeRef = useRef(null);
  const phoneNumRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    // console.log('submit form');
    e.preventDefault();
    if (!validateText(business)) {
      businessRef.current.focus();
      businessRef.current.select();
      return;
    }
    if (!validateText(store)) {
      storeRef.current.focus();
      storeRef.current.select();
      return;
    }
    if (!validatePhoneNum()) {
      phoneNumRef.current.focus();
      phoneNumRef.current.select();
      return;
    }
    if (!validateEmail()) {
      emailRef.current.focus();
      emailRef.current.select();
      return;
    }
    if (validateText(business) && validatePhoneNum() && validateText(store) && validateEmail()) setSpin(true);
  };

  // const submitByEnter = e => e.key==='Enter' && handleSubmit()

  return (
    <div
      className={`modal fade modal-register modal-register-default ${open ? 'show' : ''}`}
      onClick={(e) => {
        // console.log(e.currentTarget);
        // console.log(containerRef.current && !containerRef.current.contains(e.currentTarget));
        // onClose();
      }}
    >
      <Button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
        <span className="ti-close">+</span>
      </Button>
      <div className="modal-dialog" role="document">
        <div className="modal-content" ref={containerRef}>
          <div className="modal-body">
            <div className="ant-spin-nested-loading">
              <Spin spinning={spin} tip={spin && 'Yêu cầu của bạn đang được xử lý'}>
                <h2>Dùng thử website của VGA Soft</h2>
                <p style={{ marginBottom: '15px' }}>Miễn phí dùng thử 15 ngày với đầy đủ tính năng! </p>
                <form
                  action="/"
                  autoComplete="off"
                  className="form-request"
                  method="POST"
                  acceptCharset="UTF-8"
                  onSubmit={handleSubmit}
                >
                  <ul className="register-form-error" />
                  <div className="form-group mdc-text-field">
                    <input
                      type="text"
                      maxLength="60"
                      id="fullname"
                      className={`form-control form-input ${business.length > 0 &&
                        (validateText(business) ? 'valid' : 'danger')}`}
                      name="fullname"
                      required
                      title="Tên của hàng dài từ 3 đến 60 ký tự"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      ref={businessRef}
                    />
                    <label htmlFor="fullname">Tên bạn</label>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mdc-text-field">
                        <input
                          type="tel"
                          maxLength="15"
                          id="phonenumber"
                          className={`form-control form-input ${phoneNum.length > 0 &&
                            (validatePhoneNum() ? 'valid' : 'danger')}`}
                          name="phonenumber"
                          required
                          title="Số điện thoại bao gồm 10 chữ số"
                          value={phoneNum}
                          onChange={(e) => setPhoneNum(e.target.value)}
                          ref={phoneNumRef}
                        />
                        <label htmlFor="phonenumber">Số điện thoại của bạn</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mdc-text-field">
                        <input
                          type="email"
                          maxLength="50"
                          id="email"
                          className={`form-control form-input ${email.length > 0 &&
                            (validateEmail() ? 'valid' : 'danger')}`}
                          name="email"
                          title="Email có dang example@exam.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          ref={emailRef}
                        />
                        <label htmlFor="email">Email của bạn</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mdc-text-field">
                    <input
                      type="text"
                      maxLength="64"
                      id="noti"
                      className={`form-control form-input ${store.length > 0 &&
                        (validateText(store) ? 'valid' : 'danger')}`}
                      name="noti"
                      title="Tên cửa hàng dài từ 3 đến 60 ký tự"
                      value={store}
                      valid={validateText(store)}
                      onChange={(e) => setStore(e.target.value)}
                      ref={storeRef}
                    />
                    <label htmlFor="noti">Tên cửa hàng</label>
                  </div>
                  <div className="form-group mdc-text-field">
                    <input
                      type="text"
                      className="form-control form-input valid"
                      id="selected"
                      name="selected"
                      disabled
                      value={templatesName}
                    />
                    <label htmlFor="selected">Mẫu giao diện bạn quan tâm</label>
                  </div>
                  <div className="form-group mdc-text-field">
                    <Button type="submit" className="btn-registration" onClick={handleSubmit}>
                      <span>Đăng ký dùng thử</span>
                      <i className="fa fa-spinner fa-spin" />
                    </Button>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Button disabled="" type="button" className="ant-btn" style={{ margin: '5px 10px' }}>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="0 0 48 48"
                          className="abcRioButtonSvg"
                          style={{ marginRight: '5px' }}
                        >
                          <g>
                            <path
                              fill="#EA4335"
                              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            />
                            <path
                              fill="#4285F4"
                              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            />
                            <path
                              fill="#34A853"
                              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                            <path fill="none" d="M0 0h48v48H0z" />
                          </g>
                        </svg>
                        <span>Đăng nhập với Google</span>
                      </Button>
                      <Button style={{ margin: '5px 10px' }}>
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                          style={{ width: '18px', marginRight: '5px' }}
                        >
                          <path
                            d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159 c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44 c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0 c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0 c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258 v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"
                            style={{ fill: 'rgb(56, 92, 142)' }}
                          />
                        </svg>
                        <span>Đăng nhập với Facebook</span>
                      </Button>
                    </div>
                  </div>
                </form>
              </Spin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
