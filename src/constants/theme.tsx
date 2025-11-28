export interface Theme {
  bgColor: string;
  text: string;
  border: string;
  underLine: string;
}

export const lightTheme: Theme = {
  bgColor: "white",
  text: "black",
  border: "none",
  underLine: "gainsboro",
};

export const darkTheme: Theme = {
  bgColor: "#121212",
  text: "#E0E0E0",
  border: "#2C2C2C",
  underLine: "#03DAC6",
};
