import catrielonline from "@assets/catrielonline.webp"
import dolcemora from "@assets/dolcemora.webp"
import vuepa from "@assets/vuepa.webp"


export interface Props {
  title: string;
  img: any;
}
export type Img = Props;

export const images: Props[] = [
  {
    title: "catrielonline",
    img: catrielonline,
  },
  {
    title: "dolcemora",
    img: dolcemora,
  },
  {
    title: "vuepa",
    img: vuepa,
  },
];
