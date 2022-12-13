import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // ESTILOS GLOBALES
  styles: {
    global: {
      body: {
        bg: "#FFFDF5",
        color: "#000",
      },
      fonts: {
        body: `'Poppins', sans-serif`,
      },

      a: {
        textDecoration: "none",
      },
    },
  },

  breakpoints: {
    mobile: "360px",
    tablet: "834px",
    desktop: "1024px",
  },
  // COLORES
  colors: {
    brand: {
      100: "#159BFF",
    },
    black: {
      50: "#1B1B27",
      100: "#0C0C12",
      200: "#10101A",
    },
    gray: {
      100: "#848484",
      200: "#354259",
    },
  },
  // LAYER
  layerStyles: {
    primaryBox: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    },
    skill: {
      p: "5px 25px",
      border: "2px solid white",
      borderRadius: "25px",
    },
  },
  // COMPONENTES
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        // solid: () => ({
        //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
        // }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
        primary: {
          bg: "brand.100",
          fontSize: "md",
          padding: "12px 24px",
          _hover: {
            bg: "#3ba0f9",
          },
        },
      },
    },
    // TEXT
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
    },
    // CONTAINER
  },
});
