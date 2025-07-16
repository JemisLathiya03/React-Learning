import { Box, Fade, Grow, Slide } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import UserTable from "../UserTable/UserTable";
import BasicCard from "../commons/basicCard/BasicCard";


function GrowTransition(props) {
  return <Grow {...props} />;
}

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Storage = () => {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Box>
      <div>
        <Button onClick={handleClick(SlideTransition)}>Open Snackbar</Button>
        <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
      </div>

<BasicCard content={<UserTable />} />
      
    </Box>
  );
};

export default Storage;
