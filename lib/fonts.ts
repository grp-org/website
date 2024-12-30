import {
  JetBrains_Mono as FontMono,
  Manrope as FontSans,
  Libre_Baskerville as FontSerif,
  Lexend_Giga as FontWide,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontWide = FontWide({
  subsets: ["latin"],
  variable: "--font-wide",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
