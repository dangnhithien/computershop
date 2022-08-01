const fCurrency = (money) => (
  // &#8363; => đ
  <span>&#8363; {Number(money).toLocaleString("vi-VN")}</span>
);
export default fCurrency;
