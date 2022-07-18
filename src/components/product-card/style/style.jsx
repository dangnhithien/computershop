import styled from "styled-components";

const StyleBannerSingle = styled.div`
  .banner-single {
    position: relative;
    &::before {
      content: "";
      // background-color: #0000004d;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }

  .banner-img-link {
    overflow: hidden;
    display: block;
  }

  .banner-img {
    object-fit: cover;
    width: 100%;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    position: relative;
    max-height: 300px;
    min-height: 250px;
  }

  .banner-content {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }

  .banner-text-tiny {
    display: block;
    font-size: 16px;
    color: #00f9ed;
    font-weight: 500;
  }

  .banner-text-small {
    display: block;
    font-size: 18px;
    color: #4e4e4e;
    font-weight: 500;
  }

  .banner-text-large {
    font-size: 30px;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 30px;
    color: #fff;
  }

  .banner-text-big {
    font-size: 36px;
    font-weight: 500;
    margin-top: 6px;
    margin-bottom: 30px;
  }

  .banner-link {
    color: #f5f5f5 !important;
    /* border-bottom: 1px solid; */
    font-weight: 500;
    background-color: #ff6a3c;
    /* padding: 10px 15px; */
    text-transform: uppercase;

    height: 40px;
    width: 140px;
    display: block;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
    &:hover {
      background-color: #ffc93c;
    }
  }

  .banner-single:hover .banner-img {
    transform: scale(1.05);
  }

  .banner-single:hover .banner-img-link::after {
    background: #fff;
  }
  .banner-single:hover::before {
    background-color: transparent;
  }
`;
const StylePrice = styled.div`
  font-family: "Montserrat Alternates", sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #f1f1f1;
  .btn-cart {
    font-size: 14px;
    color: #155263;
    cursor: pointer;
    width: 40%;
    line-height: 42px;

    &:hover {
      color: #ff6a3c;
    }
  }

  .price {
    width: 60%;
    font-size: 16px;
    font-weight: 600;
    color: #ff9a3c;
    text-align: right;
  }
`;
const StyleProduct = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  overflow: hidden;
  position: relative;
  padding-bottom: 0;
  .ribbon {
    position: absolute;
    top: 10px;
    left: 10px;

    border: 1px solid #ff9a3c;
    padding: 0 8px;
    border-radius: 4px;
    color: #ff9a3c;
    z-index: 1;
  }

  &:hover img {
    visibility: visible;
    opacity: 1 !important;
    transition: all 1s ease;
    transform: scale(1.05);
  }
  .image {
    img {
      width: 100%;

      transition: all 0.2s ease-in-out;
      border-radius: 6px;
      opacity: 0.85;
      aspect-ratio: 3/4;
      object-fit: contain;
    }
  }
  .ribbon-custom {
    font-size: 16px;
    font-weight: 500;
  }
  .ant-ribbon-text {
    padding: 5px;
  }

  .titles {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    color: #333333;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    margin: 8px 0;
    letter-spacing: 0.5px;
    &:hover {
      color: #ff6f3c;
    }
  }
  .content {
    margin-top: 10px;
  }
  .product-review {
  }
`;
const StyleView = styled.div`
  .card {
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: all 0.3s;
    display: flex;
    flex-direction: row;

    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .photo {
      padding: 30px;
      width: 50%;
      text-align: center;
      float: left;

      img {
        max-height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .description {
      padding: 30px;
      float: left;
      width: 60%;
      border-left: 2px solid #efefef;

      li {
        font-size: 14px;
        line-height: 20px;
        color: #727272;
        padding: 3px 0;
        margin: 0;
        font-weight: 500;
        list-style: inside;
        font-family: "Anek Malayalam", sans-serif !important;
      }

      button {
        border: 1px solid #ff6a3c;
        /* padding: 8px 0px; */
        margin-bottom: 30px;
        color: #ff6f3c;
        width: 175px;
        font-family: inherit;
        margin-right: 5px;
        transition: all 0.3s ease;
        font-weight: 500;
        height: 42px;
        line-height: 42px;
        border-radius: 4px;

        &:hover {
          // background: darken(white, 2%);
          background-color: #ff6f3c;
          color: #fff;

          cursor: pointer;
        }
      }
    }
  }
`;
const StyleBoxProduct = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export {
  StyleBannerSingle,
  StylePrice,
  StyleProduct,
  StyleView,
  StyleBoxProduct,
};
