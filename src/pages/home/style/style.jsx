import styled from "styled-components";

const StyleCategory = styled.div`
  width: 100%;
  height: 240px;
  background: #fafafa;
  margin-top: 12px;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  border: 1px solid #a8a8a830;
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
export { StyleCategory, StyleBanner };
