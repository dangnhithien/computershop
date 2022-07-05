import styled from "styled-components";

const StylePrice = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .price {
    font-size: 18px;
    color: #c1c1c1;
    font-weight: 800;
  }
  .number {
    font-size: 24px;
    font-weight: 900;
    margin-right: 24px;
    color: #6a675e;
  }
  .promotion {
    color: #757575;
    display: flex;
    align-items: center;
  }

  .promotion-price {
    padding: 10px 10px 10px 0;
    display: flex;
    align-items: center;
  }
  .discount-price {
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .stamp {
    position: absolute;
    top: -21px;
    right: 75px;
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);

    font-size: 26px;
    font-weight: 700;

    display: inline-block;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    border-radius: 1rem;
    font-family: "Courier";
    mask-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png);
    mask-size: 944px 604px;
    mix-blend-mode: multiply;
  }
  .is-approved {
    color: #ffbc5b;
    border: 0.5rem solid #ffbc5b;
    -webkit-transform: rotate(-14deg);
    -ms-transform: rotate(-14deg);
    transform: rotate(-14deg);
    border-radius: 0;
    mask-position: 2rem 3rem;
  }
`;
const StyleSocial = styled.div`
  display: block;
  font-size: 25px;
  /* text-align: center; */
  margin: 20px;
  margin-left: 50px;
  & > span {
    font-size: 16px;
  }
  .social {
  }
  .icon-social {
    margin-left: 10px;
    cursor: pointer;
  }
  .icon-facebook {
    color: #3b5999;
  }
  .icon-messenger {
    color: #0384ff;
  }
  .icon-twitter {
    color: #10c2ff;
  }
`;
const StyleContainer = styled.div`
  background-color: #fff;
  padding: 50px 20px 20px;
  .product-details-text {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid $borderColor;
    .title {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 20px;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 22px;
    }

    .customer-review {
      margin-left: 15px;
    }

    .price {
      display: block;
      font-size: 20px;
      color: $themeColor;
      margin: 10px 0;
      del {
        color: #8a8a8a;
        padding-right: 15px;
      }
    }
  }

  p {
    font-size: 16px;
  }
  .title {
    margin-bottom: 0 !important;
  }
  .add-to-cart {
    display: flex;
    align-items: center;
    font-size: 16px;

    font-weight: bold;
    cursor: pointer;
    color: #ea2c26;

    .btn-add-to-cart {
      margin-left: 20px;
      border: 0.1px solid;
      padding: 2px 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 3px;
      &:hover {
        color: #ff4700;
      }
      svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        margin-bottom: 5px;
      }
    }
  }
  .tag-relation {
    margin-top: 40px;

    & > span {
      display: block;
      margin-right: 20px;
      width: 60px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .tag {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      span {
        display: block;
        border: 1px solid #c1c1c1;
        padding: 5px 10px;
        margin-right: 8px;
        margin-bottom: 8px;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          color: #ea2c26;
          border: 1px solid #ea2c26;
        }
      }
    }
  }
`;
const StyleTable = styled.div`
  table {
    width: 100%;
  }
  td {
    padding: 0px 20px;
    padding-top: 15px;
    border-right: 1px solid #f1f1f1;
  }
  tr {
    border: 1px solid #c1c1c1;
  }
`;
const StyleGallery = styled.div`
  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    height: 80px;
    width: 60px;
  }
`;
export { StyleContainer, StyleGallery, StyleSocial, StylePrice, StyleTable };
