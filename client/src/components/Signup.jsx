import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { registerRoute } from "../routes/userRoutes";
import CircularProgress from "@mui/material/CircularProgress";

//validation
const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username cannot be more than 20 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password cannot be more than 30 characters"),
});

//initial values
const initialValuesRegister = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // sending user data to server
  const register = async (values, onSubmitProps) => {
    let { username, email, password } = values;
    username = username.trim();
    email = email.trim();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(registerRoute, formData);
      setErrorMsg(response.data.msg);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      onSubmitProps.resetForm();
    }
  };

  // passing data to register function
  const handleFormSubmit = (values, onSubmitProps) => {
    setLoader(true);
    register(values, onSubmitProps);
  };

  return (
    <Box
      sx={{
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "475px",
          width: "87%",
          maxWidth: "350px",
          backgroundColor: "rgb(0 5 16 / 75%)",
        }}
      >
        <Box sx={{ margin: "1.5rem" }}>
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: "600",
              height: "20%",
              mb: "2.5rem",
            }}
          >
            Sign Up
          </Typography>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValuesRegister}
            validationSchema={registerSchema}
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
                    flexDirection: "column",
                    gap: "0.8rem",
                  }}
                >
                  {/* error message will be shown here from  backend if any  */}
                  {errorMsg && (
                    <Typography
                      sx={{
                        color: "#d10914",
                        fontSize: "0.6428571428571428rem",
                      }}
                    >
                      {errorMsg}
                    </Typography>
                  )}
                  <TextField
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={
                      Boolean(touched.username) && Boolean(errors.username)
                    }
                    helperText={touched.username && errors.username}
                    sx={{
                      width: "100%",
                      mb: "0.5rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgb(187, 187, 187)", // set border color
                        },
                        "&:hover fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color  on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color  when focused
                        },
                        "& input": {
                          color: "rgb(187, 187, 187)", // set text color
                          backgroundColor: "rgba(0, 0, 0, 0.24)", // set background color to
                        },
                      },
                      "& .MuiFormLabel-root": {
                        color: "rgb(187, 187, 187)", // set label color
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{
                      width: "100%",
                      mb: "0.5rem",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgb(187, 187, 187)", // set border color
                        },
                        "&:hover fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color  on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color  when focused
                        },
                        "& input": {
                          color: "rgb(187, 187, 187)", // set text color
                          backgroundColor: "rgba(0, 0, 0, 0.24)", // set background color
                        },
                      },
                      "& .MuiFormLabel-root": {
                        color: "rgb(187, 187, 187)", // set label color
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
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && errors.password}
                    sx={{
                      mb: "0.5rem",
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgb(187, 187, 187)", // set border color
                        },
                        "&:hover fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgb(228, 228, 228)", // set border color when focused
                        },
                        "& input": {
                          color: "rgb(187, 187, 187)", // set text color
                          backgroundColor: "rgba(0, 0, 0, 0.24)", // set background color
                        },
                      },
                      "& .MuiFormLabel-root": {
                        color: "rgb(187, 187, 187)", // set label color
                      },
                    }}
                  />

                  {/* submit button */}
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#d10914",
                      height: "3rem",
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
                      "Sign Up"
                    )}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
