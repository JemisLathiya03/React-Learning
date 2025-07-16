import { createTheme } from "@mui/material";


export const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: '#009be2',
    },
    secondary: {
      main: '#edf2ff',
    },
    white: {
      main: '#edf2ff',
    },
  },

  // components: {
  //   // Name of the component
  //   MuiButton: {
  //     styleOverrides: {
  //       // Name of the slot
  //       root: {
  //         // Some CSS
  //         fontSize: '4rem',
  //       },
  //     },
  //   },
  // },


  // components: {
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         variants: [
  //           {
  //             props: { variant: 'outlined' },
  //             style: {
  //               borderWidth: '3px',
  //               color:"#000000"
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },


  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: "20px",
  //         fontSize: "16px",
  //       },
  //     },
  //   },
  // },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" }, // Define the custom variant
          style: {
            textTransform: "none", // Prevent uppercase transformation
            border: `2px dashed blue`, // Add a dashed border
            padding: "8px 16px",
            color: "blue",
          },
        },
      ],
    },
  },
});
