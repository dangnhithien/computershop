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
      border: 1px solid rgba(145, 158, 171, 0.32);
      text-align: center;
      width: 150px;
      font-weight: 600;
      border-radius: 6px;
      padding: 5px;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #ff9a3c;
        color: #fff;
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
    border: 1px solid rgba(145, 158, 171, 0.32);
    background-color: #fff;
    border-radius: 6px;
    /* min-height: 300px; */
    padding: 20px;
    .btn-save {
      border: none;
      background: #ff6a3c;
      color: #fff;
      width: 70px;
      text-transform:capitalize &:hover {
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
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(145, 158, 171, 0.32);
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
    max-height: 400px;
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
    border-bottom: 1px solid #f1f1f1;
    padding: 8px;
    margin: 4px 0;
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
  .label {
    font-size: 16px;
    font-weight: 600;
    color: #155263;
    display: block;
  }
`;
const StyleDetail = styled.div`
  .wapper {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px;
    margin-right: 5px;

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
  .item {
    border: 1px solid #f1f1f1;
    padding: 5px;
    border-radius: 6px;
  }
`;
const StyleNotification = styled.div`
  border: 1px solid #f1f1f1;
  padding: 12px 0 12px 12px;
  border-radius: 6px;

  cursor: pointer;
  &:hover {
    background-color: #e8f4fb;
  }

  svg {
    margin-left: 12px;
    width: 15px;
    height: 15px;
    color: #cdad3b;
  }
`;
const StylePassword = styled.div`
  .ant-input-affix-wrapper {
    border-radius: 4px;
  }
`;
export { StyleDetail, StyleNotification, StyleProfile, StylePassword };
