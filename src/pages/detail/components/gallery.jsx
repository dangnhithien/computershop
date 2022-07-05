import ImageGallery from "react-image-gallery";
import { StyleGallery } from "../style/style";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <>
      <StyleGallery>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </StyleGallery>
    </>
  );
};

export default Gallery;
