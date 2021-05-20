import React, { Fragment, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Results.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "black",
    color: theme.palette.common.white,
    fontFamily: "Poppins, sans-serif",
  },
  body: {
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Results = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const { repos } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      (repos.items && repos.items.length) - page * rowsPerPage
    );

  const rowLength =
    repos?.items && repos?.items.length > 0 ? repos?.items.length : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 9));
    setPage(0);
  };

  return (
    <Fragment>
      <TableContainer component={Paper} className="table" data-aos="fade-right">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell
                align="left"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Login
              </StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos?.items &&
              (repos?.items > 0
                ? repos?.items.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : repos?.items
              ).map((repo) => {
                return (
                  <StyledTableRow key={repo.id}>
                    <StyledTableCell component="th" scope="row">
                      <img src={repo.avatar_url} alt="repo" className="image" />
                    </StyledTableCell>
                    <StyledTableCell align="left" className="data">
                      {repo.login}
                    </StyledTableCell>
                    <StyledTableCell align="left" className="data">
                      {repo.type}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[9, 18, 36]}
          component="div"
          count={rowLength}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Fragment>
  );
};
export default Results;
