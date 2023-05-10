import { useMediaQuery, Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../app/store";

const SelectredGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");
  return (
    <Box>
      <select
        onChange={(e) => {
          dispatch(
            fetchDataByGenre({
              genres,
              genre: e.target.value,
              type,
            })
          );
        }}
        style={{
          color: "white",
          height: "2rem",
          borderRadius: "5px",
          marginLeft: isMobileScreens
            ? "25px"
            : isTabletScreens
            ? "35px"
            : "50px",
          padding: "0 3px",
          backgroundColor: "rgba(77, 76, 76, 0.4)",
          border: "1px solid white",
        }}
      >
        {genres.map((genre) => {
          return (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </Box>
  );
};

export default SelectredGenre;
