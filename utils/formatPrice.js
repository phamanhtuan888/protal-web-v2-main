import React from 'react';

function FormatPrice({ price, className}) {
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
  return <span className={className}>{formattedPrice}₫</span>;
}

export default FormatPrice;
