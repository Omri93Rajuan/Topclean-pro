import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="אודות" />
        <NavItem to={ROUTES.FAV_CARDS} label="צור קשר" />

        {user && user.isBusiness && (
          <NavItem to={ROUTES.MY_CARDS} label="בקשות אישיות" />
        )}
        {user && user.isAdmin && <NavItem to={ROUTES.CRM} label="ניהול לקוחות"/>}
        {user && user.isAdmin && <NavItem to={ROUTES.CRM_REQ} label="ניהול בקשות" />}

      </Box>
    </Box>
  );
};

export default LeftNavBar;
