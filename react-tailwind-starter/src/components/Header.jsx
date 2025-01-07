import PropTypes from "prop-types";
import Box from "./Box";

function Header({ title = "제목을 입력해주세요" }) {
  return (
    <Box className={"mb-2 border-neutral-400 bg-neutral-400 m-2"}>
      <h1 className="md:text-5xl text-3xl font-ownglyph_meet hover:font-yoonchild  text-neutral-100 py-4">
        [ {title} ]를 알아보아요
      </h1>
    </Box>
    // <div className="flex justify-center items-center border-b-[1px] bg-neutral-500 mb-2">

    // </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
