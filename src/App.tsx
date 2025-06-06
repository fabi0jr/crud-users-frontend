import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/main.scss";
import { QueryProvider } from "./providers/QueryProvider";
import { ToastContainer } from "react-toastify";
import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17876D",
    },
    secondary: {
      main: "#00AAC1",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#F0F0F0",
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
