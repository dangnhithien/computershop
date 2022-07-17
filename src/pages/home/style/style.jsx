import styled from "styled-components";

const StyleCategory = styled.div`
  width: 100%;
  height: 240px;
  margin-top: 12px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .containers {
    width: 100%;
    height: 100%;
    .top {
      width: 100%;
      height: 180px;
      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .bottom {
      .details {
        padding: 20px;
        h6 {
          font-size: 16px;
          font-family: sans-serif;
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          width: 100%;
          color: #6c6767;

          font-weight: bold;
          text-transform: capitalize;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          white-space: normal;
          text-align: center;
        }
      }
    }
  }
`;
const StyleBanner = styled.div`
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: 100%;
  }
`;
const StyleSupplier = styled.div`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #f1f1f1;
  margin-top: 12px;
  margin-bottom: 12px;
  &:hover {
    border: 1px solid #ff6a3c;
  }
  a:hover {
    img {
      transform: scale(1.015);
    }
    .hover-text {
      visibility: visible;
    }
    .text {
      background-color: #ff6a3c;
      color: #fff;
    }
  }
  .image {
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    border: 1px solid #fff;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
    height: 160px;
    img {
      width: 100%;
      height: 100%;
      transition: transform 1s ease;
    }
  }
  .hover-text {
    margin-left: auto;
    visibility: hidden;
  }
  .text {
    background: #fff;
    color: #333333;
    text-transform: uppercase;

    height: 38px;
    line-height: 38px;
    padding: 0 17px;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 0 0 6px 6px;
    display: flex;
    overflow: hidden;
    transition: background 300ms ease;
  }
`;
export { StyleCategory, StyleBanner, StyleSupplier };
