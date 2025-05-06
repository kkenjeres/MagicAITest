import React from "react";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";

export type IconProps = {
  src: StaticImageData | string;
  alt?: string;
  className?: string;
};
export const Icon: React.FC<IconProps> = ({ src, alt = "icon", className }) => {
  return (
    <Image src={src} alt={alt} width={28} height={28} className={cn('cursor-pointer',className)}/>
  );
};
