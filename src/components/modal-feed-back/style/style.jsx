import styled from "styled-components";
const StyleFeedback = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .title {
    font-size: 20px;
    color: black;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .emoji {
    font-size: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #d8ff00;
    margin-top: 15px;
    .icon {
      opacity: 0.1;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
    .active {
      opacity: 1;
    }
  }
  .content {
    label {
      font-size: 18px;
      color: #00000061;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
  .send {
    position: absolute;
    bottom: -75px;
    left: 40%;
    color: #fff;
    background: #36ce36;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    font-size: 18px;

    cursor: pointer;
    &:hover {
      background-color: #26ff26;
    }
  }
`;
const StyleRate = styled.div`
  font-size: 12px;
  margin-top: 5px;

  .ant-rate-star:not(:last-child) {
    margin-right: 3px;
  }
  .ant-rate {
    font-size: ${(props) => (props.size ? props.size + "px" : "16px")};
  }
  .rates {
    margin-left: 10px;
    font-size: 12px;
  }
`;
const StyleCommentAction = styled.span`
  display: flex;
  .comment-action {
    padding-left: 8px;
    cursor: "auto";
    line-height: 10px;
  }

  [class*="-col-rtl"] .comment-action {
    padding-right: 8px;
    padding-left: 0;
  }
`;
const StyleComment = styled.div`
  .overview {
    background-color: #fff;
    min-height: 75px;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    border-radius: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  .briefing {
    text-align: center;
    margin-right: 30px;
    margin-top: -30px;
    margin-bottom: -30px;
    padding: 30px 60px 30px 30px;
    border-right: 1px solid #d9d9d9;
  }
  .filters {
    flex: 1;
    margin-left: 10px;
  }
  .filters-item {
    margin-right: 10px;
  }
`;
export { StyleFeedback, StyleRate, StyleComment, StyleCommentAction };
