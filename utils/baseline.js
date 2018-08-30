// ----------------------------------------------------------------------------
// Space Unit
// ----------------------------------------------------------------------------

/**
This is used to calculate spacing and help maintain vertical rhythm.
Takes a factor, multiplies it with the current settings base spacing to output values that are multiples or dividends of the current vertical rhythm
@param {Number} $factor [1] A factor with which to multiply the base-spacing value
@return {Value} Value of base-spacing multiplied by the factor provided
*/

const unit = 8;

const typeUnit = 4;

export const space = n => {
  if (n === 0) {
    return "0px";
  }

  return `${unit * n}px`;
};

export const typeSpace = n => {
  if (n === 0) {
    return "0px";
  }

  return `${typeUnit * n}px`;
};

export default space;
