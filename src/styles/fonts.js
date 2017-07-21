import { fontFace } from "polished";
import { injectGlobal } from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL;

const fonts = [
  {
    family: `JeffreyMono-Book`,
    path: `${PUBLIC_URL}/fonts/JeffreyMono-Book`,
    formats: ["woff2", "woff", "ttf", "eot", "svg"],
    weight: 400,
    style: "normal"
  },
  {
    family: `JeffreyMono-Book`,
    path: `${PUBLIC_URL}/fonts/JeffreyMono-BookItalic`,
    formats: ["woff2", "woff", "ttf", "eot", "svg"],
    weight: 400,
    style: "italic"
  }
];

fonts.map(
  ({ family, path, formats, weight, style }) =>
    injectGlobal`${fontFace({
      fontFamily: family,
      fontFilePath: path,
      fileFormats: formats,
      fontWeight: weight,
      fontStyle: style
    })}`
);
