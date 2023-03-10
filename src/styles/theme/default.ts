const theme = {
  grid: {
    container: "45rem"
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family:
      "Fira Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.125rem",
      xlarge: "1.25rem",
      xxlarge: "1.75rem"
    }
  },

  spacings: {
    xxsmall: "0.5rem",
    xsmall: "1rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem"
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    primary: "#FE5873",
    secondary: "#4A466C",
    grayDark: "#555555",
    text: "#FFFFFF",
    light: "#E0E0E0",
    panel: "#393656",
    cover: "#343150",
    skeleton: "rgba(57, 54, 86, 0.5)"
  }
} as const;

export default theme;
