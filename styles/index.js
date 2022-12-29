import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // ESTILOS GLOBALES
  styles: {
    global: {
      body: {
        bg: "#FFF7F0",
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
    background: {
      100: "#FFFDF5",
      200: "#FFF7F0",
    },
    black: {
      100: "#10101A",
    },
  },
  // LAYER
  layerStyles: {
    skill: {
      p: "5px 25px",
      border: "2px solid white",
      borderRadius: "15px",
      color: "black",
      bgColor: "#FFFFFF",
    },
    whiteBox: {
      boxShadow: "0px 5px 4px #00000012",
      bgColor: "#FFFFFF",
      borderRadius: "20px",
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
