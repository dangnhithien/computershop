import { Col } from "antd";
import SpinCustom from "components/spin/Spin";
import useSupplier from "hooks/useSupplier";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../../utils/const";
const StyleTag = styled.div`
  .broker-tag {
    padding: 8px 12px;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    -webkit-transition: background 0.2s ease, border-color 0.2s ease;
    transition: background 0.2s ease, border-color 0.2s ease;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    color: #000000a6;
    font-family: Haas Grot Text R Web, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-transform: capitalize;
    &:hover {
      color: #ff6a3c;
      border: 1px solid #ff6a3c;
    }
  }
`;
const TagSupplier = ({ request }) => {
  const { suppliers, isLoading } = useSupplier(request);

  return (
    <>
      {isLoading ? (
        <SpinCustom />
      ) : (
        <>
          {suppliers?.map((item, key) => {
            return (
              <Col key={key}>
                <StyleTag>
                  <Link to={PATH.PRODUCT} state={{ ["supplierId"]: item.id }}>
                    <div className="broker-tag">{item.name}</div>
                  </Link>
                </StyleTag>
              </Col>
            );
          })}
        </>
      )}
    </>
  );
};

export default TagSupplier;
