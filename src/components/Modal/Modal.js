import { useEffect } from "react";
import PropTypes from "prop-types";

function Modal({ modalToggle, url }) {
  useEffect(() => {
    const keyDownHandler = (evt) => {
      if (evt.code === "Escape") {
        modalToggle();
      }
    };
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [modalToggle]);

  const clickHandler = (evt) => {
    if (evt.target === evt.currentTarget) {
      modalToggle();
    }
  };

  return (
    <div onClick={clickHandler} className="Overlay">
      <div className="Modal">
        <img src={url} alt="full size" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  modalToggle: PropTypes.func.isRequired,
};

export default Modal;
