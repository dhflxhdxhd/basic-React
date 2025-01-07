import PropTypes from "prop-types";

const Box = ({ children, className }) => {
  return (
    <div
      className={`h-32 border-2 border-neutral-300 rounded-md text-2xl flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Box;
