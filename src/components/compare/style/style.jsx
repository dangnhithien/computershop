import styled from "styled-components";

const StyleView = styled.div`
  margin-top: 8px;
  .empty {
    margin: auto;
    margin-top: 15px;
    font-weight: bold;
    color: #5c5e5e;
  }
  .card {
    height: 400px;
    margin: 5px;

    background: white;
    border: 1px solid #c3c3c3;
    position: relative;

    transition: all 0.3s;
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    flex-direction: row;

    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    nav {
      width: 100%;
      color: #727272;
      text-transform: uppercase;
      padding: 20px;
      border-bottom: 2px solid #efefef;
      font-size: 12px;

      svg.heart {
        height: 24px;
        width: 24px;
        float: right;
        margin-top: -3px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          fill: red;
        }
      }
      svg.arrow {
        float: left;
        height: 15px;
        width: 15px;
        margin-right: 10px;
      }
    }

    .photo {
      max-width: 40%;
      text-align: center;
      float: left;
      img {
        aspect-ratio: 3/4;
      }
    }

    .description {
      max-width: 60%;
      float: left;
      margin-top: 10px;
      border-left: 2px solid #efefef;
      padding: 10px 5px 10px 30px;

      h1 {
        font-weight: 300;
        padding-bottom: 10px;
        margin: 0;
        font-size: 20px;
        font-weight: 300;
        color: #515151;
      }

      h2 {
        font-family: "Anek Malayalam", sans-serif !important;
        color: #515151;
        margin: 0;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        margin: 5px 0;
        margin-top: 8px;

        overflow: hidden;
        white-space: break-spaces;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      h4 {
        margin: 0;
        color: #727272;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        color: #0fd166;
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
        position: absolute;
        bottom: -31px;
        right: -7px;
        outline: 0;
        border: 0;
        margin-top: 20px;
        background: none;
        border: 1px solid #d9d9d9;
        /* padding: 8px 0px; */
        margin-bottom: 30px;
        color: #515151;
        text-transform: uppercase;
        width: 60px;
        font-family: inherit;
        margin-right: 5px;
        transition: all 0.3s ease;
        font-weight: 500;
        height: 40px;
        line-height: 40px;

        &:hover {
          // background: darken(white, 2%);
          border: 1px solid #aedaa6;
          color: #fff;
          background-color: #51c390;
          cursor: pointer;
        }
      }
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
  .top {
    display: flex;
    justify-content: center;
    min-height: 100px;
    margin-bottom: 12px;
    .parent {
      position: relative;
      .item {
        width: 120px;
        height: 100%;
        opacity: 0.8;
        border: 2px solid #c0d0dd;
        margin: 8px;
        cursor: pointer;
        img {
          opacity: 0.6;
        }
        &:hover {
          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          opacity: 1;
        }
      }
    }
  }
  .cancel {
    position: absolute;
    top: 4px;
    right: 8px;
    cursor: pointer;
    font-size: 18px;
    color: #c3c3c3;
    z-index: 100;
    margin: 0px;
    &:hover {
      color: #ff6a3c;
    }
  }
`;
export { StyleView };
