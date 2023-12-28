import { ResponsiveLine} from "@nivo/line"
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "../state/api";
import { useMemo } from "react";

export const OverviewChart = ({isDashboard=false,view}) => {

  const theme=useTheme();
  const {data,isLoading}=useGetSalesQuery();


  const [totalSelesLIne,totalUnitsLine]=useMemo(()=>{
    if(!data) return [];

    const {mondlyData}=data;
    const totalSalesLine={
      id:"totalSales",
      color:theme
    }
  },[data])


  return (
    <div>OverviewChart</div>

  )
}
