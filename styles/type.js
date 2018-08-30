// ----------------------------------------------------------------------------
// Type
// ----------------------------------------------------------------------------

import { lighten } from "polished";
import { mt } from "./utils/whitespace";
import space from "./utils/space";

const globalType = theme => {
  return `
    
    // Lists
    // ------
    ul,
    ol,
    dl {
      list-style-position: inside;
      line-height: inherit !important;
      margin-bottom: space(2);
    }
    
    ul,
    ol {
      list-style-type: disc;
      margin-left: 1.25rem !default;
    }
  `;
};

export default globalType;
