import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "../../../../routes/components/MenuLink";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuLink
          text="אודות"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {!user && (
          <>
            <MenuLink
              text="כניסה לאזור האישי"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="הצטרפות"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
       
        {user && user.isBusiness && (
          <MenuLink
            text="הבקשות שלי"
            navigateTo={ROUTES.MY_CARDS}
            onClick={onClose}
          />
        )}
        {user && user.isAdmin && (
          <>
            <MenuLink text="ניהול לקוחות" navigateTo={ROUTES.CRM} onClick={onClose} />
            <MenuLink text="ניהול בקשות" navigateTo={ROUTES.CRM_REQ} onClick={onClose} />

          </>
        )}
         {user && (
          <>
            <MenuLink
              text="פרטים אישיים"
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
            />
            <MenuLink
              text="עריכת משתמש"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose}
            />
         
            <MenuItem onClick={onLogout}>יציאה</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
