import styled from "styled-components";

const StyleProfile = styled.div`
  .banner {
    width: 100%;
    height: 200px;
    margin-bottom: 12px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 6/1;
    }
  }
  .ant-row.sidebar {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 12px;

    .tab {
      color: #155263;
      font-size: 18px;
      border: 1px solid #155263;
      text-align: center;
      width: 150px;
      font-weight: 600;
      border-radius: 6px;
      padding: 5px;
      margin-bottom: 12px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #ff9a3c;
        color: #fff;
        border: 1px solid #ff9a3c;
      }
    }
    .active {
      color: #fff;
      background-color: #ff6a3c;
      transition: all 2s ease;
      border: none !important;
    }
  }

  .ant-row.main {
    border: 1px solid #155263;
    background-color: #fff;
    border-radius: 6px;
    min-height: 300px;
    padding: 20px;
    .btn-save {
      border: none;
      background: #ff6a3c;
      color: #fff;
      width: 70px;
      &:hover {
        background-color: #ff9a3c;
      }
    }
    .border-white {
      border: 1px solid #fff;
    }
    h5.title {
      color: #155263;
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 25px;
      border-bottom: 1px solid #155263;
    }
    form {
      .ant-input {
        border: 1px solid #155263;
      }
      .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: 1px solid #155263;
      }
      .ant-form-item-label > label {
        color: #155263;
        font-size: 16px;
        font-weight: bold;
        text-transform: capitalize;
      }
      .ant-form-item-label
        > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
        display: none !important;
      }
    }
    .group {
      font-size: 16px;
      display: flex;
      align-items: center;
      padding: 5px;
      color: #155263;

      .label {
        margin-right: 25px;
        font-weight: 600;
        width: 125px;
        text-align: right;
      }
    }
    .ant-col.upload-img {
      text-align: center;
    }
    .image {
      width: 150px;
      height: 150px;

      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .containers {
    height: 400px;
    overflow-y: scroll;
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

  .disable {
    padding: 15px 10px;

    font-size: 18px;
    font-weight: bolder;
    border: none;
  }
  .purchased {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    border: 1px solid #155263;
    padding: 10px;
    margin: 12px 0;
    color: #443a3a;
    text-transform: capitalize;
    & > div {
      width: 25%;
    }

    .show {
      svg {
        margin-left: 15px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        color: #155263;
      }
    }
  }
`;
const StyleDetail = styled.div`
  .swapper {
    max-height: 350px;
    overflow-y: scroll;
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

    .purchased {
      display: flex;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      margin-bottom: 12px;
      font-size: 16px;
      align-items: center;
    }

    .group {
      width: 60%;
      margin-top: 10px;
      padding-left: 10px;
      color: #155263;
    }
    .name {
      font-family: "Anek Malayalam", sans-serif !important;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 0 0 5px;
      font-size: 16px;
      line-height: 22px;
      max-height: 48px;
      text-transform: capitalize;
    }
    .quantity {
      color: #c3c3c3;
    }
  }
`;
const StyleNotification = styled.div`
  display: flex;
  border: 1px solid #1552636b;
  padding: 20px 30px;
  border-radius: 6px;
  align-items: center;
  margin: 12px;
  cursor: pointer;
  &:hover {
    background-color: #e8f4fb;
  }
  .image {
    width: 80px !important;
    height: 80px !important;
    margin: 0 !important;
  }
  .content {
    margin-left: 31px;

    .title {
      color: #155263;
      font-size: 18px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  svg {
    margin-left: auto;
    width: 25px;
    height: 25px;
    color: #cdad3b;
  }
`;
const StylePassword = styled.div`
  .ant-input-affix-wrapper {
    border: 1px solid #155263;
  }
  .ant-input {
    border: none !important;
  }
`;
export { StyleDetail, StyleNotification, StyleProfile, StylePassword };
