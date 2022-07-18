import styled from "styled-components";

const StylePrice = styled.div`
  font-size: 20px;
  margin: 8px 0;
  .price-delete {
    font-size: 16px;
    font-weight: 500;
    color: #d2d2d2;
  }
  .price-sale {
    font-weight: 600;
  }
  .discount {
  }
  span {
    margin-right: 8px;
  }
`;

const StyleContainer = styled.div`
  background-color: #fff;
  .product-details-text {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f1f1f1;
    .title {
      font-weight: 500;

      text-transform: capitalize;
      letter-spacing: 0.5px;
    }

    .customer-review {
      margin-left: 15px;
    }

    .price {
      display: block;

      del {
        color: #8a8a8a;
        padding-right: 15px;
      }
    }
  }

  p {
    font-size: 14px;
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
    color: #ff6a3c;

    .btn-add-to-cart {
      margin-left: 12px;
      border: 1px solid;
      padding: 5px 12px;
      border-radius: 6px;
      display: flex;
      align-items: center;

      color: #ff6a3c;
      font-weight: 600;
      &:hover {
        color: #fff;
        background-color: #ff6a3c;
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
    margin-top: 24px;
    a {
      color: #333333;
    }
    & > span {
      margin-right: 20px;
      width: 60px;
      font-weight: 600;
      margin-bottom: 8px;
      white-space: nowrap;
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
          color: #ff6a3c;
          border: 1px solid #ff6a3c;
        }
      }
    }
  }
`;
const StyleTable = styled.div`
  font-size: 14px;

  max-height: 600px;
  overflow: hidden;
  position: relative;
  .more {
    position: absolute;
    width: 100%;
    height: 55px;
    bottom: 0;
    left: 0;
    z-index: 10;
    filter: blur();
    font-size: 16px;
    color: #ff6c3c;
    text-align: center;
    line-height: 60px;
    background-color: #ffffffe3;
    cursor: pointer;
  }
  .table-title {
    font-weight: 600;
    text-align: center;
    font-size: 18px;
  }
  table {
    width: 100%;
  }
  td {
    padding: 0px 8px;
    padding-top: 12px;
    width: 50px;
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
export { StyleContainer, StyleGallery, StylePrice, StyleTable };
