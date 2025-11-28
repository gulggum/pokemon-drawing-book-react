export interface Theme {
  bgColor: string;
  text: string;
  border: string;
  underLine: string;
  detailTitle: string;
}

export const lightTheme: Theme = {
  bgColor: "white",
  text: "black",
  border: "none",
  underLine: "gainsboro",
  detailTitle: "black",
};

export const darkTheme: Theme = {
  bgColor: "#121212",
  text: "#E0E0E0",
  border: "#2C2C2C",
  underLine: "#2C2C2C",
  detailTitle: "black",
};
