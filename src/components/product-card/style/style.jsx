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
    transform: scale(1.2);
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
  margin: 0 -15px;
  margin-top: 5px;
  border-top: 1px solid #f1f1f1;
  .btn-cart {
    font-size: 23px;
    color: #155263;
    /* border-right: 1px solid; */
    cursor: pointer;
    border-right: 1px solid #f1f1f1;
    width: 40%;
    height: 50px;
    line-height: 60px;
    text-align: center;
    &:hover {
      background-color: #ff6a3c;
      color: #fff;
    }
  }

  .price {
    width: 60%;

    font-size: 14px;
    font-weight: 500;
    color: #333333;
    text-align: center;
  }
`;
const StyleProduct = styled.div`
  font-family: "Montserrat Alternates", sans-serif !important;
  background: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  position: relative;
  margin-top: 12px;

  padding-bottom: 0;
  .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
  }
  .ribbon span {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: linear-gradient(#ff6f3c 0%, #ff6f3c 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
  }
  .ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #7e151a;
    border-right: 3px solid #5e050900;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #a31a21;
  }
  .ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #52070a;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #380609;
  }
  &:hover img {
    visibility: visible;
    opacity: 1 !important;
    transform: scale(1.3);
  }
  .image {
    img {
      width: 100%;

      transition: all 0.2s ease-in-out;
      border-radius: 6px;
      opacity: 0.85;
      aspect-ratio: 3/4;
      object-fit: cover;
    }
  }
  .ribbon-custom {
    font-size: 16px;
    font-weight: 500;
  }
  .ant-ribbon-text {
    padding: 5px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    color: #333333;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    margin: 10px 0;
    height: 45px;
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
      width: 45%;
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
      width: 55%;
      border-left: 2px solid #efefef;

      h1 {
        font-weight: 300;
        margin: 0;
        font-size: 25px;
        font-weight: 300;
        color: #515151;
        letter-spacing: 1px;
      }

      h2 {
        font-family: "Anek Malayalam", sans-serif !important;
        color: #ff6f3c;
        margin: 0;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        padding: 5px 0;
      }

      h4 {
        margin: 0;
        color: #727272;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        color: #155263;
        padding-bottom: 8px;
      }

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
        outline: 0;
        border: 0;

        background: none;
        border: 1px solid #d9d9d9;
        /* padding: 8px 0px; */
        margin-bottom: 30px;
        color: #155263;
        text-transform: uppercase;
        width: 150px;
        font-family: inherit;
        margin-right: 5px;
        transition: all 0.3s ease;
        font-weight: 500;
        height: 40px;
        line-height: 40px;

        &:hover {
          // background: darken(white, 2%);
          border: 1px solid #ff6f3c;
          color: #ff6f3c;

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
