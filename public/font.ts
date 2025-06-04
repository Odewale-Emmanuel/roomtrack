import {
  Geist,
  Geist_Mono,
  Inter,
  Offside,
  Modak,
  Roboto_Slab,
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const offside = Offside({
  variable: "--font-offside",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const modak = Modak({
  variable: "--font-modak",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const Font = {
  geistMono: geistMono,
  geistSans: geistSans,
  inter: inter,
  offside: offside,
  modak: modak,
  robotoSlab: robotoSlab,
};

export default Font;
