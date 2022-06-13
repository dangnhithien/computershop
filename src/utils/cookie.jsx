const COOKIE_NAME = {
  CART: "cart",
};
const COOKIE_PATH = "/";
const COOKIE_EXPIRES = 86400 * 7;

class Cookie {
  constructor(cartCookie) {
    this.cartCookie = cartCookie.cart;
  }

  getCart() {
    return this.cartCookie;
  }
  addItem(product) {
    if (!this.cartCookie) this.cartCookie = { ...product };
    this.cartCookie = { ...this.cartCookie, ...product };
  }
  removeItem(product) {
    if (this.cartCookie) {
      Object.keys(product).forEach((id) => {
        delete this.cartCookie[id];
      });
    }
  }
  getSizeCart() {
    return this.cartCookie ? Object.keys(this.cartCookie).length : 0;
  }
}

export { Cookie, COOKIE_NAME, COOKIE_PATH, COOKIE_EXPIRES };
