import theme from "~/config/theme";

const { scale, baseFontSize } = theme.typography;

const typeSize = n => {
  return `${Math.round(baseFontSize * Math.pow(scale, n))}px`;
};

export default typeSize;
