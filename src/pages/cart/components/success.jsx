import { CheckCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSuccess = styled.div`
  &.payment {
    min-height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 2rem;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .form-payment {
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    max-width: 600px;
    width: 100%;
    font-size: 1.2rem;
    margin: auto;
    padding: 2rem 3rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    table {
      width: 100%;
      margin-bottom: 2rem;
      tr {
        td:first-child {
          color: rgb(170, 151, 151);
          text-align: left;
        }
        td:last-child {
          color: rgb(102, 93, 93);
          text-align: right;
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 3rem 0;
      a {
        padding: 0.8rem 1.2rem;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        border: 1px solid #e260f3;
        background-color: #e260f3;
        &:hover {
          background-color: rgb(202, 75, 219);
        }
        &:first-child {
          background-color: #fff;
          margin-right: 5px;
          color: #647bff;
          border: 1px solid #647bff;
          &:hover {
            background-color: rgba(240, 240, 240, 0.897);
          }
        }
      }
    }
    .icon-check {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      color: #ff6a3c;
      margin-bottom: 1rem;
    }
    .title-payment {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: #ff6a3c;
      margin-bottom: 4rem;
    }
    .paid {
      padding: 1rem 0;
      font-size: 2rem;
      font-weight: 700;
      border-top: 1px solid rgb(204, 186, 186);
    }
  }
`;

const Success = ({ details }) => {
  const {
    update_time,
    payer: {
      name: { given_name, surname },
    },
    purchase_units,
  } = details;

  const currency = purchase_units[0].amount.currency_code;
  const price = parseFloat(purchase_units[0].amount.value).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    }
  );
  const buyTime = moment(update_time).format("DD-MM-YYYY MM:ss A");

  return (
    <StyledSuccess className="payment">
      <div className="form-payment">
        <div className="icon-check">
          <CheckCircleOutlined />
        </div>
        <div className="title-payment">
          <span>Thanh toán thành công</span>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Thời gian thanh toán</td>
              <td>{buyTime}</td>
            </tr>
            <tr>
              <td>Khách hàng</td>
              <td>{given_name + " " + surname}</td>
            </tr>
            <tr>
              <td>Phương thức thanh toán</td>
              <td>Paypal</td>
            </tr>
            <tr>
              <td>Số tiền thanh toán</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <Link to="/" className="print">
            Trở về
          </Link>
        </div>
      </div>
    </StyledSuccess>
  );
};

export default Success;
