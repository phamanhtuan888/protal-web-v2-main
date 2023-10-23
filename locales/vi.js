const exception = require('./vi-VN/exception');
const login = require('./vi-VN/login');
const user = require('./vi-VN/user');
const menu = require('./vi-VN/menu');
const roles = require('./vi-VN/roles');
const account = require('./vi-VN/account');
const report = require('./vi-VN/report');
const groupUser = require('./vi-VN/groupUser');
const category = require('./vi-VN/category');
const province = require('./vi-VN/province');
const district = require('./vi-VN/district');
const galery = require('./vi-VN/galery');
const ward = require('./vi-VN/ward');
const website = require('./vi-VN/website');
const groupPlace = require('./vi-VN/groupPlace');
const place = require('./vi-VN/place');
const news = require('./vi-VN/news');
const newType = require('./vi-VN/newType');
const groupWebsites = require('./vi-VN/groupWebsites');
const ad = require('./vi-VN/ad');
const adstype = require('./vi-VN/adsType');
const adsposition = require('./vi-VN/adsPosition');
const galeryCategory = require('./vi-VN/galeryCategory');
const menuPositions = require('./vi-VN/menuPositions');
const placeManager = require('./vi-VN/placeManager');
const botTypeOfPosts = require('./vi-VN/botTypeOfPosts');

module.exports = {
  'app.common.validate.max300': 'Vui lòng nhập đúng định dạng tối đa 300 ký tự ',
  'app.table.column.no': '#',
  'app.tooltip.remove': 'Xóa',
  'app.tooltip.edit': 'Sửa',
  'app.title.export': 'Lập điểm tin',
  'app.title.create': 'Thêm mới {name}',
  'app.confirm.remove': 'Bạn có chắc chắn muốn xóa bản ghi?',
  'app.search.placeHolder': 'Tìm kiếm theo tên {functionName}',
  'app.search.label': 'Tên {name}',
  'app.search.button': 'Tìm kiếm',
  'app.common.action': '#',
  'app.common.deleteBtn.cancelText': 'Hủy',
  'app.common.statusTag.-1': 'Xóa tạm',
  'app.common.statusTag.-2': 'Chờ duyệt',
  'app.common.statusTag.1': 'Kích hoạt',
  'app.common.statusTag.0': 'Ẩn',
  'app.common.status.placeholder': 'Tìm kiếm trạng thái',
  'app.common.type.placeholder': 'Tìm kiếm {name}',
  'app.common.placeholder.rangepicker.0': 'Ngày bắt đầu',
  'app.common.placeholder.rangepicker.1': 'Ngày kết thúc',
  'app.common.crudBtns.0': 'Quay lại (F8)',
  'app.common.crudBtns.1': 'Làm mới (F9)',
  'app.common.crudBtns.2': 'Lưu lại (F10)',
  'app.common.crudBtns.3': 'Xuất báo cáo',
  'app.common.crudBtns.4': 'Lập điểm tin',
  'app.common.searchBtn': 'Tìm kiếm',
  'app.common.delete.success': 'Xóa bản ghi thành công',
  'app.common.edit.success': 'Cập nhật thông tin thành công',
  'app.common.export.success': 'Xuất thống kê {name} thành công',
  'app.common.create.success': 'Thêm mới {name} thành công',
  'app.common.error.server.msg': 'Có lỗi xảy ra:',
  'app.common.crud.error.update.change': 'Vui lòng thay đổi thông tin ít nhất 1 trường',
  'app.common.crud.validate.input': 'Vui lòng nhập thông tin',
  'app.common.crud.validate.select': 'Vui lòng chọn thông tin',
  'app.common.crud.validate.fomatUnit':
    'Vui lòng nhập từ 1 đến 50 ký tự bao gồm chữ, số và bắt đầu bằng chữ cái',
  'app.common.crud.validate.fomatMedi':
    'Vui lòng nhập từ 3 đến 50 ký tự bao gồm chữ, số /-, và bắt đầu bằng chữ cái',
  'app.common.crud.validate.fomat':
    'Vui lòng nhập từ 3 đến 50 ký tự bao gồm chữ, số và bắt đầu bằng chữ cái',
  'app.common.crud.validate.fomatNew':
    'Vui lòng nhập ít nhất 3 ký tự bao gồm chữ, số và bắt đầu bằng chữ cái',
  'app.common.crud.validate.formatName':
    'Vui lòng nhập ít nhát 3 ký tự bao gồm chữ, số và ký tự đặc biệt không dấu',
  'app.common.crud.validate.url': 'Vui lòng nhập đúng định dạng url',
  'app.common.crud.validate.phone': 'Vui lòng nhập đúng định dạng sđt',
  'app.common.crud.validate.email': 'Vui lòng nhập đúng định dạng email',
  'app.common.crud.validate.phone_email': 'Vui lòng nhập đúng định dạng số điện thoại hoặc email',
  'app.common.crud.validate.type': 'Vui lòng nhập đúng định dạng {name} từ 3 đến 50 ký tự',
  'app.common.validate.max': 'Vui lòng nhập tối đa {max} ký tự',
  'app.common.changeStatus.success': 'Cập nhật trạng thái thành công',
  'app.common.validate.message': 'Vui lòng nhập tin nhắn',
  'app.common.validate.max200': 'Vui lòng nhập tối đa 200 ký tự',

  ...exception,
  ...login,
  ...user,
  ...menu,
  ...report,
  ...roles,
  ...account,
  ...groupUser,
  ...report,
  ...category,
  ...province,
  ...district,
  ...galery,
  ...ward,
  ...website,
  ...groupPlace,
  ...place,
  ...news,
  ...newType,
  ...groupWebsites,
  ...ad,
  ...adstype,
  ...adsposition,
  ...galeryCategory,
  ...menuPositions,
  ...placeManager,
  ...botTypeOfPosts,
};
