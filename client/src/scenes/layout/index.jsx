import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "../../components/NavBar";
import { SideBar } from "../../components/SideBar";
import { useGetUserQuery } from "../../state/api.js";

export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const  {data} = useGetUserQuery(userId);
  console.log('data',data)
  

  return (
    <Box display={isNonMobile ? "flex" : "block "} width="100%" height="100%">
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box>
        <NavBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
