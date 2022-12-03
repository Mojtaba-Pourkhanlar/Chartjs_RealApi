import { Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import { TabsData } from "../../../context/TabsData";

export const Slider = () => {
  const { pageNumber, handlePageNumber } = useContext(TabsData);

  const tabProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  const tabComponent = [
    { label: "Line Chart", ...tabProps(0) },
    { label: "Bar Chart", ...tabProps(1) },
    { label: "Area Chart", ...tabProps(2) },
    { label: "Pie Chart", ...tabProps(3) },
    { label: "Doughnut Chart", ...tabProps(4) },
  ];

  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        textColor="secondary"
        value={pageNumber}
        onChange={handlePageNumber}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}>
        {tabComponent.map((tab, index) => (
          <Tab label={tab.label} key={index} />
        ))}
      </Tabs>
    </>
  );
};
