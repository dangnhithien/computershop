import { Button, Col, Row } from "antd";
import { GiMouse } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BtnSearch from "../../components/search/btn-search";
import useStore from "../../store/personal";
const Logo = styled.div`
  .logo-9 {
    position: relative;
  }
  .icon-bell {
    font-size: 100px;
    position: absolute;
    z-index: 0;
    text-align: center;
    width: 100%;
    left: -45px;
    top: -36px;
    color: #34495e;
    -webkit-animation: ring 2s ease infinite;
    animation: ring 2s ease infinite;
  }
  .logo-9 .logos {
    font-family: "Lora", serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 30px;
    position: relative;
    z-index: 1;
    color: #e74c3c;
    text-shadow: 20px 2px 0 #fff, -3px 2px 0 #fff, 0px 2px 0 #fff,
      -5px 0px 0 #fff;
  }
  @-webkit-keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    2% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    4% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    6% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    8% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    10% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    12% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    14% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    18% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    100%,
    20% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
  @keyframes ring {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    2% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    4% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    6% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    8% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    10% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    12% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    14% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    18% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    100%,
    20% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
  }
`;
const StyledBtn = styled.div`
  text-align: end;
  .singup {
    background: #fafafa;
    border: 1px solid #333333;
    color: #333333;
    font-size: 16px;
    &:hover {
      color: #ea1c26;
      border: 1px solid #ea1c26;
    }
  }

  .singin {
    background: #333333;
    border: 1px solid #c1c1c1;
    font-size: 16px;
    &:hover {
      background-color: #ea1c26;
    }
  }
  .logout {
    font-size: 16px;
    border: none;
    color: black;
    &:hover {
      color: #ea1c26;
    }
  }
`;
const HeaderCenter = () => {
  const userProfile = useStore((state) => state.profile);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  console.log(userProfile);
  return (
    <>
      <div className="header-center">
        <div className="container">
          <Row gutter={[24, 0]} style={{ alignItems: "center" }}>
            <Col span={6}>
              <Logo>
                <div className="logo-holder logo-9">
                  <Link to="">
                    <span>
                      <GiMouse className="icon-bell" />
                    </span>
                    <div className="logos">TotoStore</div>
                  </Link>
                </div>
              </Logo>
            </Col>
            <Col span={10}>
              <BtnSearch />
            </Col>
            <Col span={2} />
            <Col span={6}>
              {Object.keys(userProfile).length != 0 ? (
                <>
                  <StyledBtn>
                    <Button className="logout" onClick={logout}>
                      <FiLogOut />
                      Đăng xuất
                    </Button>
                  </StyledBtn>
                </>
              ) : (
                <Row gutter={[24, 0]}>
                  <Col span={12}>
                    <StyledBtn>
                      <Button size="large" type="primary" className="singup">
                        <Link to="/dang-ki">Đăng kí</Link>
                      </Button>
                    </StyledBtn>
                  </Col>
                  <Col span={12}>
                    <StyledBtn>
                      <Button size="large" type="primary" className="singin">
                        <Link to="/dang-nhap">Đăng nhập</Link>
                      </Button>
                    </StyledBtn>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HeaderCenter;
