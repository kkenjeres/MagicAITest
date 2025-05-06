import Image, { StaticImageData } from "next/image";
import cn from "classnames";

interface IconProps {
  src: StaticImageData | string;
  alt?: string;
  className?: string;
}

export const Icon = ({ src, alt = "icon", className }: IconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={28}
      height={28}
      className={cn("cursor-pointer", className)}
    />
  );
};