// MainLayout.jsx
import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Import your Footer component

const MainLayout = ({ children }) => {
  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item sx={{ mt: 10 }} xs>
        {/* Main content */}
        {children}
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
