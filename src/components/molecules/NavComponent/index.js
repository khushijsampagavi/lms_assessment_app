import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ReusableUlLayout from "../../pages/ReusableUILayout";
import { useUser } from "../../../context/useUser";
import { useLoginType } from "../../../context/useLoginType";

export default function NavComponent(props) {
  const { menuProps, menuItemProps, iconButtonProps } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {user, setUser}=useUser();
  const {loginType, setLoginType}=useLoginType();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#8879B0" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
          {...iconButtonProps}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Assessment App
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
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
          open={open}
          onClose={handleClose}
          {...menuProps} // Spread menuProps to Menu
        >
          <MenuItem onClick={handleClose} {...menuItemProps}>
          <div style={{ textAlign: 'center',fontSize: '1.8rem', }}>
    <div style={{
      border: '2px black', 
      borderRadius: '20px',
      padding: '40px',
    
      
      margin: 'auto',
    }}>                                   
   <div style={{ backgroundColor: 'lightblue' }}>
   <br></br>
        <p>{user.emailId}</p>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '70%',
          backgroundColor: 'blue', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          color: 'white', 
          margin: 'auto',
        }}>
         {user.emailId.charAt(0).toUpperCase()}
        </div>
        <div style={{ backgroundColor: '1px solid #ccc' }}>
        </div>
        <p>{loginType}</p>
       <br/>
        <p>Welcome User</p>
        <br></br>
        {/*<div style={{ marginTop: '150px' }}/>*/}
      </div>
    </div>
    </div>
          </MenuItem>
          {/* <MenuItem onClick={handleClose} {...menuItemProps}>
            My account
          </MenuItem> */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
