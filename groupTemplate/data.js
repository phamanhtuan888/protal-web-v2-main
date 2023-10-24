/* eslint-disable camelcase */
import lofi_nest from './lofi_nest/index';
import phong_kham from './phong_kham/index';
import vgasoft from './vga_soft/index';

const DATA_TEMPLATES = {
  ...lofi_nest,...phong_kham,...vgasoft
};
export default DATA_TEMPLATES;
