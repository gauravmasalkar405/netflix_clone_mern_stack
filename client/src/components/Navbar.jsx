import {
  Box,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
  InputBase,
} from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { setLogout } from "../app/store";

const links = [
  { name: "Home", link: "/home" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];

const Navbar = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");

  const logout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  // to expand search bar in mobile screens
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  // drop down menu on menu button click in mobile screens
  const handleMenuButton = () => {
    setIsMenuButtonClicked(!isMenuButtonClicked);
  };

  // to make background of navbar active when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {/* navbar */}
      <Box
        sx={{
          position: "fixed",
          backgroundColor: scrollActive ? "rgb(3 10 26 / 63%)" : "transparent",
          height: "5rem",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobileScreens
            ? "0 1rem"
            : isTabletScreens
            ? "0 2rem"
            : "0 4rem",
          transition: " 0.3s ease-in-out",
        }}
      >
        {/* left side */}

        <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
          {/* logo */}

          <Box sx={{ gap: "2rem" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: isMobileScreens ? "3rem" : "4rem",
              }}
            />
          </Box>

          {isDesktopScreens && (
            <List sx={{ display: "flex" }}>
              {links.map((link, index) => {
                return (
                  <ListItem
                    key={index}
                    sx={{
                      width: "auto",
                      "& a": {
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "600",
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                          color: "#d10914",
                        },
                      },
                    }}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </ListItem>
                );
              })}
            </List>
          )}
          {/* links */}
        </Box>

        {/* right side */}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* search bar */}

          {/* if mobile screen */}
          {isMobileScreens ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: expanded && "rgba(95, 95, 95, 0.21)",
                gap: isMobileScreens ? "2rem" : "3rem",
                padding: isMobileScreens
                  ? "0.05rem 0.1rem 0.05rem 0.1rem"
                  : "0.1rem 0.2rem 0.1rem 0.2rem",
                borderRadius: "5px",
                transition:
                  "width 0.5s ease-in-out, padding-left 0.5s ease-in-out",
                width: expanded ? "100%" : "auto",
                paddingLeft: expanded ? "1.2rem" : "0",
              }}
            >
              {/* search bar */}
              {expanded && (
                <InputBase
                  placeholder="...search"
                  sx={{
                    color: "white",
                    pl: "1.2rem",
                  }}
                />
              )}

              {/* search icon */}
              <IconButton onClick={handleExpand}>
                <SearchIcon sx={{ color: "white", fontSize: "1.7rem" }} />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(95, 95, 95, 0.21)",
                gap: "3rem",
                padding: "0.1rem 0.2rem 0.1rem 0.2rem",
                borderRadius: "5px",
              }}
            >
              {/* search bar */}
              <InputBase
                placeholder="...search"
                sx={{ color: "white", pl: "1.2rem" }}
              />

              {/* search icon */}

              <IconButton>
                <SearchIcon sx={{ color: "white", fontSize: "1.7rem" }} />
              </IconButton>
            </Box>
          )}

          {/* if there is mobile then we will show menu button otherwise logout button */}
          {isTabletScreens ? (
            <IconButton onClick={() => handleMenuButton()}>
              {/* we are going to show dropdown menu when menu button is clicked */}

              {isMenuButtonClicked ? (
                <CloseIcon sx={{ color: "#d10914", fontSize: "1.7rem" }} />
              ) : (
                <MenuIcon sx={{ color: "#d10914", fontSize: "1.7rem" }} />
              )}
            </IconButton>
          ) : (
            <IconButton onClick={() => logout()}>
              <PowerSettingsNewIcon
                sx={{ color: "#d10914", fontSize: "1.7rem" }}
              />
            </IconButton>
          )}
        </Box>

        {/* drop down menu only in mobile and tablet screens */}
        {isTabletScreens && isMenuButtonClicked && (
          <List
            sx={{
              position: "absolute",
              top: "0",
              mt: "79px",
              right: "0",
              backgroundColor: "rgb(3 10 26 / 63%);;",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "0.3s ease-in-out",
            }}
          >
            {links.map((link, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    width: "auto",
                    "& a": {
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                      "&:hover": {
                        color: "#d10914",
                      },
                    },
                  }}
                >
                  <Link to={link.link}>{link.name}</Link>
                </ListItem>
              );
            })}
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton onClick={() => logout()}>
                <PowerSettingsNewIcon
                  sx={{
                    color: "#d10914",
                    fontSize: "1.7rem",
                  }}
                />
              </IconButton>
            </ListItem>
          </List>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
