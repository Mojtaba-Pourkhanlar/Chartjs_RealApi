import { useEffect, useState } from "react";
import { TabsContainer } from "./components/Tabs/TabsContainer";
import { TabsData } from "./context/TabsData";
import { getAllCoins } from "./services/api";

const ChartContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await getAllCoins();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TabsData.Provider
      value={{
        pageNumber,
        handlePageNumber,
        coins,
        setCoins,
        loading,
        setLoading,
      }}>
      <TabsContainer />
    </TabsData.Provider>
  );
};

export default ChartContainer;
