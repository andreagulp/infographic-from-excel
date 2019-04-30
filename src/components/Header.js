import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 10,
    marginTop: 10
  },
  appBar: {
    alignItems: "center"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar>
          <Typography variant="h2" color="inherit">
            Kaizen Result
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
