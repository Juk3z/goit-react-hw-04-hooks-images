import PropTypes from "prop-types";

function ImageGalleryItem({ openImage, url, id }) {
  const clickHandler = (evt) => {
    const clickedImageId = evt.target.id;
    openImage(clickedImageId);
  };

  return (
    <li key={id} className="ImageGalleryItem">
      <img
        onClick={clickHandler}
        id={id}
        src={url}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.defaultProps = {
  url: "https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg",
};

ImageGalleryItem.propTypes = {
  openImage: PropTypes.func.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
