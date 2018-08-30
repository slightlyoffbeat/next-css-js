// ----------------------------------------------------------------------------
// Whitespace
// ----------------------------------------------------------------------------
/**
This is to help create a simple system for whitespace for blocks. It needs a
single variable: $whitespace
Shorthand Description:
m  Margin
p  Padding
t  Top
r  Right
b  Bottom
l  Left
x  X-axis (left and right)
y  Y-axis (top and bottom)
1  Whitespace Unit * 1
2  Whitespace Unit * 2
etc
EX: (assuming $whitespace = 12px)
.mt4 == margin-top: 48px;
.pl1 == padding-left: 12px;
.py2 == padding-top: 24; padding-bottom: 24px;
*/

const whitespace = 4;

const mt = n => {
  return `margin-top: ${whitespace * n}`;
};

export { mt };
