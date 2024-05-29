"use client";

import { Quicksand } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey, teal } from '@mui/material/colors';

const quicksand = Quicksand({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: quicksand.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[900],
    },
  },
});

export default theme;
