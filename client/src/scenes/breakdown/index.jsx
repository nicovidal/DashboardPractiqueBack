import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { BreakdownChart } from "../../components/BreakdownChart";


export const Breakdown= () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdow of sales by category" />
      <Box mt="40px" height="75hv">
        <BreakdownChart />
      </Box>
    </Box>
  );
};
