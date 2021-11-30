import Skeleton from 'react-loading-skeleton';
import React from "react";

// utils
import { IProps } from 'utils/Types';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
  src: string;
  alt: string;

  onLoad?: (event: Event) => void;
  placeholderHeight?: number;
}


export const Image = React.forwardRef<HTMLImageElement, Props & IProps>((props, ref) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const image = new window.Image();
  image.src = props.src;
  image.onload = (e) => {
    setLoading(false);
    if (props.onLoad) props.onLoad(e);
  }

  if (loading)
    return (
      <Skeleton
        width={props.width || "100%"}
        height={props.placeholderHeight || props.height || "auto"}
      />
    );
  else
    return (
      <img
        ref={ref}
        src={props.src}
        alt={props.alt}
        className={props.className}
        width={props.width || "100%"}
        height={props.height || "auto"}
      />
    );
});