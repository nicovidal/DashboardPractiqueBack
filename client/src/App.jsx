import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { Dashboard } from "./scenes/dashboard/index.jsx";
import { Layout } from "./scenes/layout/index.jsx";
import { Products } from "./scenes/products/index.jsx";
import { Customers } from "./scenes/customers/index.jsx";
import { Transactions } from "./scenes/transactions/index.jsx";
import { Geography } from "./scenes/geography/index.jsx";
import { Overview } from "./scenes/overview/index.jsx";

export const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
