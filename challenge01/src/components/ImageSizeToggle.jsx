import useImageSizeContext from "../contexts/ImageContext/useImageSizeContext";
const ImageSizeToggle = () => {
  const { isLarge, setIsLarge } = useImageSizeContext();

  return (
    <label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(event) => {
          setIsLarge(event.target.checked);
        }}
      />
      Use large images
    </label>
  );
};

export default ImageSizeToggle;
