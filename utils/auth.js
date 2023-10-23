import router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import publicRuntimeConfig from '@/utils/config';
import { encryptWithAES } from '@/utils/crypto';
import moment from 'moment';
import { notification } from 'antd';

export const login = async ({ token, email, sitesId }) => {
  if (sitesId?.length === 0) {
    notification.error({
      message: 'Tài khoản chưa được phân quyền quản lý 1 website nào.',
      placement: 'bottomRight',
      style: { background: '#fff1f0' },
    });
    return
  }
  const cookieExpire = Number(publicRuntimeConfig.TOKEN_LOGIN_EXPIRE || 1);
  cookie.set('token', token, { expires: cookieExpire });
  cookie.set('auth_email', email, { expires: cookieExpire });
  cookie.set('timeLogin', moment(), { expires: cookieExpire });
  if (sitesId?.length === 1) {
    cookie.set('sitesId', sitesId[0], { expires: cookieExpire });
  }
  const passEncrypt = 'nbm@2020';
  const encrypted = encryptWithAES(`/system/dashboard|315`, passEncrypt);
  window.location.href = `/system/dashboard?menuId=315&token=${encrypted}`;
};



export const clearLogout = () => {
  cookie.remove('token');
  cookie.remove('auth_email');
  cookie.remove('sitesId');
  cookie.remove('timeLogin');
  if (typeof window !== 'undefined') {
    localStorage.clear();
    sessionStorage.clear();
    window.localStorage.setItem('logout', Date.now());
  }
};

export const logout = () => {
  window.location.href = '/';
  clearLogout();
};

export const loggedIn = ctx => {
  const { token } = nextCookie(ctx);
  const passEncrypt = 'nbm@2020';
  const encrypted = encryptWithAES(`/system/dashboard|315`, passEncrypt);
  if (ctx.req && token) {
    ctx.res.writeHead(302, { Location: `/system/dashboard?menuId=315&token=${encrypted}` });
    ctx.res.end();
    return;
  }

  if (token) {
    router.push('/Dashboard/Home', `/system/dashboard?menuId=315&token=${encrypted}`);
  }

  // eslint-disable-next-line consistent-return
  return token;
};

export const auth = ctx => {
  const { token } = nextCookie(ctx);
  // log("withAuth auth token: ", token)
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }

  if (!token) {
    window.location.href = '/';
  }

  // eslint-disable-next-line consistent-return
  return token;
};

export const tokenExpired = ctx => {
  // log("withAuth auth token: ", token)

  if (ctx.req) {
    ctx.res.clearCookie('token');
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return;
  }
  cookie.remove('token');
  window.location.href = '/';

  // eslint-disable-next-line consistent-return
  return null;
};

