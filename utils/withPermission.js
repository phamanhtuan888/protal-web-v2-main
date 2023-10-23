import { Component } from 'react';
import { withRouter } from 'next/router';
import { PageLoading } from '@ant-design/pro-layout';
import { decryptWithAES } from '@/utils/crypto';
import { havePermissionWithMenuId } from './authority';
import { getComponentDisplayName } from './helpers';
import { getQueryString } from './utils';

export default (arrPer = [
  'isViewed',
  'isUpdated',
  'isDeleted',
  'isBlocked',
  'isAdded',
  'isApproved',
]) => WrappedComponent => {
  class WithPermission extends Component {
    static displayName = `WithPermission(${getComponentDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const { pathname, asPath, dispatch, store, req } = ctx;
      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
      await dispatch({
        type: 'global/fetchAuthRoles',
        payload: {
          token: req?.cookies?.token,
        },
      });
      const {
        global: { roles },
      } = store.getState();
      return {
        ...componentProps,
        pathname,
        asPath,
        roles
      };
    }

    render() {
      const { roles, router, asPath } = this.props;
      let { menuId, token } = router.query;
      let path = asPath?.slice(0, (asPath?.indexOf('?') !== -1 ? asPath?.indexOf('?') : asPath.length));
      if (typeof window !== 'undefined') {
        menuId = getQueryString('menuId');
        token = getQueryString('token');
        path = window.location.pathname;
      }
      const passEncrypt = 'nbm@2020';
      const decrypted = decryptWithAES(`${token}` || '', passEncrypt);
      if (path === '/account/base' || path === '/account/security') {
        return (
          <WrappedComponent {...this.props} permissions={{ isViewed: true }} menuId={menuId} />
        );
      }
      if (!token || !decrypted) {
        return null;
      }
      const arr = decrypted.split('|');
      if (arr[0] !== path || arr[1] !== menuId) {
        return null;
      }
      const arrPermissions = havePermissionWithMenuId(roles, menuId, arrPer);
      if (roles.length === 0)
        return (
          <>
            <div
              onClick={() => {
                const { dispatch } = this.props;
                dispatch({
                  type: 'login/logout',
                  payload: '',
                  callback: () => {
                    window.location.href = '/';
                  },
                });
              }}
              style={{ opacity: 0 }}
            >
              Đăng xuất
            </div>
            <PageLoading />
          </>
        );
      return <WrappedComponent {...this.props} permissions={arrPermissions} menuId={menuId} />;
    }
  }

  const WithPermissionHoc = withRouter(WithPermission);

  return WithPermissionHoc;
};
