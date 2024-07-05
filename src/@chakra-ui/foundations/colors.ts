export type Colors = typeof colors

const colors = {
  gray: {
    100: "#F7F7F7",
    150: "#F2F2F2",
    200: "#E7E7E7",
    300: "#C8C8C8",
    400: "#8C8C8C",
    500: "#616161",
    600: "#333333",
    700: "#222222",
    800: "#1B1B1B",
    900: "#141414",
  },
  blue: {
    50: "#F6F6FF",
    100: "#EBEBFF",
    200: "#D6D6FF",
    300: "#9999FF",
    400: "#5555FF",
    500: "#1C1CFF",
    600: "#0000E0",
    700: "#0000A3",
    800: "#000066",
    900: "#000029",
  },
  orange: {
    50: "#FFF3ED",
    100: "#FFE5D6",
    200: "#FFCBAD",
    300: "#FFB185",
    400: "#FF985C",
    500: "#FF7324",
    550: "#DF5A0E",
    600: "#B84300",
    700: "#7A2D00",
    800: "#521E00",
    900: "#2F1000",
  },
  red: {
    100: "#f7c8c8",
    500: "#b80000",
    // ! Deprecating 900
    900: "#1B0C0C",
  },
  green: {
    100: "#ddf4e4",
    // ! Deprecating 400
    400: "#48BB78",
    500: "#0a7146",
    // ! Deprecating 900
    900: "#0A160E",
  },
  yellow: {
    200: "#fff8df",
    500: "#bd8400",
  },
  white: "#FFFFFF",
  white_a:{
    0: "rgba(255, 255, 255, 0.0)",
    25: "rgba(255, 255, 255, 0.25)",
    50: "rgba(255, 255, 255, 0.05)",
    75: "rgba(255, 255, 255, 0.75)",
    100: "rgba(255, 255, 255, 0.1)",
    200: "rgba(255, 255, 255, 0.2)",
    300: "rgba(255, 255, 255, 0.3)",
    400: "rgba(255, 255, 255, 0.4)",
    500: "rgba(255, 255, 255, 0.5)",
    600: "rgba(255, 255, 255, 0.6)",
    700: "rgba(255, 255, 255, 0.7)",
    800: "rgba(255, 255, 255, 0.8)",
    900: "rgba(255, 255, 255, 0.9)",
    950: "rgba(255, 255, 255, 0.95)",
  },
  black: "#000000",
  black_a:{
    0: "rgba(0, 0, 0, 0.0)",
    25: "rgba(0, 0, 0, 0.25)",
    50: "rgba(0, 0, 0, 0.05)",
    75: "rgba(0, 0, 0, 0.75)",
    100: "rgba(0, 0, 0, 0.1)",
    200: "rgba(0, 0, 0, 0.2)",
    300: "rgba(0, 0, 0, 0.3)",
    400: "rgba(0, 0, 0, 0.4)",
    500: "rgba(0, 0, 0, 0.5)",
    600: "rgba(0, 0, 0, 0.6)",
    700: "rgba(0, 0, 0, 0.7)",
    800: "rgba(0, 0, 0, 0.8)",
    900: "rgba(0, 0, 0, 0.9)",
    950: "rgba(0, 0, 0, 0.95)",
  },
  purple: {
    100: "#F1EAFA",
    200: "#E7DBF9",
    300: "#C9B3F5",
    400: "#BA96EA",
    500: "#A779E2",
    600: "#8C56D1",
    700: "#7B43C2",
    800: "#583781",
    900: "#342B40",
  },
}

export default colors
