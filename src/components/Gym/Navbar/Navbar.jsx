import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useAuth from "../../../Hooks/useAuth";
import DialogContext from "../../../contexts/DialogContext";
import { useContext } from "react";
import CustomizedDialogs from "../../UI/Dialog/DialogControl";
import Drawer from "@mui/material/Drawer";
import styles from "./Navbar.module.css";
import SubNavbar from "./SubNavbar";
import { useState } from "react";
import { useToast } from "../../../Hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import Scroll from "react-scroll";
import { useEffect } from "react";

const inlineStyles = {
  appBar: {
    position: "absolute",
    background: "transparent",
    boxShadow: "none",
    zIndex: 1,
    mt: "-1%",
  },
  navLinksContainer: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: { sm: "none", md: "space-evenly" },
    my: 3,
  },
  navLinkItems: {
    color: "white",
    display: "block",
    mr: "1.6%",
    fontWeight: 600,
    fontSize: "0.95rem",
    letterSpacing: "1.2px",
    // fontFamily: "Oswald, sans-serif",

    "&:hover": {
      color: "#f5634b",
    },
  },
  drawerContainer: {
    background: "rgba(0, 0, 0, 0.8)",
  },
  drawer: {
    width: 290,
    // border: "1px solid yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "520px",
    mt: "20%",
  },
  navbarVisibility: {
    position: "fixed",
    height: "60px",
    width: "100%",
    backgroundColor: "rgb(36, 36, 36)",
    textAlign: "center",
    transition: "top 0.6s",
    zIndex: "100",
  },
};

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const { currentUser, avatarInitial, setAvatarInitial, logOut } = useAuth();
  const dialogContext = useContext(DialogContext);
  const { handleMemberRegistration, setOpen, setMemberAuth, setResetPassword } =
    dialogContext;

  const navigate = useNavigate();
  const toastResponse = useToast();

  let ScrollLink = Scroll.Link;

  let type = "";
  let message = "";

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleRegister = (event) => {
    setOpen(true);
    handleMemberRegistration(event);
    handleCloseUserMenu();
  };

  const handleLogin = () => {
    setMemberAuth(false);
    setResetPassword(false);
    setOpen(true);
    // handleClickOpen();
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    console.log("In logout");

    if (currentUser) {
      logOut()
        .then((response) => {
          console.log("Response Logout:", response);
          toastResponse((type = "info"), (message = "Logged Out Successfully"));
          navigate("/");
          handleCloseUserMenu();
          setAvatarInitial("");
        })
        .catch((error) => {
          console.log("LogOut Error:", error);
        });
    } else {
      toastResponse((type = "info"), (message = "Please login First"));
      handleCloseUserMenu();
    }
  };

  const handleMobileScreenMenuForRegister = (event) => {
    handleDrawerToggle();
    handleRegister(event);
  };

  const handleMobileScreenMenuForLogin = () => {
    handleLogin();
    handleDrawerToggle();
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      style={{ ...inlineStyles.navbarVisibility, top: visible ? "0" : "-60px" }}
    >
      <div>
        <AppBar position="static" sx={{ ...inlineStyles.appBar }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              {/* Start- Navigation Drawer */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <div>
                  <React.Fragment>
                    <Drawer
                      anchor={"left"}
                      open={openDrawer}
                      onClose={handleDrawerToggle}
                      disableScrollLock={true} // prevents from locking of vertical scroll bar
                      PaperProps={{
                        sx: { ...inlineStyles.drawerContainer },
                      }}
                    >
                      <Box sx={{ ...inlineStyles.drawer }}>
                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Home
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleMobileScreenMenuForRegister}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Register
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleMobileScreenMenuForLogin}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Login
                          </Button>
                        </Link>

                        <ScrollLink
                          className={styles["drawer-nav-links"]}
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          duration={1500}
                        >
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            About
                          </Button>
                        </ScrollLink>

                        <ScrollLink
                          to="contact"
                          className={styles["drawer-nav-links"]}
                        >
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Contact
                          </Button>
                        </ScrollLink>
                      </Box>
                    </Drawer>
                  </React.Fragment>
                </div>
              </Box>
              {/* End Navigation Drawer */}

              {/* Logo */}
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              {/* Large Screen NavLinks */}
              <Box sx={{ ...inlineStyles.navLinksContainer }}>
                <Link style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ ...inlineStyles.navLinkItems }}
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                </Link>

                <Link style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ ...inlineStyles.navLinkItems }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </Link>

                <ScrollLink
                  style={{ textDecoration: "none" }}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <Button sx={{ ...inlineStyles.navLinkItems }}>About</Button>
                </ScrollLink>

                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ ...inlineStyles.navLinkItems }}>Contact</Button>
                </ScrollLink>
              </Box>

              {/* Avatar and context menu*/}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Personalised area">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={avatarInitial} src={avatarInitial} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  disableScrollLock={true} // prevents from locking of vertical scroll bar
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleRegister}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Register
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleLogin}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Login
                    </Typography>
                  </MenuItem>

                  <MenuItem /* onClick={handleNavigation} */>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Dashboard
                    </Typography>
                  </MenuItem>

                  <MenuItem onClick={handleLogout}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* Opens Dialog i.e for Authentication */}
        <CustomizedDialogs />
      </div>

      <SubNavbar />
    </div>
  );
};
export default Navbar;