import React, { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import {
  AppBar,
  Drawer as MUIDrawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  appbar: {
    height: "60px",
    backgroundColor: "white",
  },
  listflex: {
    width: "100%",
    float: "right",
    display: "flex",
    fontSize: "10px",
  },
  element: {
    color: "#4361EE",
    textAlign: "center",
    textTransform: "uppercase",
  },
  borderleft: {
    borderLeft: "2px solid black",
    width: "100px",
  },
  btnstyle: {
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
    },
  },
}));

const Header = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [state, setstate] = useState(false);

  const items = [
    {
      text: "Home",
    },
    {
      text: "Reminder",
    },
    {
      text: "About Us",
    },
    {
      text: "Contact us",
    },
    {
      icon: <ExitToAppIcon />,
      text: "Login",
      classname: "borderleft",
    },
  ];
  const itemdivlist = items.map((item) => {
    const { text } = item;
    return (
      <ListItem button key={text}>
        <ListItemText primary={text} />
      </ListItem>
    );
  });
  const Drawer = () => {
    return (
      <MUIDrawer anchor="left" open={state}>
        <button
          style={{
            backgroundColor: "#4CC9F0",
            border: "none",
            "&: hover": {
              backgroundColor: "#4361EE",
            },
          }}
          onClick={() => {
            setstate(false);
          }}
        >
          <Typography variant="h6" color="primary">
            <MenuIcon style={{ fontSize: "40px" }} />
          </Typography>
        </button>
        <List>{itemdivlist}</List>
      </MUIDrawer>
    );
  };
  const Appbarediv = () => {
    return (
      <Grid container>
        <Grid item md={4}>
          <Typography
            variant="h5"
            color="secondary"
            style={{ height: "50px", paddingTop: "5px" }}
          >
            Reminder<span>APP</span>
          </Typography>
        </Grid>

        <Grid item md={8} style={{}}>
          <Paper
            elevation={0}
            style={{
              width: "85%",
              height: "40px",
              float: "right",
            }}
          >
            <List className={classes.listflex} disablePadding>
              {items.map(({ text, classname }) => {
                if (classname) {
                  return (
                    <ListItem
                      button
                      className={clsx(classes.borderleft, classes.element)}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon
                          style={{ fontSize: "30px", color: "#F72585" }}
                        />
                      </ListItemIcon>
                    </ListItem>
                  );
                } else {
                  return (
                    <ListItem button>
                      <ListItemText
                        primary={text}
                        className={classes.element}
                      />
                    </ListItem>
                  );
                }
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  };

  const Mobilenavbar = () => {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnstyle}
        startIcon={<MenuIcon />}
        onClick={() => {
          setstate(true);
        }}
      >
        MENU
      </Button>
    );
  };
  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          {matches ? <Mobilenavbar /> : <Appbarediv />}
        </Toolbar>
      </AppBar>
      <Drawer />
    </>
  );
};

export default Header;
