import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../routes/userRoutes";
import CircularProgress from "@mui/material/CircularProgress";

// login schema using yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup.lazy((value) =>
    yup
      .string()
      .required("required")
      .notOneOf([yup.ref("username")], "Password cannot contain the username")
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password cannot be more than 30 characters")
  ),
});

// initial values
const initialValuesLogin = {
  email: "jameswhite@gmail.com",
  password: "123456789",
};

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const isTabletScreens = useMediaQuery("(max-width: 992px)");
  const isMobileScreens = useMediaQuery("(max-width: 480px)");

  const login = async (values) => {
    let { email, password } = values;

    email = email.trim();

    try {
      const response = await axios.post(loginRoute, {
        email,
        password,
      });
      console.log(response.data.status);

      if (response.data.status === false) {
        setErrorMsg(response.data.msg);
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleFormSubmit = (values, onSubmitProps) => {
    setLoader(true);
    login(values, onSubmitProps);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: isMobileScreens ? "0.8rem" : isTabletScreens ? "1rem" : "1.5rem",
        ml: isMobileScreens ? "3rem" : isTabletScreens ? "6rem" : "9rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "80%",
          pr: isTabletScreens ? "0rem" : "10rem",
          mt: isMobileScreens ? "1rem" : "4rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: isMobileScreens
              ? "2.5rem"
              : isTabletScreens
              ? "3rem"
              : "3.5rem",
            fontWeight: isMobileScreens ? "800" : "900",
            color: "white",
          }}
        >
          Unlimited movies, TV shows and more.
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: isMobileScreens
            ? "1.125rem"
            : isTabletScreens
            ? "1.125rem"
            : "1.5rem",
          fontWeight: 600,
          color: "white",
          maxWidth: "90%",
        }}
      >
        Watch anywhere. Cancel anytime.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: isMobileScreens
            ? "1.1rem"
            : isTabletScreens
            ? "1.125rem"
            : "1.25rem",
          fontWeight: "400",
          color: "white",
          maxWidth: "90%",
          lineHeight: "1.5",
        }}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      {errorMsg && (
        <Typography
          sx={{ color: "#d10914", fontSize: "0.6428571428571428rem" }}
        >
          {errorMsg}
        </Typography>
      )}
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobileScreens && "column",
                  gap: "0.7rem",
                  mt: "1rem",
                }}
              >
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    mb: "0.5rem",
                    width: isMobileScreens ? "80%" : "25%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(187, 187, 187)", // set border color to blue
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(228, 228, 228)", // set border color to green on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(228, 228, 228)", // set border color to purple when focused
                      },
                      "& input": {
                        color: "rgb(187, 187, 187)", // set text color to red
                        backgroundColor: "rgba(0, 0, 0, 0.24)", // set background color to yellow
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "rgb(187, 187, 187)", // set label color to orange
                    },
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={Boolean(touched.password) && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    width: isMobileScreens ? "80%" : "25%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(187, 187, 187)", // set border color to blue
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(228, 228, 228)", // set border color to green on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(228, 228, 228)", // set border color to purple when focused
                      },
                      "& input": {
                        color: "rgb(187, 187, 187)", // set text color to red
                        backgroundColor: "rgba(0, 0, 0, 0.24)", // set background color to yellow
                      },
                    },
                    "& .MuiFormLabel-root": {
                      color: "rgb(187, 187, 187)", // set label color to orange
                    },
                  }}
                />
                <Button
                  type="submit"
                  sx={{
                    color: "white",
                    backgroundColor: "#d10914",
                    height: "3.42rem",
                    width: isMobileScreens ? "80%" : "8rem",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: "#b60811",
                    },
                  }}
                >
                  {/* loader */}
                  {loader ? (
                    <CircularProgress
                      sx={{
                        color: "white",
                      }}
                      size={25}
                    />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
