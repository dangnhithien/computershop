import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { StyleBoxProduct } from "./style/style";
import { Col, Row } from "antd";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
const StyleBanner = styled.div`
  .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: 100%;
  }
`;
const images = [
  {
    original:
      "https://hanoicomputercdn.com/media/banner/26_Jan8d7f2b0ef863dc27f6aec1a99271c2b3.png",
  },
  {
    original:
      "https://hanoicomputercdn.com/media/banner/06_Juldeb6f9166ebe1f5064d0671eeb038b04.png",
  },
  {
    original:
      "https://hanoicomputercdn.com/media/banner/10_Jundeb6f9166ebe1f5064d0671eeb038b04.png",
  },
  {
    original:
      "https://hanoicomputercdn.com/media/banner/20_Juned75375d994936c22bbe17181f9c0292.jpg",
  },
];
const BoxProduct = () => {
  return (
    <StyleBoxProduct>
      <Row gutter={[8, 8]} className="vertical">
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
        <Col span={6}>
          <Row gutter={[8, 8]} justify="center" style={{ height: "100%" }}>
            <Col span={24}>
              <Link to="">
                <img src="https://cdn.mediamart.vn/images/banner/laptop-dell-t7_5f1c37b6.jpg" />
              </Link>
            </Col>
            <Col span={24}>
              <Link to="">
                <img src="https://cdn.mediamart.vn/images/banner/laptop-online-t5_a19066a1.jpg" />
              </Link>
            </Col>
            <Col span={24}>
              <Link to="">
                <img src="https://hanoicomputercdn.com/media/banner/01_Jul6fae3a2bfc0b221d72e955d98ce7fa95.png" />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyleBoxProduct>
  );
};

export default BoxProduct;
