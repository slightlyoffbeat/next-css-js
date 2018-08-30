import { darken } from "polished";

// Colors
// -------------------------
const colors = {
  primary: "#3399ff",
  white: "#fff",
  black: "#000"
};

// Type
// -------------------------
const baseLineHeight = 1.5;
const sansSerif = "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
const serif = "'Cambria', 'Georgia', 'serif'";

const typography = {
  baseFontSize: 16,
  baseLineHeight,
  baseFontColor: colors.black,
  scale: 1.414,
  leading: `${baseLineHeight}rem`,
  sansSerif,
  serif,
  baseFontFamily: sansSerif,
  headerFontFamily: sansSerif,
  baseBoldWeight: 600,
  baseLinkColor: colors.primary,
  baseLinkHover: darken(0.1, colors.primary)
};

// Breakpoints
// -------------------------
const breakpoints = {
  xsmall: 450,
  small: 750,
  medium: 950,
  large: 1200
};

// Defaults
// -------------------------
const defaults = {
  spacing: typography.leading,
  baseRadius: 2,
  baseTime: "0.3s",
  baseEase: "ease",
  baseUnitRem: ".5"
};

// Style
// -------------------------
const style = {
  bodyBackground: colors.white
};

// Z-Index
// -------------------------
const zIndex = {
  bury: -1,
  content: 10,
  header: 20,
  modal: 40
};

const theme = {
  colors,
  typography,
  breakpoints,
  defaults,
  style,
  zIndex
};

export default theme;
