import styled from "styled-components";

const StyleCarousel = styled.div`
  height: 428px;
  cursor: pointer;
  img {
    height: 100%;
    aspect-ratio: 3/4;
    box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
      rgb(145 158 171 / 12%) 0px 12px 24px -4px;
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
