import {Button, ThemeProvider} from "@mui/material"
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CustomRoutes from "./components/CustomRoutes/CustomRoutes";
import {dashboardTheme} from "./theme/dashboardTheme"
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Router>
        <CustomRoutes />
        {/* <Routes>
          <Route path="/" element={<Authentication />}></Route>
        </Routes> */}
      </Router>
      </ThemeProvider>
      
  );
}

export default App;
