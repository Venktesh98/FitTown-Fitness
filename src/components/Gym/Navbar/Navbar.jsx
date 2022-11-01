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
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import DialogContext from "../../../contexts/DialogContext";
import { useContext } from "react";
import CustomizedDialogs from "../../UI/Dialog/DialogControl";
import Drawer from "@mui/material/Drawer";
import styles from "./Navbar.module.css";
import SubNavbar from "./SubNavbar";
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

const Navbar = ({ showNavbar, showNavbarYaxis }) => {
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const { logOut } = useAuth();
  const navigate = useNavigate();

  const dialogContext = useContext(DialogContext);

  const { handleMemberRegistration, setOpen, setMemberAuth, setResetPassword } =
    dialogContext;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleNavigation = () => {
    console.log("In navigation");
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
    logOut()
      .then((response) => {
        console.log("Response Logout:", response);
        navigate("/");
        handleCloseUserMenu();
      })
      .catch((error) => {
        console.log("LogOut Error:", error);
      });
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    console.log("currentScrollPos:", currentScrollPos);

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  console.log("PrevScrollPosition:", prevScrollPos);

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
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            About
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Services
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Trainers
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Pricing
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Gallery
                          </Button>
                        </Link>

                        <Link className={styles["drawer-nav-links"]}>
                          <Button
                            onClick={handleDrawerToggle}
                            sx={{ ...inlineStyles.navLinkItems }}
                          >
                            Contact
                          </Button>
                        </Link>
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
                  <Button sx={{ ...inlineStyles.navLinkItems }}>
                    Register
                  </Button>
                </Link>

                <Link style={{ textDecoration: "none" }}>
                  <Button sx={{ ...inlineStyles.navLinkItems }}>Login</Button>
                </Link>

                <Link style={{ textDecoration: "none" }}>
                  <Button sx={{ ...inlineStyles.navLinkItems }}>
                    Services
                  </Button>
                </Link>

                <Link style={{ textDecoration: "none" }}>
                  <Button sx={{ ...inlineStyles.navLinkItems }}>Contact</Button>
                </Link>
              </Box>

              {/* Avatar and context menu*/}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="L" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  disableScrollLock={true}
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

                  <MenuItem onClick={handleNavigation}>
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
