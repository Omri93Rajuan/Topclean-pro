import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem label="הרשמה" to={ROUTES.SIGNUP} />
      <NavItem label="כניסה לאזור האישי" to={ROUTES.LOGIN} />
    </Box>
  );
};

export default NotLogged;
