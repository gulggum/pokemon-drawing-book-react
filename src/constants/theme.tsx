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
  bgColor: "#1212",
  text: "#eoeoeo",
  border: "#03DAC6",
  underLine: "#03DAC6",
};
