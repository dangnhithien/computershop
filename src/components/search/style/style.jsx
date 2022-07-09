import styled from "styled-components";

const StyleSearchBar = styled.div`
  .input-wrap {
    width: 350px;
    height: 50px;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 0 40px 0 1rem;
    border-radius: 20px;

    box-sizing: border-box;
    border: 1px solid #c1c1c1;
    position: relative;
    background-color: #fff;

    &:focus-within {
      border-radius: 0;
      border-bottom: 1px solid #f1f1f1;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      .display {
        display: block !important;
      }
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
    .icon-search {
      position: absolute;
      top: 25%;
      right: 10px;
      font-size: 25px;
      padding: -3px;
      color: #c1c1c1;
    }
  }

  .display {
    display: none;
  }
  .results-wrap {
    position: absolute;
    top: 49px;
    left: -1px;
    width: 350px;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #c1c1c1;
    background: #fff;
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 9999999;
    padding: 0 8px 20px;
    .result {
      max-height: 12rem;
      overflow-y: auto;
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #888;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }

  .product-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      background-color: #f2f7f4;
    }
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      color: #5a5656;
      font-size: 13px;
      font-weight: bold;
      text-transform: capitalize;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      margin-left: 12px;
    }

    .price {
      margin-left: 12px;
      margin-top: 5px;
      font-size: 13px;
      font-weight: bolder;
      color: #ff6a3c;
    }
    .image {
      width: 60px;
      height: 60px;
      flex-shrink: 0;
      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
        border: 1px solid #f1f1f1;
      }
    }
  }
`;
export { StyleSearchBar };
