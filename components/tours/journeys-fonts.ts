/**
 * 本模块职责：声明 Journeys 页专用字体，仅在该页面引入，不改变全站字体。
 * 不负责：字体的使用位置，由页面样式模块通过 CSS 变量引用。
 */

import { Jost, Newsreader } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jost",
});
