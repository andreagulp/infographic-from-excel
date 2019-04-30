import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart
} from "recharts";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10
  }
}));

const ValueChart = ({ dataValueMarket }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Value by Market
        </Typography>
        <div style={{ width: "100%", height: 300, fontSize: "70%" }}>
          <ResponsiveContainer>
            <ComposedChart
              width={800}
              height={500}
              data={dataValueMarket}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="Market"
                orientation="top"
                padding={{ left: 10 }}
              />
              <YAxis />
              <Legend />
              <Tooltip />
              <Bar dataKey="Deployed" stackId="a" fill="#badb73" />
              <Bar dataKey="Backlog" stackId="a" fill="#ee8f5c" />
              <Bar dataKey="Discovery" stackId="a" fill="#98e9f0" />
              <Bar dataKey="In_Progress" stackId="a" fill="#497479" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </div>
  );
};

export default ValueChart;
