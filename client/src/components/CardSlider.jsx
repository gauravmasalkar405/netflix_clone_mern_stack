import React, { useState } from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import Card from "./Card";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  // media querries
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");

  const handleSliderLeft = () => {
    setSliderPosition(sliderPosition - 200);
  };

  const handleSliderRight = () => {
    setSliderPosition(sliderPosition + 200);
  };

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          ml: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
          fontSize: isMobileScreens
            ? "1.5rem"
            : isTabletScreens
            ? "2.1rem"
            : "2.8rem",
          fontWeight: "600",
          color: "white",
        }}
      >
        {title}
      </Typography>
      <Box
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        sx={{
          display: "flex",
          gap: "1rem",
          position: "relative",
          padding: "2rem 0",
        }}
      >
        <Box>
          {showControls && (
            <IconButton
              onClick={handleSliderLeft}
              sx={{
                position: "absolute",
                left: "0",
                zIndex: "99",
                height: "100%",
                top: "0",
                bottom: "0",
                width: "50px",
                transition: "0.3s ease-in-out",
              }}
            >
              <KeyboardArrowLeftIcon
                sx={{ fontSize: "2rem", color: "white" }}
              />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              gap: "1rem",
              transform: `translateX(${sliderPosition}px)`,
              transition: "0.3s ease-in-out",
              ml: isMobileScreens ? "25px" : isTabletScreens ? "35px" : "50px",
            }}
          >
            {data.map((movie, index) => {
              return <Card movieData={movie} index={index} key={movie.id} />;
            })}
          </Box>

          {showControls && (
            <IconButton
              onClick={handleSliderRight}
              sx={{
                position: "absolute",
                right: "0",
                zIndex: "99",
                height: "100%",
                top: "0",
                bottom: "0",
                width: "50px",
                transition: "0.3s ease-in-out",
              }}
            >
              <KeyboardArrowRightIcon
                sx={{ fontSize: "2rem", color: "white" }}
              />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CardSlider;
