import React, { useContext } from "react";
import { Grid } from "@mui/material";
import {
  AreaChart,
  BarChart,
  DoughnutChart,
  LineChart,
  PieChart,
} from "../TabsComponents";
import { Slider } from "./Slider";
import { TabPanel } from "./TabPanel";
import { TabsData } from "../../context/TabsData";

export const TabsContainer = () => {
  const { pageNumber } = useContext(TabsData);

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Slider />
        </Grid>

        <Grid item xs={10}>
          <TabPanel value={pageNumber} index={0}>
            <LineChart />
          </TabPanel>
          <TabPanel value={pageNumber} index={1}>
            <BarChart />
          </TabPanel>
          <TabPanel value={pageNumber} index={2}>
            <AreaChart />
          </TabPanel>
          <TabPanel value={pageNumber} index={3}>
            <PieChart />
          </TabPanel>
          <TabPanel value={pageNumber} index={4}>
            <DoughnutChart />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};
