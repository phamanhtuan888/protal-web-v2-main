/**
 * đối tượng routes cho web và cms
 * @param { là tên không in hoa = tiếng anh viết liền, cách nhau bằng dấu _ và là duy nhất } name
 * @param { là đường dẫn trên trình duyệt, bắt đầu bằng / } path
 * @param { là đường dẫn đến file vật lý trong thư mục pages } component
 */
module.exports.routes = {
  // web
  web: [
    { path: '/', name: 'home', component: 'index' },
    { path: '/onesme', name: 'onesme', component: 'User/Onesme' },
    // chi tiết mẫu giao diện
    {
      path: '/mau-giao-dien[0-9-_]{0,5}/:title([a-zA-Z0-9-_]{1,10000})',
      name: 'template',
      component: 'User/Template',
    },
    {
      path: '/demo/:title([a-zA-Z0-9-_]{1,10000})',
      name: 'demo',
      component: 'User/Demo',
    },
    // chi tiết tin tức
    {
      path: '/:parentName([a-zA-Z0-9-]{1,10000})/:title([a-zA-Z0-9-]{1,10000})',
      name: 'about',
      component: 'User/Detail',
    },
    // trang chuyên mục
    { path: '/:name([a-zA-Z0-9-]{1,10000})', name: 'category', component: 'User/Category' },
  ],
  dashboard: [],
};
