import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    // minWidth: 275,
    // marginTop: 10,
    // marginBottom: 10
    textAlign: "center"
  }
};

function SimpleCard({ classes, dataValueStatus }) {
  return (
    <Grid container spacing={3}>
      {dataValueStatus.map(status => {
        return (
          <Grid key={status.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {status.Status}
                </Typography>
                <Typography component="p">{`${status.Total.toFixed()} Hrs`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default withStyles(styles)(SimpleCard);
