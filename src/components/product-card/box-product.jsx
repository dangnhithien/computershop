import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { StyleBoxProduct } from "./style/style";
import { Col, notification, Row } from "antd";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
const StyleBanner = styled.div`
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: 100%;
  }
`;
const images = [
  {
    original: "https://picsum.photos/800/400",
  },
  {
    original: "https://picsum.photos/800/400",
  },
  {
    original: "https://picsum.photos/800/400",
  },
  {
    original: "https://picsum.photos/800/400",
  },
  {
    original: "https://picsum.photos/800/400",
  },
];
const BoxProduct = () => {
  return (
    <StyleBoxProduct>
      <Row gutter={[8, 8]} className="vertical">
        <Col span={6}>
          <Row gutter={[8, 8]} justify="center" style={{ height: "100%" }}>
            <Col span={24}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
            <Col span={24}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
            <Col span={24}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col span={18}>
          <StyleBanner>
            <ImageGallery
              items={images}
              showBullets={true}
              showNav={false}
              showThumbnails={false}
              autoPlay={true}
              showPlayButton={false}
              showFullscreenButton={false}
              slideInterval={10000}
              slideDuration={1000}
            />
          </StyleBanner>
        </Col>
        <Col span={24} className="horizon">
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
            <Col span={8}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
            <Col span={8}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul669997a67126fe62d8b44c63e2f89fd8.png" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyleBoxProduct>
  );
};

export default BoxProduct;
