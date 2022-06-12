import React from "react";
import { Alert, Snackbar } from "@mui/material";
const SuccessMsg = ({ open, ...otherProps }) => {
  return (
    <>
      <Snackbar open={open} onClose={otherProps.handleClose}
       anchorOrigin={{vertical:"bottom",horizontal:"center"}}
      >
        <Alert
          onClose={otherProps.handleClose}
         
          severity="success"
          sx={{ width: "100%",}}
        >
{otherProps.title}

        </Alert>
      </Snackbar>
    </>
  );
};

export default SuccessMsg;
