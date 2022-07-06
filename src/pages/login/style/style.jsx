import styled from "styled-components";

const StyleBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 5px;
  flex-wrap: wrap;
  a {
    margin: 0 8px;
  }
  span {
    display: block;
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
`;
const StyleLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1546432507-bd9e20b3c78b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  .wrapper {
    width: 500px;
    min-height: 600px;
    margin: auto;
    background: #ffffffed;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    font-size: 16px;

    .logo {
      font-size: 25px;
      color: #ff6a3c;
      text-shadow: -2px 1px 0px #c9363d47;
      font-family: "Pacifico", cursive;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: #ff6a3c;
    }
    .socical {
      span {
        display: block;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
      }
      svg {
        height: 50px;
        width: 50px;
      }
    }
    a.text {
      margin-top: 15px;
      display: block;
      text-transform: uppercase;
      text-decoration: underline;
      letter-spacing: 2px;
      &:hover {
        color: #ff6a3c;
      }
    }
  }
`;
const StyleForm = styled.div`
  input.ant-input {
    border-radius: 0;
    background-color: transparent;
  }
  span.ant-input-affix-wrapper {
    border: none;
    border-bottom: 1px solid #c3c3c3;
    background-color: transparent;
  }
  .ant-input-affix-wrapper-focused {
    border: none;
  }
  .text-small {
    display: block;
    text-align: left;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
  }
  a.login-form-forgot.text-small {
    text-align: end;
  }
  .btn {
    color: #333;
    border: none;
    font-size: 16px;
    width: 80%;
    height: 40px;
    text-transform: uppercase !important;
    background: #ff6a3c;
    border-radius: 60px;
    span {
      text-transform: uppercase;
      color: #fff;
    }
    &:hover {
      background-color: #ff9a3c;
    }
  }
`;
const StyleView = styled.div`
  .confirm-email {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .ant-input-number.number {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin: 8px;
    border-radius: 6px;
    display: inline-block;
    input {
      text-align: center;
      font-weight: bold;
    }
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .numbers {
    display: flex;
  }
  .title {
    color: #155263;
  }
  .btn {
    background: #ff6a3c;
    color: #fff;
    border: none;
    border-radius: 6px;
    width: 125px;
    height: 40px;
    &:hover {
      background-color: #ff9a3c;
    }
  }
`;
export { StyleBtnLink, StyleForm, StyleLogin, StyleView };
