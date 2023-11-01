import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Category = {
  title: string;
  products: {
    id: number;
    image: any;
    title: string;
    price: string;
    category: string;
  }[];
};

export type Product = {
  id: number;
  image: any;
  title: string;
  price: string;
  category: string;
};
