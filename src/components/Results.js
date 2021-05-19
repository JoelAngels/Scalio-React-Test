import React, { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
  },
});

const Results = (props) => {
  const { repos } = props;
  const classes = useStyles(); //programmers hangout

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell align="left">Login</StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.items &&
              repos.items.map((repo) => {
                return (
                  <StyledTableRow key={repo.id}>
                    <StyledTableCell component="th" scope="row">
                      {repo.avatar_url}
                    </StyledTableCell>
                    <StyledTableCell align="left">{repo.login}</StyledTableCell>
                    <StyledTableCell align="left">{repo.type}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default Results;
