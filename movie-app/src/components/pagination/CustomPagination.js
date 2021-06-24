import { Pagination } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const CustomPagination = ({ setPage, noOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Pagination
          count={noOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
