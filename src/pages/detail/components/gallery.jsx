import ImageGallery from "react-image-gallery";
import { StyleGallery } from "../style/style";

const images = [
  {
    original: "https://pro2.vina9.com/50678/2583137_851813.jpg",
    thumbnail: "https://pro2.vina9.com/50678/2583137_851813.jpg",
  },
  {
    original:
      "https://zshop.vn/images/thumbnails/624/460/detailed/51/microsoft_thh_00035_12_4_multi_touch_surface_laptop_1593598_v73b-kf.jpg",
    thumbnail:
      "https://zshop.vn/images/thumbnails/624/460/detailed/51/microsoft_thh_00035_12_4_multi_touch_surface_laptop_1593598_v73b-kf.jpg",
  },
  {
    original:
      "https://chonthuonghieu.com/wp-content/uploads/listing-uploads/cover/2022/02/th-bien-hoa.jpg",
    thumbnail:
      "https://chonthuonghieu.com/wp-content/uploads/listing-uploads/cover/2022/02/th-bien-hoa.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <StyleGallery>
        <ImageGallery
          showNav={false}
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </StyleGallery>
    </>
  );
};

export default Gallery;
