import { Alegreya, Alegreya_Sans, Special_Elite } from "next/font/google";

export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export const alegreya = Alegreya({ subsets: ["latin"] });

export const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: "500",
});
