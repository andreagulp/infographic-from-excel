import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
    padding: theme.spacing(3, 2)
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

const TopProjects = ({ topProjects }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Top 10 Projects
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Idea Title</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Project Manager</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topProjects.map(proj => (
              <TableRow key={proj.id}>
                <TableCell component="th" scope="row">
                  {proj.Title}
                </TableCell>
                <TableCell align="right">{proj.Status}</TableCell>
                <TableCell align="right">{proj.Total_FY_Benefits}</TableCell>
                <TableCell align="right">{proj.Brand}</TableCell>
                <TableCell align="right">{proj.Project_Manager}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default TopProjects;
