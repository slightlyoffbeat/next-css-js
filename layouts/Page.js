import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// Theme Styles
import theme from "~/config/theme";

// Import CSS reset and Global Styles
import "~/config/global-styles";

// componenets
import Meta from "~/components/Meta";

class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
