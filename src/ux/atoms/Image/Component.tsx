import Skeleton from 'react-loading-skeleton';
import React from "react";

// utils
import { IProps } from 'utils/Types';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
  src: string;
  alt: string;

  onLoad?: (event: Event) => void;
  placeholderHeight?: number;
  placeholderWidth?: number;
}


export const Image = React.forwardRef<HTMLImageElement, Props & IProps>((props, ref) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  let { src } = props;
  if (window.location.host === "onkelhoy.github.io") {
    let slash = src[0] === '/' ? '' : '/';
    src = `/officina_alimentare_atomic${slash}${src}`
    console.log({ slash, src });
  }

  const image = new window.Image();
  image.src = src;
  image.onload = (e) => {
    setLoading(false);
    if (props.onLoad) props.onLoad(e);
  }

  const { placeholderWidth, placeholderHeight, className, ...rest } = props;
  if (loading)
    return (
      <Skeleton
        className={[className, "henry-image"].join(" ")}
        width={placeholderWidth || props.width || "100%"}
        height={placeholderHeight || props.height || "auto"}
      />
    );
  else
    return (
      <img
        {...rest}
        src={src}
        className={[className, "henry-image"].join(" ")}
        ref={ref}
        width={props.width || "100%"}
        height={props.height || "auto"}
      />
    );
});