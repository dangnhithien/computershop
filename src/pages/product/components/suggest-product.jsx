import styled from "styled-components";

const StyleCarousel = styled.div`
  height: 430px;
  cursor: pointer;
  img {
    height: 100%;
    aspect-ratio: 3/4;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
  }
`;

const Suggest = () => {
  return (
    <>
      <StyleCarousel>
        <img
          src="https://cdn.create.vista.com/common/6d961d83-342f-4237-bc0a-3d8ff2caa27f_640.jpeg"
          alt="images
        "
        />
      </StyleCarousel>
    </>
  );
};

export default Suggest;
