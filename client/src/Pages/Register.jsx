import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import backgroundImage from "../assets/login.jpg";
import logo from "../assets/logo.png";
import Login from "../components/Login";
import { useMediaQuery } from "@mui/material";
import Signup from "../components/Signup";

const Register = () => {
  const [isSignupPage, setIsSignupPage] = useState(false);
  const isTabletScreens = useMediaQuery("(max-width: 900px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: `linear-gradient(to right, rgb(11 11 66 / 84%), rgb(7 7 74 / 34%))`,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            mt: "0.8rem",
            width: "100%",
            height: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 2.5rem",
          }}
        >
          <Box sx={{ ml: "-15px" }}>
            <img
              src={logo}
              style={{
                height: isMobileScreens ? "50px" : "70px",
                width: isMobileScreens ? "110px" : "200px",
              }}
            ></img>
          </Box>
          <Box>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#d10914",
                height: "28px",
                width: "90x",
                fontSize: "0.7rem",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#b60811",
                },
              }}
              onClick={() => setIsSignupPage(!isSignupPage)}
            >
              {isSignupPage ? "Login" : "Sign Up"}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 4rem - 0.8rem)",
          }}
        >
          {isSignupPage ? <Signup /> : <Login />}
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
