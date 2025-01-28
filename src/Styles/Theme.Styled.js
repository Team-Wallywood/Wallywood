export const theme = {
  color: {
    orange: "#D97852",
    btnSkin: "#D1B3A7",
    borderRed: "#5C1F06",
    black: "#000000",
    white: "#FFFFFF",
  },
  fonts: ["Oswald", "Open Sans"],
  grid: {
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 1fr 9fr 1fr",
        columns: "5fr 1fr",
        areas: `
                "header user"
                "navbar navbar"
                "main main"
                "footer footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar user"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(8,1fr)",
        areas: `
                "header header navbar navbar navbar navbar navbar user"
                "main main main main main main main main"
                "footer footer footer footer footer footer footer footer"
            `,
      },
    },
  },
};

export default theme;
