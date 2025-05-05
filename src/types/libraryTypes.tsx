import { StaticImageData } from "next/image";

export type LibraryItem = {
  id: string;
  name: string;
  image: StaticImageData | string;
  publisher: StaticImageData;
  date: string;
};