import { Box, Input, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import CommonButton from "../commonButton/CommonButton";


const BasicModal = ({ open, handleClose, title, subTitle,content,onSubmit }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 ,mb: 1,
    fontSize: "15px"}}>
          {subTitle}
        </Typography>
        {content}

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
        <CommonButton
            children={"Submit"}
            color={"primary"}
            variant={"contained"}
            handleClickAction={onSubmit}
          />
          <CommonButton
            children={"Cancel"}
            color={"primary"}
            variant={"contained"}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
