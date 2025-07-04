import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import NavComponent from "../molecules/NavComponent";
import { Link, useNavigate } from "react-router-dom";
import { useLoginType } from "../../context/useLoginType";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: -drawerWidth,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function LayoutSidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { loginType, setLoginType } = useLoginType();

  useEffect(() => {
    loginType === "TEACHER" ? navigate("/dashboard") : navigate("/TakeAssesment");
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinks = loginType === "TEACHER"
    ? [
      { title: "Dashboard", to: "/dashboard" },
      { title: "Question Management", to: "/QuestionManagement" },
      { title: "Student Management", to: "/StudentManagement" },
      { title: "Teacher Management", to: "/TeacherManagement" },
      { title: "Test Management", to: "/TestManagement" },
    ]
    : [{ title: "Take Assessment", to: "/TakeAssesment" }];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavComponent iconButtonProps={{ onClick: handleDrawerOpen }} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F8F6F4",
            color: "#5534A5",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Assessment App
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navLinks.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#8879B0",
                  color: "white",
                },
                color: "inherit",
                textDecoration: "none",
              }}
              component={Link}
              to={item.to}
            >
              <ListItemText primary={<Typography variant="subtitle1">{item.title}</Typography>} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={!open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
