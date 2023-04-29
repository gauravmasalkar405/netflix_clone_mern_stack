import { Box, List, ListItem, IconButton, useMediaQuery } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { setLogOut } from "../features/sllice";
import SearchIcon from "@mui/icons-material/Search";

const links = [
  { name: "Home", link: "/home" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");

  const logout = () => {
    dispatch(setLogOut());
    navigate("/");
  };

  return (
    //navbar
    <Box
      sx={{
        height: "6.5rem",
        position: "sticky",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        top: "0",
        zIndex: "2",
        padding: "0 4rem",
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
              height: "4rem",
            }}
          />
        </Box>

        {/* links */}
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
                  },
                }}
              >
                <Link to={link.link}>{link.name}</Link>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* right side */}

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* search bar */}

        <Box>
          {/* search icon */}
          <IconButton>
            <SearchIcon sx={{ color: "white", fontSize: "1.7rem" }} />
          </IconButton>
        </Box>

        {/* logout  */}
        <IconButton onClick={() => logout()}>
          <PowerSettingsNewIcon sx={{ color: "#d10914", fontSize: "1.7rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
