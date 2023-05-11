import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import StarRateIcon from "@mui/icons-material/StarRate";
import MovingIcon from "@mui/icons-material/Moving";
import video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const SearchQuery = () => {
  const navigate = useNavigate();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  const isDesktopScreens = useMediaQuery("(min-width:1000px)");
  const searchQuery = useSelector((state) => state.netflix.searchQuery);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ zIndex: "2", position: "fixed", top: "0" }}>
        <Navbar />
      </Box>

      {isDesktopScreens && (
        <>
          {/* movie details */}
          <Box
            sx={{
              mt: isMobileScreens ? "20%" : "8%",
              ml: "auto",
              mr: "auto",
              color: "white",
              backgroundColor: "#1f1f1f",
              width: "90%",
              padding: "1rem 2.5rem",
              borderRadius: "5px",
            }}
          >
            {/* header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "0.5rem",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "2.2rem", mb: "-0.3rem" }}>
                  {searchQuery.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                  }}
                >
                  RELEASE: {searchQuery.release_date}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                    }}
                  >
                    IMDB RATING
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.3rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StarRateIcon sx={{ color: "rgb(245, 197, 24)" }} />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.78rem",
                        fontWeight: "600",
                      }}
                    >
                      {searchQuery.vote_average}/10
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.78rem",
                      fontWeight: "600",
                    }}
                  >
                    POPULARITY
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.3rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MovingIcon sx={{ color: "#0fe10c" }} />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.78rem",
                        fontWeight: "600",
                      }}
                    >
                      {searchQuery.popularity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            {/* image and video */}
            <Box sx={{ mb: "1rem", mt: "1rem" }}>
              <img
                style={{
                  height: "390px",
                  width: "278px",
                }}
                src={`https://image.tmdb.org/t/p/w500${searchQuery.poster_path}`}
                alt="movie"
              />
              <video
                src={video}
                autoPlay
                loop
                onClick={() => navigate("/player")}
                style={{
                  height: "390px",
                  width: "calc(100% - 278px)",
                }}
              />
            </Box>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            {/* genre */}
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                mt: "0.5rem",
                mb: "0.5rem",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.82rem",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.281)",
                  padding: "2px 12px",
                  borderRadius: "6rem",
                  pt: "1px",
                }}
              >
                Drama
              </Box>
              <Box
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.281)",
                  padding: "2px 12px",
                  borderRadius: "6rem",
                  pt: "1px",
                }}
              >
                Crime
              </Box>
              <Box
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.281)",
                  padding: "2px 12px",
                  borderRadius: "6rem",
                  pt: "1px",
                }}
              >
                Animation
              </Box>
              <Box
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.281)",
                  padding: "2px 12px",
                  borderRadius: "6rem",
                  pt: "1px",
                }}
              >
                Sci-Fi
              </Box>
            </Box>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            {/* description */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.78rem",
                mt: "0.5rem",
                mb: "0.5rem",
              }}
            >
              {searchQuery.overview}
            </Typography>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            {/* language */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.78rem",
                fontWeight: "600",
                mt: "0.5rem",
              }}
            >
              Lang: {searchQuery.original_language}
            </Typography>
          </Box>
        </>
      )}

      {/* for tablet screens and mobile screens*/}
      {isTabletScreens && (
        <>
          <Box
            sx={{
              mt: isMobileScreens ? "20%" : isTabletScreens ? "12%" : "8%",
              ml: "auto",
              mr: "auto",
              color: "white",
              backgroundColor: "#1f1f1f",
              width: "90%",
              padding: isMobileScreens ? "1rem 1rem" : "1rem 2.5rem",
              borderRadius: "5px",
            }}
          >
            {/* header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "0.5rem",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: isMobileScreens ? "1.2rem" : "2.2rem",
                    mb: isMobileScreens ? "0rem" : "-0.3rem",
                  }}
                >
                  {searchQuery.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: isMobileScreens ? "0.62rem" : "0.78rem",
                    fontWeight: "600",
                  }}
                >
                  RELEASE: {searchQuery.release_date}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobileScreens ? "0.62rem" : "0.78rem",
                      fontWeight: "600",
                    }}
                  >
                    IMDB RATING
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.3rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StarRateIcon
                      sx={{
                        color: "rgb(245, 197, 24)",
                        fontSize: isMobileScreens && "1rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: isMobileScreens ? "0.62rem" : "0.78rem",
                        fontWeight: "600",
                      }}
                    >
                      {searchQuery.vote_average}/10
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobileScreens ? "0.62rem" : "0.78rem",
                      fontWeight: "600",
                    }}
                  >
                    POPULARITY
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.3rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MovingIcon
                      sx={{
                        color: "#0fe10c",
                        fontSize: isMobileScreens && "1rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: isMobileScreens ? "0.62rem" : "0.78rem",
                        fontWeight: "600",
                      }}
                    >
                      {searchQuery.popularity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />
            <video
              src={video}
              autoPlay
              loop
              onClick={() => navigate("/player")}
              style={{
                height: isMobileScreens ? "200px" : "390px",
                width: "100%",
              }}
            />

            <Divider
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.281)",
              }}
            />

            <Box sx={{ mt: "1rem", display: "flex", gap: "0.7rem" }}>
              <img
                style={{
                  height: isMobileScreens ? "200px" : "280px",
                  width: isMobileScreens ? "170px" : "190px",
                }}
                src={`https://image.tmdb.org/t/p/w500${searchQuery.poster_path}`}
                alt="movie"
              />
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    gap: isMobileScreens ? "0.8rem" : "1rem",
                    mt: "0.5rem",
                    mb: "1rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: isMobileScreens ? "0.6rem" : "0.82rem",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.281)",
                      padding: isMobileScreens ? "1px 5px" : "1px 10px",
                      borderRadius: "1rem",
                      pb: "2px",
                    }}
                  >
                    Drama
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.281)",
                      padding: isMobileScreens ? "1px 5px" : "1px 10px",
                      borderRadius: "1rem",
                      pb: "2px",
                    }}
                  >
                    Crime
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.281)",
                      padding: isMobileScreens ? "1px 5px" : "1px 10px",
                      borderRadius: "1rem",
                      pb: "2px",
                    }}
                  >
                    Animation
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.281)",
                      padding: isMobileScreens ? "1px 5px" : "1px 10px",
                      borderRadius: "1rem",
                      pb: "2px",
                    }}
                  >
                    Sci-Fi
                  </Box>
                </Box>

                <Divider
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.281)",
                    width: "100%",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.78rem",
                    mt: "0.5rem",
                    mb: "0.5rem",
                  }}
                >
                  {searchQuery.overview}
                </Typography>

                <Divider
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.281)",
                  }}
                />

                {/* lang */}
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    mt: "0.5rem",
                  }}
                >
                  Lang: {searchQuery.original_language}
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SearchQuery;
