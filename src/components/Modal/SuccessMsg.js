import React, {  useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { Alert, Snackbar } from "@mui/material";
const SuccessMsg = () => {
  const { success, loading,error } = useSelector((state) => state.studentReducer);
  const [show, setShow] = useState(loading);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Snackbar
        open={show}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {success}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SuccessMsg;
