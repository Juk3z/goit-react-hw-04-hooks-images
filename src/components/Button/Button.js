import { useEffect } from "react";
import PropTypes from "prop-types";

function Button({ totalElements, onClick, text }) {
  useEffect(() => {
    if (totalElements > 10) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [totalElements]);

  return (
    <button className="Button" onClick={onClick} type="button">
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Just Button",
  totalElements: 1,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  totalElements: PropTypes.number,
};

export default Button;
