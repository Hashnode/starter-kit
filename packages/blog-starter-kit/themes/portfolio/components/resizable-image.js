import { ProgressiveImage } from './progressive-image';

function ResizableImage(props) {
  const { src, alt, resize, className, ...restOfTheProps } = props;

  return (
    <ProgressiveImage alt={alt} src={src || props.default} resize={resize} className={className} {...restOfTheProps} />
  );
}

export default ResizableImage;
export { ResizableImage };